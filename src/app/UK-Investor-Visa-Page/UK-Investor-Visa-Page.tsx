'use client';

import React, { ReactNode } from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);
// --- INTERFACES ---
interface Reason {
    title: string;
    description: string;
    icon: ReactNode;
}

interface Alternative {
    title: string;
    description: string;
    href: string;
    requirements?: string[];
}

interface Benefit {
    title: string;
    icon: ReactNode;
}

interface Advantage {
    title: string;
    description: string;
}

// --- COMPONENT DATA ---
const closureReasons: Reason[] = [
    { title: 'Wealth Verification Risks', description: 'Serious doubts about the origins of funds, particularly when applicants were politically exposed.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> },
    { title: 'Sanctions Evasion', description: 'Fears that some were using the visa route to bypass international sanctions, an issue that gained urgency.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg> },
    { title: 'Limited Economic Benefit', description: 'Critics argued the overall benefit to the UK economy was not as strong as what skilled migrants contributed.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> },
    { title: 'Due Diligence Challenges', description: 'Verifying the legitimacy of large sums from overseas proved difficult, making the system hard to regulate.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg> },
];

const alternatives: Alternative[] = [
    { 
        title: 'Innovator Founder Visa', 
        description: 'Best for entrepreneurs with genuinely innovative, scalable business ideas.', 
        href: '#',
        requirements: ['Endorsement from an approved body', '£50,000 investment funds', 'Business must be innovative, viable, and scalable', 'Regular endorsement reviews']
    },
    { 
        title: 'UK Expansion Worker Visa', 
        description: 'Best for senior employees of overseas businesses establishing UK branches.', 
        href: '#',
        requirements: ['Must already work for the overseas employer', 'Business must not have started trading in the UK yet', 'Senior manager or specialist employee role', 'Must have worked for employer outside UK for at least 12 months']
    },
    { title: 'Global Talent Visa', description: 'Ideal for recognized leaders in technology, sciences, humanities, or arts.', href: '#' },
    { title: 'Self-Sponsorship', description: 'Best for entrepreneurs who want full control without needing external endorsements.', href: '#' },
];

const selfSponsorshipBenefits: Benefit[] = [
    { title: 'Sponsor Yourself', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
    { title: 'Run Any Business', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="22" x2="6" y2="12"></line><line x1="18" y1="22" x2="18" y2="12"></line><path d="M12 22V8.8c0-1.4 1.2-2.8 2.5-2.8s2.5 1.4 2.5 2.8V22"></path><path d="M12 22V8.8c0-1.4-1.2-2.8-2.5-2.8S7 7.4 7 8.8V22"></path><path d="M5 12H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3v6zm14 0h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-3v6z"></path></svg> },
    { title: 'Path to ILR', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg> },
    { title: 'No More Endorsements', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg> },
];

const unfairAdvantages: Advantage[] = [
    { title: 'You Pick Your Business', description: 'Choose any genuine UK business, whether it’s a consultancy or tech start-up, based on your passion and relevant experience.' },
    { title: 'No Innovation Restrictions', description: 'Unlike the Innovator Founder visa, your business doesn\'t need to be endorsed as "innovative, viable, and scalable."' },
    { title: 'Start Trading from Day One', description: 'Acquire an existing, actively trading business to hit the ground running immediately.' },
    { title: 'Visa Security', description: 'Your visa is tied to a business you control, providing greater stability than relying on an external employer.' },
    { title: 'Family Stability', description: 'Bring your spouse and children with you, giving them the right to work and study in the UK.' },
    { title: 'Path to UK Settlement', description: 'This route provides a clear pathway to Indefinite Leave to Remain (ILR) after five years.' },
];


// --- MAIN PAGE COMPONENT ---
const UKInvestorVisaPage = () => {
    useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));

    return () => {
        elementsToAnimate.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <div className="pageWrapper">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
          body { margin: 0; font-family: 'Poppins', sans-serif; line-height: 1.8; color: #333; background: #fff; font-weight: 300; }
          * { box-sizing: border-box; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
          h1, h2, h3, h4, h5 { font-family: 'Poppins', sans-serif; color: #212C3C; font-weight: 400; }
          h1 { font-size: 3rem; line-height: 1.25; }
          h2 { font-size: 2.5rem; text-align: center; margin-bottom: 1rem; }
          p { color: #555; font-size: 1rem; }
          @media (max-width: 768px) {
            h1 { font-size: 2.25rem; }
            h2 { font-size: 2rem; }
          }
        `}</style>
        <style>{`
          .animate-on-scroll { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
          .animate-on-scroll.is-visible { opacity: 1; transform: translateY(0); }
          .delay-1 { transition-delay: 0.1s; }
          .delay-2 { transition-delay: 0.2s; }
          .delay-3 { transition-delay: 0.3s; }
          
          .hero-section {
            background-color: #212C3C;
            color: white;
            padding: 7rem 0;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .hero-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; }
          .gradient-blob { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.25; }
          .blob1 { width: 600px; height: 600px; background: #EBBF7D; top: -200px; left: -200px; animation: moveBlob 20s infinite alternate; }
          .blob2 { width: 500px; height: 500px; background: #4A5568; bottom: -150px; right: -150px; animation: moveBlob 25s infinite alternate-reverse; }
          @keyframes moveBlob {
            0% { transform: scale(1.1) translate(0, 0) rotate(0deg); }
            100% { transform: scale(1.4) translate(120px, 80px) rotate(180deg); }
          }
          .hero-content { max-width: 800px; margin: 0 auto; position: relative; z-index: 2; }
          .hero-content h1 { color: #fff; animation: fadeInDown 1s ease-out 0.2s backwards; }
          .hero-content p { font-size: 1.1rem; margin: 1.5rem 0 2.5rem; color: rgba(255, 255, 255, 0.85); animation: fadeInDown 1s ease-out 0.4s backwards; }
          @keyframes fadeInDown { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
          .cta-button { background: #EBBF7D; color: #212C3C; padding: 0.8rem 1.8rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s ease; animation: fadeInUp 1s ease-out 0.6s backwards; }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          .cta-button:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(235, 191, 125, 0.4); }
          
          .section { padding: 5rem 0; }
          .section.bg-light { background: #f8f9fa; }
          .section-header { text-align: center; max-width: 800px; margin: 0 auto 3.5rem; }
          .section-header .subtitle { color: #EBBF7D; font-weight: 500; margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 1px; }

          .reasons-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
          .reason-card { background: #fff; padding: 2rem; border-radius: 12px; border: 1px solid #e9ecef; text-align: center; }
          .reason-icon { width: 48px; height: 48px; color: #c0392b; margin: 0 auto 1.5rem; }
          .reason-card h4 { font-size: 1.2rem; }

          .alternatives-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
          .alternative-card { background: #fff; padding: 2rem; border-radius: 12px; border: 1px solid #e9ecef; transition: all 0.3s ease; display: flex; flex-direction: column; }
          .alternative-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(44, 62, 80, 0.1); }
          .alternative-card h3 { margin-top: 0; }
          .alternative-card .description { flex-grow: 1; }
          .requirements-list { list-style: none; padding: 1.5rem 0 0; margin: 1.5rem 0 0; border-top: 1px solid #e9ecef; }
          .requirements-list li { display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 0.5rem; font-size: 0.9rem; }
          .requirements-list li svg { color: #27ae60; flex-shrink: 0; margin-top: 5px; }
          .alternative-card a { color: #EBBF7D; text-decoration: none; font-weight: 500; margin-top: 1rem; display: inline-block; }

          .self-sponsorship-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
          .benefits-grid-small { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; }
          .benefit-item { display: flex; align-items: center; gap: 1rem; }
          .benefit-icon-small { width: 36px; height: 36px; color: #EBBF7D; flex-shrink: 0; }
          .benefit-item h5 { margin: 0; font-size: 1.1rem; }
          
          .advantages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
          .advantage-card { background: #fff; padding: 2rem; border-radius: 12px; border: 1px solid #e9ecef; }
          .advantage-card h4 { margin-top: 0; }

          @media (max-width: 992px) { 
            .alternatives-grid { grid-template-columns: 1fr; }
            .self-sponsorship-grid { grid-template-columns: 1fr; }
          }
          @media (max-width: 768px) {
            .benefits-grid-small { grid-template-columns: 1fr; }
          }
        `}</style>

        <section className="hero-section">
          <div className="hero-background">
            <div className="gradient-blob blob1"></div>
            <div className="gradient-blob blob2"></div>
          </div>
          <div className="container">
            <div className="hero-content">
              <h1>UK Investor Visa: The Visa Route for High-Net-Worth Individuals in 2025</h1>
              <p>
                The UK Tier 1 Investor visa was permanently closed in February 2022. Read on to understand what happened and what viable alternatives exist for high-net-worth individuals in 2025.
              </p>
              <Link href="#contact" className="cta-button">Contact Our Lawyers</Link>
            </div>
          </div>
        </section>

        <section id="why-closed" className="section">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">ROUTE CLOSURE</div>
                    <h2>Why the UK Government Closed the Investor Visa</h2>
                    <p>The Home Office shut down the Tier 1 Investor route due to significant concerns around national security, due diligence, and the true economic benefit to the UK.</p>
                </div>
                <div className="reasons-grid">
                    {closureReasons.map((reason, index) => (
                        <div key={index} className="reason-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <div className="reason-icon">{reason.icon}</div>
                            <h4>{reason.title}</h4>
                            <p>{reason.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="alternatives" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">CURRENT PATHWAYS</div>
                    <h2>UK Immigration Alternatives for Investors in 2025</h2>
                    <p>While the traditional investor route is closed, several other visa categories offer pathways for talented and entrepreneurial individuals to establish themselves in the UK.</p>
                </div>
                <div className="alternatives-grid">
                    {alternatives.map((alt, index) => (
                        <div key={index} className="alternative-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <h3>{alt.title}</h3>
                            <p className="description">{alt.description}</p>
                            {alt.requirements && (
                                <ul className="requirements-list">
                                    {alt.requirements.map((req, rIndex) => (
                                        <li key={rIndex}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>{req}</li>
                                    ))}
                                </ul>
                            )}
                            <Link href={alt.href}>Explore {alt.title} →</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section id="self-sponsorship" className="section">
            <div className="container">
                <div className="self-sponsorship-grid">
                    <div className="animate-on-scroll">
                        <h2>Why Self-Sponsorship is Appealing to Business Investors in 2025</h2>
                        <p>After the Investor visa was closed, Self-Sponsorship became the most popular alternative for ambitious individuals who want to settle in the UK. While not a direct replacement, it is the closest option for high-net-worth individuals who want to enjoy similar benefits by acquiring and running a UK business.</p>
                        <Link href="#" className="cta-button" style={{marginTop: '1rem'}}>Explore Self-Sponsorship</Link>
                    </div>
                    <div className="benefits-grid-small animate-on-scroll delay-1">
                        {selfSponsorshipBenefits.map((benefit, index) => (
                            <div key={index} className="benefit-item">
                                <div className="benefit-icon-small">{benefit.icon}</div>
                                <h5>{benefit.title}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section id="advantages" className="section bg-light">
            <div className="container">
                <div className="section-header animate-on-scroll">
                    <div className="subtitle">THE UNFAIR ADVANTAGE</div>
                    <h2>Key Benefits of Self-Sponsorship for Investors</h2>
                </div>
                <div className="advantages-grid">
                    {unfairAdvantages.map((advantage, index) => (
                        <div key={index} className="advantage-card animate-on-scroll" style={{transitionDelay: `${index * 0.1}s`}}>
                            <h4>{advantage.title}</h4>
                            <p>{advantage.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default UKInvestorVisaPage;
