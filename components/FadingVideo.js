const { useRef, useEffect } = React;

const FadingVideo = ({ src, className, style }) => {
  const videoRef = useRef(null);
  const rAFRef = useRef(null);
  const fadingOutRef = useRef(false);
  const timeoutRef = useRef(null);

  // Custom JS opacity fade using requestAnimationFrame
  const fadeTo = (targetOpacity, duration = 500) => {
    if (rAFRef.current) {
      cancelAnimationFrame(rAFRef.current);
    }
    const video = videoRef.current;
    if (!video) return;

    // Read current opacity directly from video style to start from the current opacity state
    const currentStyleOpacity = video.style.opacity;
    const startOpacity = currentStyleOpacity !== "" ? parseFloat(currentStyleOpacity) : 0;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentOpacity = startOpacity + (targetOpacity - startOpacity) * progress;
      video.style.opacity = currentOpacity.toString();

      if (progress < 1) {
        rAFRef.current = requestAnimationFrame(animate);
      }
    };
    rAFRef.current = requestAnimationFrame(animate);
  };

  const handleLoadedData = () => {
    const video = videoRef.current;
    if (!video) return;
    video.style.opacity = "0";
    video.play().then(() => {
      fadeTo(1, 500);
    }).catch(err => {
      console.warn("Autoplay was blocked or interrupted:", err);
    });
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const duration = video.duration;
    const currentTime = video.currentTime;

    if (!duration || isNaN(duration)) return;

    // Trigger fade out 0.55s before the end of the video
    if (!fadingOutRef.current && (duration - currentTime <= 0.55) && (duration - currentTime > 0)) {
      fadingOutRef.current = true;
      fadeTo(0, 500);
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    video.style.opacity = "0";
    // After 100ms reset currentTime to 0, play, and fade back to 1
    timeoutRef.current = setTimeout(() => {
      video.currentTime = 0;
      video.play().then(() => {
        fadingOutRef.current = false;
        fadeTo(1, 500);
      }).catch(err => {
        console.warn("Replay failed:", err);
      });
    }, 100);
  };

  useEffect(() => {
    // Cleanup on unmount
    return () => {
      if (rAFRef.current) cancelAnimationFrame(rAFRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      style={{ ...style, opacity: 0 }}
      muted
      playsInline
      preload="auto"
      onLoadedData={handleLoadedData}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
    />
  );
};

window.FadingVideo = FadingVideo;
