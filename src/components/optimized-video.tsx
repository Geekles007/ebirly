'use client';

import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

interface OptimizedVideoProps {
  src: string;
  className?: string;
  objectFit?: 'cover' | 'contain' | 'fill';
  objectPosition?: string;
  height?: string | number;
  width?: string | number;
  priority?: boolean;
  showLoadingIndicator?: boolean;
  onError?: () => void;
}

export default function OptimizedVideo({
  src,
  className,
  objectFit = 'cover',
  objectPosition = 'center',
  height = 'auto',
  width = 'auto',
  priority = false,
  showLoadingIndicator = true,
  onError,
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true); // Always start as loading on both server and client
  const [isVisible, setIsVisible] = useState(false); // Start as not visible for consistent hydration
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after hydration
  useEffect(() => {
    setIsMounted(true);
    if (priority) {
      setIsVisible(true);
      setIsLoading(!priority);
    }
  }, [priority]);

  // Add a timeout to force loading to complete after 5 seconds
  useEffect(() => {
    if (!isLoading || !isMounted) return;
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [isLoading, isMounted]);

  useEffect(() => {
    if (!videoRef.current || !isMounted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) {
              videoRef.current.play().catch((error) => {
                console.log('Video play error:', error);
                // Set loading to false even if play fails
                setIsLoading(false);
              });
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );
    
    observer.observe(videoRef.current);
    
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isMounted]);

  // If priority is true, preload and autoplay the video
  useEffect(() => {
    if (priority && videoRef.current && isMounted) {
      videoRef.current.play().catch((error) => {
        console.log('Priority video play error:', error);
        setIsLoading(false);
      });
    }
  }, [priority, isMounted]);

  const handleVideoLoaded = () => {
    if (isMounted) {
      console.log('Video loaded:', src);
      setIsLoading(false);
    }
  };

  const handleVideoError = () => {
    if (isMounted) {
      console.error('Error loading video:', src);
      setIsLoading(false);
      setHasError(true);
      if (onError) {
        onError();
      }
    }
  };

  return (
    <div 
      className={cn(
        "relative overflow-hidden",
        className
      )}
      style={{ height, width }}
    >
      {isMounted && isLoading && showLoadingIndicator && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/20">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-primary"></div>
        </div>
      )}
      
      {isMounted && hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-sm text-gray-500">Video could not be loaded</p>
        </div>
      )}
      
      {isMounted && (isVisible || priority) && !hasError && (
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoaded}
          onError={handleVideoError}
          className={cn(
            "pointer-events-none",
            isLoading ? "opacity-0" : "opacity-100",
            "transition-opacity duration-300"
          )}
          style={{
            objectFit,
            objectPosition,
            height: '100%',
            width: '100%',
          }}
        />
      )}
    </div>
  );
} 