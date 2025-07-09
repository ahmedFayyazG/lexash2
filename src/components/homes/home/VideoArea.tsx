'use client';

import { useEffect } from 'react';
import 'jarallax/dist/jarallax.css';
import Count from '@/common/count';

const counter_data = [
  {
    count: 28,
    label: 'Why We Exist',
    description:
      'Our mission is to deliver outstanding legal service guided by our core values of insight, integrity, and impact. We exist to simplify complex legal challenges, empowering clients with clear guidance and confidence. Each case we undertake is an opportunity to provide meaningful support and create positive outcomes for individuals and businesses navigating critical immigration or estate planning decisions.',
  },
];

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

      <div
        className="cta-video-wrapper position-relative"
        style={{
          backgroundColor: '#FFFFFF',
          backgroundImage: 'none',
          color: '#E3B77A',
        }}
      >
        {style_2 && <div className="divider"></div>}

        <div className="container">
          {!style_2 && (
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                height: '100vh',
                backgroundColor: '#FFFFFF',
              }}
            >
              <div
                className="video-wrap position-relative"
                style={{
                  width: '100%',
                  height: '700px',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF',
                  backgroundImage: 'none',
                }}
              >
                <video
                  src="/assets/img/core-img/BG.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{ objectFit: 'cover' }}
                ></video>
              </div>
            </div>
          )}
        </div>

        <div className="container py-2">
          <div className="text-center">
        <h2
  style={{
    fontSize: '60px', // or try 64px for bigger text
    color: '#000',
    fontWeight: 'bold',
    marginBottom: '1.5rem'
  }}
>
  Why We Exist
</h2>
<p
  className="mx-auto text-[1.125rem] sm:text-[1.7rem] leading-relaxed text-justify sm:text-center text-black"
  style={{ maxWidth: '900px' }}
>
  Our mission is to deliver outstanding legal service guided by our core values of insight, integrity, and impact. We exist to simplify complex legal challenges, empowering clients with clear guidance and confidence. Each case we undertake is an opportunity to provide meaningful support and create positive outcomes for individuals and businesses navigating critical immigration or estate planning decisions.
</p>

          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default VideoArea;
