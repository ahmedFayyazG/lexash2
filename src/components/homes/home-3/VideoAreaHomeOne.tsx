'use client';

import { useRef } from 'react';
import 'jarallax/dist/jarallax.css';

const VideoAreaHomeOne: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <>
      <div
        className="video-wrapper jarallax"
        data-jarallax=""
        data-speed="0.6"
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
        }}
      >
        {/* Video */}
 <video
  ref={videoRef}
  src="/assets/lawvideo.mp4" // not .mov
  autoPlay
  muted
  loop
  playsInline
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  }}
/>

        {/* Optional Overlay Play Button - remove if autoplay only */}
        {/* <div
          className="video-btn wow fadeInUp"
          data-wow-duration="1000ms"
          data-wow-delay="1000ms"
          style={{
            position: 'relative',
            zIndex: 2,
            cursor: 'pointer',
          }}
          onClick={() => videoRef.current?.play()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path
              d="M5.10545 0.529181C2.94172 -0.711968 1.1875 0.304796 1.1875 2.79837V21.1999C1.1875 23.6959 2.94172 24.7114 5.10545 23.4714L21.1893 14.2474C23.3538 13.0059 23.3538 10.9943 21.1893 9.753L5.10545 0.529181Z"
              fill="#fff"
            />
          </svg>
        </div> */}
      </div>
    </>
  );
};

export default VideoAreaHomeOne;
