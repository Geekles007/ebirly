/**
 * Video utility functions for optimizing video loading and playback
 */

/**
 * Checks if the browser supports a specific video format
 * @param format The video format to check (e.g., 'webm', 'mp4')
 * @returns Boolean indicating if the format is supported
 */
export function isVideoFormatSupported(format: string): boolean {
  if (typeof document === 'undefined') return false; // SSR check
  
  const video = document.createElement('video');
  
  switch (format.toLowerCase()) {
    case 'webm':
      return video.canPlayType('video/webm') !== '';
    case 'mp4':
      return video.canPlayType('video/mp4') !== '';
    case 'mov':
      return video.canPlayType('video/quicktime') !== '';
    default:
      return false;
  }
}

/**
 * Gets the optimal video source based on browser support
 * @param videoPath The original video path
 * @returns The optimal video source path
 */
export function getOptimalVideoSource(videoPath: string): string {
  // For now, we're just returning the original path
  // In the future, this could be enhanced to return WebM for supported browsers
  // and fallback to MP4 for others
  return videoPath;
}

/**
 * Preloads a video to improve playback performance
 * @param videoPath The path to the video to preload
 */
export function preloadVideo(videoPath: string): void {
  if (typeof document === 'undefined') return; // SSR check
  
  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = videoPath;
  link.as = 'video';
  link.type = 'video/quicktime'; // Assuming .mov files
  
  document.head.appendChild(link);
} 