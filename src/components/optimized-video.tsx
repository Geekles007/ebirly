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
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // Start as visible to ensure videos show immediately
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after hydration
  useEffect(() => {
    setIsMounted(true);
    console.log('Component mounted, video src:', src);
  }, [src]);

  // Add a timeout to force loading to complete after 5 seconds
  useEffect(() => {
    if (!isLoading || !isMounted) return;
    
    const timer = setTimeout(() => {
      console.log('Loading timeout reached for video:', src);
      setIsLoading(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [isLoading, isMounted, src]);

  // Play video when it becomes visible
  useEffect(() => {
    if (!videoRef.current || !isMounted) return;

    // Try to play the video immediately
    videoRef.current.play().catch((error) => {
      console.log('Initial video play error:', error);
      // Some browsers require user interaction before playing videos
      // We'll still show the first frame
      setIsLoading(false);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log('Intersection observer entry:', entry.isIntersecting, src);
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (videoRef.current) {
              videoRef.current.play().catch((error) => {
                console.log('Video play error on intersection:', error);
                setIsLoading(false);
              });
            }
          } else {
            setIsVisible(false);
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
  }, [isMounted, src]);

  const handleVideoLoaded = () => {
    console.log('Video loaded successfully:', src);
    setIsLoading(false);
  };

  const handleVideoError = () => {
    console.error('Error loading video:', src);
    setIsLoading(false);
    setHasError(true);
    if (onError) {
      onError();
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
      
      {isMounted && !hasError && (
        <video
          ref={videoRef}
          src={src}
          loop
          muted
          playsInline
          autoPlay
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