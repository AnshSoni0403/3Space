import React from 'react';
import Image from 'next/image';
import styles from './competition.module.css';

const CompetitionPage = () => {
  return (
    <div className={styles.competitionContainer}>
      <main className={styles.competitionMain}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.posterWrapper}>
            {/* Poster image, replace src with actual poster if available */}
            <Image
              src="/images/poster.jpg"
              alt="3Space Tech Competition Poster"
              width={420}
              height={520}
              className={styles.competitionPoster}
              priority
            />
          </div>
          <div className={styles.heroContent}>
            <h1>3Space Tech – National Aerospace Innovation Challenge</h1>
            <p className={styles.tagline}>
              Compete with Purpose. Innovate with Passion. Launch Your Aerospace Journey.
            </p>
            <p>
              Are you ready to turn your curiosity into creation?
            </p>
            <p>
              <strong>3Space Tech</strong> invites India's brightest young minds to a prestigious national-level competition aimed at discovering and nurturing next-generation talent in aerospace technology.
            </p>
            <p>
              This isn't just another contest—<br />
              <strong>It's your launchpad to real innovation, industry exposure, and career acceleration.</strong>
            </p>
          </div>
        </section>

        {/* Timeline Section */}
        <section className={styles.timelineSection}>
          <h2>Competition Timeline</h2>
          <ol className={styles.timelineList}>
            <li className={styles.timelineItem}><div className={styles.timelineCard}><span className={styles.stepNumber}>1</span> Registration</div></li>
            <li className={styles.timelineItem}><div className={styles.timelineCard}><span className={styles.stepNumber}>2</span> Instruction Webinar</div></li>
            <li className={styles.timelineItem}><div className={styles.timelineCard}><span className={styles.stepNumber}>3</span> First Round (Online)</div></li>
            <li className={styles.timelineItem}><div className={styles.timelineCard}><span className={styles.stepNumber}>4</span> Result Discussion</div></li>
            <li className={styles.timelineItem}><div className={styles.timelineCard}><span className={styles.stepNumber}>5</span> Result Announcement + Webinar</div></li>
            <li className={styles.timelineItem}><div className={styles.timelineCard}><span className={styles.stepNumber}>6</span> Final Results + Internship Opportunities</div></li>
          </ol>
          <div className={styles.timelineInfo}>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Registration Fee:</span>
                <span className={styles.infoValue}>₹1000 per team</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Platform:</span>
                <span className={styles.infoValue}>(website link)</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Rulebook:</span>
                <span className={styles.infoValue}>Shared after registration</span>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why You Should Participate</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <h3>Top 3 Teams Will Gain:</h3>
              <ul>
                <li>Direct internship opportunities at 3Space Tech</li>
                <li>Certificate of Merit</li>
                <li>Hands-on involvement in real aerospace projects</li>
              </ul>
            </div>
            <div className={styles.benefitCard}>
              <h3>Other Qualified Teams Will Receive:</h3>
              <ul>
                <li>Internship opportunities based on interview performance</li>
                <li>Certificate of Participation</li>
                <li>Industry-level learning and skill-building exposure</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Beyond Competition Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Beyond the Competition</h2>
          <p>
            This challenge is primarily conducted in online mode, making it accessible nationwide.<br />
            However, the top 3 selected teams will go beyond virtual boundaries:
          </p>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}><span className={styles.featureIcon}>🚀</span><span className={styles.featureText}>Collaborate with the 3Space Tech team in both online and offline formats</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>🚀</span><span className={styles.featureText}>Receive an exclusive invitation to the live launch site</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>🚀</span><span className={styles.featureText}>If chosen, witness and assist in launching their own payload alongside our launch vehicle.</span></li>
          </ul>
        </section>

        {/* Eligibility Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Who Can Apply</h2>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}><span className={styles.featureIcon}>👥</span><span className={styles.featureText}>Students from Aerospace Engineering or related technical branches</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>👥</span><span className={styles.featureText}>Individuals with a strong drive for innovation and problem-solving</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>👥</span><span className={styles.featureText}>Teams seeking real-world project experience and national recognition.</span></li>
          </ul>
        </section>

        {/* Important Notes Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Important Notes</h2>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}><span className={styles.featureIcon}>⚠️</span><span className={styles.featureText}>Publicity for the challenge is being carried out digitally across India</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>⚠️</span><span className={styles.featureText}>All participants must strictly adhere to timelines for each competition phase</span></li>
          </ul>
        </section>

        {/* Call to Action Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Make Your Mark</h2>
          <p className={styles.ctaDescription}>
            This is more than just a challenge—it's an invitation to build, learn, and lead.<br />
            Whether you're an aspiring engineer, innovator, or changemaker—this is your chance to be part of something bigger.
          </p>
          <div className={styles.ctaBox}>
            <span className={styles.ctaStatus}>Registrations are now open.</span>
            <a href="#" className={styles.ctaButton}>
              Register Now
            </a>
          </div>
          <p className={styles.ctaFooter}>
            Take the leap. Compete with the best. Build the future with 3Space Tech.
          </p>
          <div className={styles.contactBox}>
            <b>For any queries, contact us at:</b> <span>[contact details]</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CompetitionPage;