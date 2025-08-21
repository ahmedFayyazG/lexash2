'use client';

import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React, { useState } from "react";

export default function AppointmentBookingPage() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFF', position: 'relative' }}>
            <HeaderOne/>

            <div className="divider2"></div>
            <div className="divider2"></div>

            <section style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '1rem', position: 'relative' }}>
                {isLoading && (
                    <div className="loader-overlay">
                        <div id="triangle">
                            <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 2000 2000">
                                <polygon className="cls-1" points="928 781 1021 951 784.5 1371.97 1618 1371.97 1530.32 1544 509 1539 928 781"></polygon>
                                <polygon className="cls-3" points="1618 1371.97 784.5 1371.97 874.93 1211 1346 1211 923.1 456 1110.06 456 1618 1371.97"></polygon>
                                <g id="Layer_2" data-name="Layer 2">
                                    <polygon className="cls-2" points="418 1372.74 509 1539 928 781 1162.32 1211 1346 1211 923.1 456 418 1372.74"></polygon>
                                </g>
                            </svg>
                        </div>
                    </div>
                )}

                <div style={{ width: '100%', overflow: 'hidden', opacity: isLoading ? 0 : 1, transition: 'opacity 0.5s' }}>
                    <iframe
                        src="https://calendly.com/it-lexingtonashworth"
                        style={{ height: '800px', width: '100%', border: '0' }}
                        
                        title="Book an Appointment"
                        allowFullScreen
                        onLoad={() => setIsLoading(false)}
                    ></iframe>
                </div>
            </section>

            <FooterOne style_2={true} />
        </main>
    );
}


