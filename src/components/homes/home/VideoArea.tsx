'use client';

import { useEffect } from 'react';
import 'jarallax/dist/jarallax.css';

const VideoArea = ({ style_2 }: any) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('jarallax').then(({ jarallax }) => {
        jarallax(document.querySelectorAll<HTMLElement>('.jarallax'), {
          speed: 0.6,
        });
      });

      const videoPopup = document.getElementById('videoPopup') as HTMLDivElement | null;
      const videoFrame = document.getElementById('videoFrame') as HTMLIFrameElement | null;
      const closeBtn = document.getElementById('videoCloseButton') as HTMLSpanElement | null;

      if (videoPopup && videoFrame && closeBtn) {
        document.querySelectorAll<HTMLElement>('.video-btn').forEach((button) => {
          button.addEventListener('click', function () {
            const videoUrl = (this as HTMLElement).getAttribute('data-video');
            if (videoUrl) {
              let updatedUrl = videoUrl;
              if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
                updatedUrl += '?autoplay=1';
              } else if (videoUrl.includes('vimeo.com')) {
                updatedUrl += '?autoplay=1';
              }
              videoFrame.src = updatedUrl;
              videoPopup.style.display = 'flex';
            }
          });
        });

        closeBtn.onclick = () => {
          videoPopup.style.display = 'none';
          videoFrame.src = '';
        };

        window.onclick = (event: MouseEvent) => {
          if (event.target === videoPopup) {
            videoPopup.style.display = 'none';
            videoFrame.src = '';
          }
        };
      }
    }
  }, []);

  return (
    <>
      {!style_2 && (
        <div id="videoPopup" className="video-popup-iframe" style={{ zIndex: '9999' }}>
          <div className="video-content">
            <span className="close-btn" id="videoCloseButton">
              &times;
            </span>
            <div className="ratio ratio-16x9">
              <iframe id="videoFrame" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
          .responsive-video {
            height: 250px !important;
          }
        }
      `}</style>

      <div
        className="cta-video-wrapper position-relative"
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: 'none',
          color: '#E3B77A',
        }}
      >
        {style_2 && <div className="divider"></div>}

        <div
          className="container"
          style={{
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            minHeight: '100vh',
          }}
        >
          {/* Left Side - Video */}
          <div
            className="responsive-video"
            style={{
              flex: '1 1 50%',
              height: '500px',
              overflow: 'hidden',
              borderRadius: '1rem',
              position: 'relative',
            }}
          >
            <video
              src="/assets/img/core-img/BG.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '1rem',
              }}
            ></video>
          </div>

          {/* Right Side - Text */}
          <div
            style={{
              flex: '1 1 50%',
              height: '100%',
              backgroundColor: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <h2
              className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-extrabold text-black mb-6 leading-snug"
            >
              Why We Exist
            </h2>
            <p
              className="text-[1.1rem] sm:text-[1.25rem] leading-relaxed text-justify text-black"
            >
              Our mission is to deliver outstanding legal service guided by our core values of insight,
              integrity, and impact. We exist to simplify complex legal challenges, empowering clients
              with clear guidance and confidence. Each case we undertake is an opportunity to provide
              meaningful support and create positive outcomes for individuals and businesses navigating
              critical immigration decisions.
            </p>
          </div>
        </div>

      </div>
    </>
  );
};

export default VideoArea;
