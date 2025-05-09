"use client"

import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import styles from "./blog1.module.css"

export default function Blog1Page() {
  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <div className={styles.blog1Container}>
        <h1 className={styles.blog1Title}>COSMIC FRONTIERS</h1>
        <p className={styles.blog1Subtitle}>Exploring the final frontier of humanity's journey beyond Earth</p>
        
        <section className={styles.blog1Section}>
          <h2>The Dawn of Quantum Space Travel</h2>
          <p>The recent breakthroughs in quantum propulsion technology have opened up possibilities once reserved for science fiction. With the ability to manipulate spacetime at the quantum level, spacecraft can now achieve previously impossible feats of acceleration and deceleration.</p>
          
          <div className={styles.blog1ImageContainer}>
            <img 
              className={styles.blog1Image} 
              src="/images/blogs/download.jpg" 
              alt="Quantum Drive Concept Art" 
            />
            <div className={styles.blog1ImageCaption}>
              Conceptual rendering of the Q-Drive propulsion system currently in development at Astral Dynamics
            </div>
          </div>
          
          <p>The implications for interstellar travel are profound. What was once a journey of centuries could now be accomplished in mere decades, bringing the stars within reach of a single human lifetime.</p>
        </section>
        
        <section className={styles.blog1Section}>
          <h2>Timeline: The Path to the Stars</h2>
          <ul className={styles.blog1Timeline}>
            <li className={styles.blog1TimelineItem}>
              <span className={styles.blog1TimelineYear}>2026</span>
              First successful quantum entanglement of macroscopic objects
            </li>
            <li className={styles.blog1TimelineItem}>
              <span className={styles.blog1TimelineYear}>2031</span>
              Development of stable quantum field manipulators
            </li>
            <li className={styles.blog1TimelineItem}>
              <span className={styles.blog1TimelineYear}>2037</span>
              Prototype Q-Drive achieves 0.01c in laboratory conditions
            </li>
            <li className={styles.blog1TimelineItem}>
              <span className={styles.blog1TimelineYear}>2042</span>
              Luna-1 mission demonstrates first practical application in space
            </li>
            <li className={styles.blog1TimelineItem}>
              <span className={styles.blog1TimelineYear}>2050</span>
              Artemis-Q mission reaches Mars in 12 days
            </li>
          </ul>
        </section>
        
        <section className={styles.blog1Section}>
          <h2>Colonizing the Red Planet</h2>
          <p>With the advent of rapid transit between Earth and Mars, the colonization efforts have accelerated beyond all projections. The Mars Colonial Authority now reports over 10,000 permanent residents across three major settlement hubs.</p>
          
          <div className={styles.blog1ImageContainer}>
            <img 
              className={styles.blog1Image} 
              src="/images/blogs/download.jpg" 
              alt="Mars Colony" 
            />
            <div className={styles.blog1ImageCaption}>
              Olympus City, the largest human settlement outside Earth, nestled at the base of Olympus Mons
            </div>
          </div>
          
          <p>Terraforming initiatives have moved from theoretical models to practical implementation, with the first atmospheric processors already showing measurable increases in surface temperature and pressure.</p>
          
          <p>The dream of a second home for humanity is no longer a distant possibility but an unfolding reality. As we continue to push the boundaries of what's possible, the cosmos beckons with endless possibilities.</p>
        </section>
      </div>

      <Footer />
    </>
  )
} 