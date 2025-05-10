"use client"

import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import styles from "./blog1.module.css"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function BlogPost() {
  return (
    <>
      
      <Navbar />

      <article className={styles.blogContainer}>
        <div className={styles.blogHeader}>
          <h1>From Fire Arrows to the Moon: India's Rocket Journey Through Time</h1>
          <div className={styles.subtitle}>
            How India carved out its space in the stars - from ancient dreams to modern missions
          </div>
        </div>
        <section className={styles.introSection}>
          <p>
            Ever looked up at the sky and wondered, "How did we get from simple fireworks to rockets landing on the Moon?"<br />
            It's not just the story of science—it's the story of dreamers, warriors, and a nation rising against odds. And yes, India has been part of that story for much longer than most people realize.<br />
            Let's take off and explore the amazing journey of rockets—and how India carved out its space in the stars.
          </p>
        </section>
        <section className={styles.contentSection}>
          <h2>Chapter 1: The Ancient Spark – When Imagination Took Flight</h2>
          <p>
            Long before the term "rocket science" entered our lexicon, Indian innovators were experimenting with rocket technology. The earliest documented use of rockets in warfare dates back to the 18th century, during the Mysore Wars. These early rockets, though primitive by today's standards, demonstrated a fundamental understanding of propulsion principles that would later revolutionize space travel.
          </p>
        </section>
        <section className={styles.timelineSection}>
          <h2>Key Milestones</h2>
          <div className={styles.milestoneContainer}>
            <div className={styles.milestone}><span className={styles.year}>1975:</span> <span className={styles.event}>Aryabhata, India's first satellite, launched into orbit</span></div>
            <div className={styles.milestone}><span className={styles.year}>1983:</span> <span className={styles.event}>INSAT, the Indian National Satellite System, established</span></div>
            <div className={styles.milestone}><span className={styles.year}>2008:</span> <span className={styles.event}>Chandrayaan-1, India's first lunar mission</span></div>
            <div className={styles.milestone}><span className={styles.year}>2014:</span> <span className={styles.event}>Mars Orbiter Mission (Mangalyaan) successfully reaches Mars orbit</span></div>
            <div className={styles.milestone}><span className={styles.year}>2023:</span> <span className={styles.event}>Chandrayaan-3 makes a historic landing on the Moon's south pole</span></div>
          </div>
        </section>
        <section className={styles.conclusionSection}>
          <h2>The Future Beckons</h2>
          <p>
            Today, India stands as a global leader in space technology, known for its cost-effective missions and innovative solutions. The success of Chandrayaan-3 has opened new possibilities for lunar exploration and resource utilization.<br />
            As we look to the future, India's space program continues to push boundaries, with ambitious plans for human spaceflight, interplanetary missions, and advanced satellite technology. The journey from fire arrows to the Moon is far from over – it's just beginning.
          </p>
        </section>
      </article>

      <Footer />
    </>
  )
} 