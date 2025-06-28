import React from 'react';
import Image from 'next/image';
import styles from './competition.module.css';
import Header from '@/components/Navbar';
import Footer from '@/components/Footer';

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
              {/* <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Platform:</span>
                <span className={styles.infoValue}>(website link)</span>
              </div> */}
              {/* <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Rulebook:</span>
                <span className={styles.infoValue}>Shared after registration</span>
              </div> */}
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
                <li>Hands-on Experience in aerospace design</li>
                <li>Direct Industry Exposure with real engineers</li>
                <li>Boost Your Resume with a national-level project</li>
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
            While the challenge is primarily conducted online to ensure nationwide accessibility, the journey doesn’t end there for the top-performing teams:
          </p>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}><span className={styles.featureIcon}>🚀</span><span className={styles.featureText}>Collaborate closely with the 3Space Tech team through hybrid (online + offline) formats</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>🚀</span><span className={styles.featureText}>Get an exclusive on-site experience at the launch facility</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>🚀</span><span className={styles.featureText}>Assist in real-time payload integration and potentially witness the live launch of your designed payload.</span></li>
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
            <li className={styles.featureItem}><span className={styles.featureIcon}>⚠️</span><span className={styles.featureText}>Participants must follow the schedule strictly—delays in submission or attendance during key phases may lead to disqualification</span></li>
            <li className={styles.featureItem}><span className={styles.featureIcon}>⚠️</span><span className={styles.featureText}>All updates, results, and instructions will be shared via official communication channels—stay alert and responsive.</span></li>
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
            <div className={styles.buttonContainer}>
                <a href="#" className={styles.ctaButton}>
                    <span className={styles.buttonIcon}>🚀</span>
                    Register Now
                </a>
                <a href="#" className={styles.rulebookButton}>
                    <span className={styles.buttonIcon}>📋</span>
                    Rulebook
                </a>
            </div>
        </div>
        <p className={styles.ctaFooter}>
            Take the leap. Compete with the best. Build the future with 3Space Tech.
        </p>
        <div className={styles.contactBox}>
            <b>For any queries, contact us at:</b> <span>contactus@3spacecorp.com</span>
        </div>
    </section>
      </main>
    </div>
  );
};

export default CompetitionPage;