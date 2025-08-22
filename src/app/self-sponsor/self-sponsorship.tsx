import Image from "next/image";
import Link from "next/link";
import styles from "./self-sponsorship.module.css";
import { FAQClient, FAQItem } from "./faq-client";

interface Requirement {
  title: string;
  description: string;
  icon: React.ReactNode;
}
interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

export default function SelfSponsorship() {
  const requirements: Requirement[] = [
    {
      title: "Business Structure",
      description:
        "Establish a genuine UK limited company with proper registration, business plan, and operational structure that meets Home Office scrutiny.",
      icon: (
        <span className={styles.requirementIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"/>
            <path d="M9 7h6v6H9z"/>
          </svg>
        </span>
      ),
    },
    {
      title: "Sponsor Licence",
      description: "Obtain a Sponsor Licence for your company, demonstrating genuine trading activities and compliance systems.",
      icon: (
        <span className={styles.requirementIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </span>
      ),
    },
    {
      title: "Financial Requirements",
      description: "Meet minimum salary thresholds (£38,700 or going rate) and maintain sufficient funds for business operations.",
      icon: (
        <span className={styles.requirementIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </span>
      ),
    },
    {
      title: "Documentation",
      description:
        "Comprehensive documentation including business plans, financial projections, and evidence of genuine business activities.",
      icon: (
        <span className={styles.requirementIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </span>
      ),
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      number: 1,
      title: "Company Formation",
      description:
        "Register your UK limited company with Companies House, ensuring proper structure and shareholding arrangements that comply with immigration rules.",
    },
    {
      number: 2,
      title: "Business Establishment",
      description:
        "Develop genuine business operations, secure office premises, create employment contracts, and establish HR systems required for sponsorship.",
    },
    {
      number: 3,
      title: "Sponsor Licence Application",
      description:
        "Apply for a Sponsor Licence, demonstrating your company's legitimacy and ability to fulfill sponsorship duties.",
    },
    {
      number: 4,
      title: "Skilled Worker Visa",
      description:
        "Once approved, assign a Certificate of Sponsorship to yourself and apply for the Skilled Worker visa.",
    },
  ];

  const benefits = [
    "Direct pathway to UK settlement after 5 years of continuous residence",
    "Ability to bring family members as dependants",
    "Full control over your business operations and growth",
    "No investment threshold unlike the Innovator Founder visa",
    "Flexibility to switch between eligible job roles within your company",
    "Opportunity to sponsor other skilled workers as your business grows",
  ];

  const faqItems: FAQItem[] = [
    {
      question: "What is the minimum salary for self-sponsorship?",
      answer:
        'The minimum salary is £38,700 per year or the "going rate" for your occupation code, whichever is higher. Some roles may qualify for reduced thresholds.',
    },
    {
      question: "Can I be the sole director and employee?",
      answer:
        "While possible, it's generally advisable to have additional directors or employees to demonstrate genuine business operations and reduce Home Office scrutiny.",
    },
    {
      question: "How long does the process take?",
      answer:
        "The entire process typically takes 3–6 months, including company setup (1–2 weeks), sponsor licence application (8–12 weeks), and visa application (3–8 weeks).",
    },
  ];

  const relatedServices = [
    { title: "Sponsor Licence Application", href: "/sponsor-licence" },
    { title: "Skilled Worker Visa", href: "/skilled-worker-visa" },
    { title: "Business Immigration", href: "/business-immigration" },
    { title: "Compliance Audit Services", href: "/compliance-audit" },
    { title: "ILR & Settlement", href: "/ilr-settlement" },
  ];

  return (
    <div className={styles.motionSafe}>
      {/* Hero */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/services">Services</Link>
              <span aria-hidden="true">›</span>
              <span>Self-Sponsorship UK Requirements</span>
            </nav>

            <h1 className={styles.h1}>Self-Sponsorship UK Requirements</h1>
            <p className={styles.heroDescription}>
              Navigate the complexities of UK self-sponsorship with confidence. Our expert immigration solicitors
              guide you through every requirement, ensuring your business and visa applications meet all Home Office standards.
            </p>
          </div>
        </div>
      </section>

      {/* Below-the-fold image (lazy) */}
      <section className={styles.belowFold} aria-hidden="true">
        <Image
          src="/assets/img/bigben.jpg"
          alt=""
          fill
          loading="lazy"
          sizes="100vw"
          placeholder="empty"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </section>

      {/* Main */}
      <div className={styles.container}>
        <div className={styles.main}>
          {/* Content */}
          <div className={styles.contentArea}>
            <section className={styles.section}>
              <h2 className={styles.h2}>Understanding Self-Sponsorship in the UK</h2>
              <p className={styles.paragraph}>
                Self-sponsorship represents a unique pathway for entrepreneurs and business owners to establish
                themselves in the UK. This route allows you to set up a UK company that can sponsor your own
                Skilled Worker visa, combining business establishment with personal immigration goals.
              </p>
              <p className={styles.paragraph}>
                The process requires careful planning and adherence to strict Home Office requirements. Our
                experienced team at Lexington Ashworth has successfully guided numerous entrepreneurs through
                this complex journey, ensuring compliance at every step.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.h2}>Key Requirements for Self-Sponsorship</h2>
              <div className={styles.requirementsGrid}>
                {requirements.map((req, i) => (
                  <div key={i} className={styles.requirementCard}>
                    <h4>
                      {req.icon}
                      {req.title}
                    </h4>
                    <p className={styles.paragraph}>{req.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.h2}>The Self-Sponsorship Process</h2>
              <div className={styles.processSteps}>
                {processSteps.map((step) => (
                  <div key={step.number} className={styles.step}>
                    <div className={styles.stepNumber} aria-hidden="true">{step.number}</div>
                    <div className={styles.stepContent}>
                      <h4>{step.title}</h4>
                      <p className={styles.paragraph}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.h2}>Benefits of Self-Sponsorship</h2>
              <ul className={styles.benefitsList}>
                {benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.h2}>Frequently Asked Questions</h2>
              <FAQClient items={faqItems} />
            </section>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar} aria-label="Actions and quick links">
            <div className={styles.ctaCard}>
              <h3>Need Expert Guidance?</h3>
              <p>Get professional assistance with your self-sponsorship journey</p>
              <Link href="/contact" className={styles.ctaButton}>
                Book Consultation
              </Link>
            </div>

            <div className={styles.quickLinks}>
              <h4>Related Services</h4>
              <ul>
                {relatedServices.map((s, i) => (
                  <li key={i}>
                    <Link href={s.href} className={styles.quickLink}>
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.downloadBox}>
              <h4>Free Guide</h4>
              <p className={styles.paragraph}>Download our comprehensive Self-Sponsorship Guide</p>
              <a href="#" className={styles.downloadButton}>Download PDF</a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
