"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LaunchCountdown from "@/components/LaunchCountdown";
// import CollaborativeNetworkSection from "@/components/collab";
import styles from "@/styles/Home.module.css";
import { motion } from "framer-motion";
import { FaFlask, FaChevronDown } from "react-icons/fa";
import { Rocket, Satellite } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const iconStyle = {
    color: "white",
    strokeWidth: 1.5,
  };

  const pyqs = [
    {
      id: 1,
      year: "2024",
      title: "Space Propulsion Systems",
      question:
        "Explain the principles of ion propulsion and its applications in deep space missions.",
      answer:
        "Ion propulsion accelerates ions using electrical fields to create thrust. It's ideal for deep space missions due to high specific impulse and fuel efficiency, used in missions like NASA's Dawn and JAXA's Hayabusa.",
      difficulty: "Advanced",
    },
    {
      id: 2,
      year: "2023",
      title: "Orbital Mechanics",
      question:
        "Calculate the delta-v required for a Hohmann transfer from LEO to GEO.",
      answer:
        "For a Hohmann transfer from LEO (400km) to GEO (35,786km), the total delta-v is approximately 3.8 km/s: 2.5 km/s for transfer orbit insertion and 1.3 km/s for circularization at GEO.",
      difficulty: "Intermediate",
    },
    {
      id: 3,
      year: "2023",
      title: "Spacecraft Materials",
      question: "Discuss the challenges of material selection for re-entry vehicles.",
      answer:
        "Re-entry vehicles face extreme temperatures (1500°C+), thermal shock, and ablation. Materials must balance thermal protection, structural integrity, and weight constraints. Common solutions include carbon-carbon composites and ceramic tiles.",
      difficulty: "Advanced",
    },
    {
      id: 4,
      year: "2022",
      title: "Satellite Communication",
      question:
        "Explain the advantages of Ka-band over Ku-band for satellite communications.",
      answer:
        "Ka-band (26.5-40 GHz) offers higher bandwidth, smaller antennas, and greater frequency reuse than Ku-band (12-18 GHz), enabling higher data rates. However, it's more susceptible to rain fade and requires more sophisticated signal processing.",
      difficulty: "Intermediate",
    },
  ];

  const [activePyq, setActivePyq] = useState<number | null>(null);

  const togglePyq = (id: number) => {
    setActivePyq((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroFlexContainer}>
            <div className={styles.earthImageContainer}>
              <Image
                src="/image/try1.png"
                alt="Earth from space"
                fill
                className={styles.earthImage}
                priority
              />
            </div>
            <div className={styles.heroContentWrapper}>
              <motion.div
                className={styles.heroContent}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1>Welcome to 3SPACE</h1>
                <p>Building Tomorrow's Launch Technologies, Today</p>
                <div className={styles.heroBtns}>
                  <a href="#countdown" className="btn btn-primary">Next Launch</a>
                  <a href="/products" className="btn btn-secondary">Explore Rockets</a>
                </div>
              </motion.div>
            </div>
          </div>
          <div className={styles.floatingElement}></div>
          <div className={styles.floatingElement}></div>
        </section>

        {/* Star Background */}
        <div className={styles.starfield}>
          <div className={styles.stars}></div>
          <div className={styles.stars}></div>
          <div className={styles.stars}></div>
        </div>

        {/* Countdown */}
        <section id="countdown" className={`section ${styles.countdownSection}`}>
          <div className="container">
            <h2 className="section-title">Next Rocket Launch</h2>
            <p className="section-subtitle">
              Join us for our next mission as we continue to push the boundaries of space exploration
            </p>
            <LaunchCountdown />
          </div>
        </section>

        {/* <CollaborativeNetworkSection /> */}

        {/* Features */}
        <section className={`section ${styles.featuresSection}`}>
          <div className="container">
            <h2 className="section-title">Why Choose 3 SPACE?</h2>
            <div className="grid grid-3">
              {[
                {
                  icon: <Rocket size={32} style={iconStyle} />,
                  title: "Reusable Rockets",
                  text: "Our innovative reusable rocket technology reduces launch costs by up to 70%, making space more accessible.",
                },
                {
                  icon: <Satellite size={32} style={iconStyle} />,
                  title: "Sustainable Space",
                  text: "We reduce launch emissions, enhance reusability, and prevent debris—because sustainability in space is our mission.",
                },
                {
                  icon: <FaFlask size={32} style={iconStyle} />,
                  title: "Research & Development",
                  text: "Cutting-edge R&D in propulsion systems, materials science, and space habitation technologies.",
                },
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  className={styles.featureCard}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
                  viewport={{ once: true }}
                >
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
                <a href="/launches" className="btn btn-primary">View Launch History</a>
                <a href="/about" className="btn btn-secondary">Learn More</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PYQs */}
        <section className={`section ${styles.pyqsSection}`}>
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={styles.pyqsHeader}
            >
              <h2 className={styles.pyqsTitle}>Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Find answers to common queries below. Still have questions? Reach out to us!
              </p>
            </motion.div>

            <div className={styles.pyqsList}>
              {pyqs.map((pyq) => (
                <motion.div
                  key={pyq.id}
                  className={`${styles.pyqItem} ${activePyq === pyq.id ? styles.pyqOpen : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div
                    className={styles.pyqQuestion}
                    onClick={() => togglePyq(pyq.id)}
                  >
                    <h3>
                      <span className={styles.pyqYear}>{pyq.year}</span> {pyq.title}
                    </h3>
                    <FaChevronDown
                      className={`${styles.pyqChevron} ${
                        activePyq === pyq.id ? styles.rotateChevron : ""
                      }`}
                    />
                  </div>
                  <div className={styles.pyqAnswer}>
                    <p className={styles.pyqQuestion}>{pyq.question}</p>
                    <p className={styles.pyqAnswerText}>
                      <strong>Answer:</strong> {pyq.answer}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className={styles.pyqsViewMore}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <a href="/FAQ" className="btn btn-secondary">View All Questions</a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
