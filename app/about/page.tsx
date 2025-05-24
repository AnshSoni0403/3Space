"use client"

import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import styles from "@/styles/About.module.css"
import Footer from "@/components/Footer"
import { Users, Rocket, Globe, Award, Target, Zap } from "lucide-react"
import Navbar from "@/components/Navbar"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const missionSteps = [
    {
      title: "Our Mission",
      content: "To make India a global leader in space exploration, enabling humanity to become a spacefaring species through cost-effective satellite launches and reusable rockets."
    },
    {
      title: "What we aim at",
      content: [
        "100km Rocket: Focus on scaling from PoC to commercially viable models.Community Growth: Building a robust ecosystem of space enthusiasts and professionals.Expand Partnerships: Collaborating with global entities to accelerate innovation.",
      ]
    }
  ]

  const visionSteps = [
    {
      title: "Our Vision",
      content: "To create a sustainable multi-planetary existence by exploring our precious cosmos, enabling deep space travel, and advancing technology for the betterment of humanity."
    },
    {
      title: "What we do",
      content: [
        "Making Space Exploration Affordable, Accessible, and Sustainable.We provide affordable satellite launches, focusing on reusable rockets and self-landing cryogenic engine technology for scalability.",
        
      ]
    }
  ]

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

      <section className={`section ${styles.timelineSection}`}>
        <div className={styles.timelineContainer}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ height: `${Math.min((scrollY - 300) / 500 * 100, 100)}%` }}
            />
          </div>
          
          {/* Left Side - Mission */}
          <div className={styles.timelineLeft}>
            {missionSteps.map((step, index) => (
              <motion.div
                key={`mission-${index}`}
                className={styles.timelineStep}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={styles.timelineStepContent}>
                  <h2>{step.title}</h2>
                  {typeof step.content === 'string' ? (
                    <p>{step.content}</p>
                  ) : (
                    <ul>
                      {step.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={styles.timelinePoint}></div>
              </motion.div>
            ))}
          </div>
          
          {/* Right Side - Vision */}
          <div className={styles.timelineRight}>
            {visionSteps.map((step, index) => (
              <motion.div
                key={`vision-${index}`}
                className={styles.timelineStep}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className={styles.timelinePoint}></div>
                <div className={styles.timelineStepContent}>
                  <h2>{step.title}</h2>
                  {typeof step.content === 'string' ? (
                    <p>{step.content}</p>
                  ) : (
                    <ul>
                      {step.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
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

      

      <Footer/>
    </>
  )
}