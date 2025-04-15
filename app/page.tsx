"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import LaunchCountdown from "@/components/LaunchCountdown"
import ParallaxBackground from "@/components/ParallaxBackground"
import EarthToOrbit from "@/components/EarthToOrbit"
import styles from "@/styles/Home.module.css"
import { motion } from "framer-motion"
import { ArrowRight } from "react-feather"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <ParallaxBackground />

        <section className={styles.hero}>
          <div className="container">
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1>Pioneering the Future of Space Exploration</h1>
              <p>Launching dreams into reality with cutting-edge technology and innovation</p>
              <div className={styles.heroBtns}>
                <a href="#countdown" className="btn btn-primary">
                  Next Launch
                </a>
                <a href="/rockets" className="btn btn-secondary">
                  Explore Rockets
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="countdown" className={`section ${styles.countdownSection}`}>
          <div className="container">
            <h2 className="section-title">Next Rocket Launch</h2>
            <p className="section-subtitle">
              Join us for our next mission as we continue to push the boundaries of space exploration
            </p>
            <LaunchCountdown />
          </div>
        </section>

        <EarthToOrbit />

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
                  To make India a global leader in space exploration, enabling humanity to become a spacefaring
                  species through cost-effective satellite launches and reusable rockets.
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
                  To create a sustainable multi-planetary existence by exploring our precious cosmos, enabling deep
                  space travel, and advancing technology for the betterment of humanity.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.featuresSection}`}>
          <div className="container">
            <h2 className="section-title">Why Choose 3 SPACE?</h2>
            <div className="grid grid-3">
              <motion.div
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className={styles.featureIcon}>🚀</div>
                <h3>Reusable Rockets</h3>
                <p>
                  Our innovative reusable rocket technology reduces launch costs by up to 70%, making space more
                  accessible.
                </p>
              </motion.div>
              <motion.div
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className={styles.featureIcon}>🛰️</div>
                <h3>Satellite Deployment</h3>
                <p>
                  Precision orbital placement for satellites of all sizes, from CubeSats to large communication
                  arrays.
                </p>
              </motion.div>
              <motion.div
                className={styles.featureCard}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className={styles.featureIcon}>🔬</div>
                <h3>Research & Development</h3>
                <p>Cutting-edge R&D in propulsion systems, materials science, and space habitation technologies.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className={`section ${styles.ctaSection}`}>
          <div className="container">
            <motion.div
              className={styles.ctaContent}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Ready to Join the Space Revolution?</h2>
              <p>Discover how 3 SPACE is making space exploration accessible, sustainable, and revolutionary.</p>
              <div className={styles.ctaBtns}>
                <a href="/launches" className="btn btn-primary">
                  View Launch History
                </a>
                <a href="/about" className="btn btn-secondary">
                  Learn More
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
