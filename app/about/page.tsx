"use client"

import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import styles from "@/styles/About.module.css"
import Footer from "@/components/Footer"
import { Users, Rocket, Globe, Award, Target, Zap } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function AboutPage() {
  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <section className={styles.aboutHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1>About 3 SPACE</h1>
            <p>Pioneering the future of space exploration</p>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.missionSection}`}>
        <div className="container">
          <div className="grid grid-2">
            <motion.div
              className={styles.missionCard}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Our Mission</h2>
              <p>
                To make India a global leader in space exploration, enabling humanity to become a spacefaring species
                through cost-effective satellite launches and reusable rockets.
              </p>
              <p>
                We are committed to pushing the boundaries of what's possible in space technology, making access to
                space more affordable and sustainable for everyone.
              </p>
            </motion.div>
            <motion.div
              className={styles.visionCard}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Our Vision</h2>
              <p>
                To create a sustainable multi-planetary existence by exploring our precious cosmos, enabling deep space
                travel, and advancing technology for the betterment of humanity.
              </p>
              <p>
                We envision a future where humans live and work beyond Earth, with thriving communities on the Moon,
                Mars, and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>

          <div className="grid grid-3">
            <motion.div
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.valueIcon}>
                <Target size={30} />
              </div>
              <h3>Innovation</h3>
              <p>
                We constantly push the boundaries of what's possible, challenging conventional thinking and developing
                breakthrough technologies.
              </p>
            </motion.div>

            <motion.div
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.valueIcon}>
                <Globe size={30} />
              </div>
              <h3>Sustainability</h3>
              <p>
                We're committed to developing technologies and practices that protect our home planet while enabling us
                to explore beyond it.
              </p>
            </motion.div>

            <motion.div
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className={styles.valueIcon}>
                <Users size={30} />
              </div>
              <h3>Collaboration</h3>
              <p>
                We believe in the power of working together, fostering partnerships across industries and borders to
                achieve our shared goals.
              </p>
            </motion.div>

            <motion.div
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className={styles.valueIcon}>
                <Award size={30} />
              </div>
              <h3>Excellence</h3>
              <p>
                We hold ourselves to the highest standards in everything we do, from engineering to customer service.
              </p>
            </motion.div>

            <motion.div
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={styles.valueIcon}>
                <Rocket size={30} />
              </div>
              <h3>Exploration</h3>
              <p>
                We're driven by an insatiable curiosity and a desire to explore the unknown, pushing humanity further
                into the cosmos.
              </p>
            </motion.div>

            <motion.div
              className={styles.valueCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className={styles.valueIcon}>
                <Zap size={30} />
              </div>
              <h3>Resilience</h3>
              <p>
                We embrace challenges and setbacks as opportunities to learn and grow, always persevering in the face of
                adversity.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.teamSection}`}>
        <div className="container">
          <h2 className="section-title">Our Leadership Team</h2>
          <p className="section-subtitle">Meet the visionaries behind 3 SPACE</p>

          <div className="grid grid-3">
            <motion.div
              className={styles.teamCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className={styles.teamImage}>
                <img src="/images/ceo.jpg" alt="CEO" />
              </div>
              <h3>Vikram Sharma</h3>
              <p className={styles.teamRole}>CEO & Founder</p>
              <p className={styles.teamBio}>
                Aerospace engineer with 15+ years of experience in rocket propulsion systems and a vision to make India
                a leader in space technology.
              </p>
            </motion.div>

            <motion.div
              className={styles.teamCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.teamImage}>
                <img src="/images/cto.jpg" alt="CTO" />
              </div>
              <h3>Priya Patel</h3>
              <p className={styles.teamRole}>CTO</p>
              <p className={styles.teamBio}>
                Former ISRO scientist specializing in guidance systems and autonomous landing technologies for reusable
                rockets.
              </p>
            </motion.div>

            <motion.div
              className={styles.teamCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className={styles.teamImage}>
                <img src="/images/coo.jpg" alt="COO" />
              </div>
              <h3>Rajiv Mehta</h3>
              <p className={styles.teamRole}>COO</p>
              <p className={styles.teamBio}>
                Operations expert with experience scaling manufacturing processes for aerospace components and managing
                complex supply chains.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`section ${styles.historySection}`}>
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2018</div>
              <div className={styles.timelineContent}>
                <h3>Foundation</h3>
                <p>3 SPACE was founded with a mission to revolutionize India's space industry.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2019</div>
              <div className={styles.timelineContent}>
                <h3>First Prototype</h3>
                <p>Successfully tested our first rocket engine prototype, achieving 95% efficiency.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2020</div>
              <div className={styles.timelineContent}>
                <h3>Series A Funding</h3>
                <p>Secured $50 million in funding to accelerate development of our first orbital rocket.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2021</div>
              <div className={styles.timelineContent}>
                <h3>First Launch</h3>
                <p>Successfully launched our first rocket, placing a small satellite into low Earth orbit.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2022</div>
              <div className={styles.timelineContent}>
                <h3>Reusability Milestone</h3>
                <p>Achieved first successful landing and recovery of our rocket's first stage.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2023</div>
              <div className={styles.timelineContent}>
                <h3>Commercial Operations</h3>
                <p>Began commercial satellite launch services for global customers.</p>
              </div>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2024</div>
              <div className={styles.timelineContent}>
                <h3>Heavy Lift Capability</h3>
                <p>Introduced our heavy-lift rocket capable of delivering large payloads to geostationary orbit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
    
  )
}
