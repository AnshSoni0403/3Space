"use client"

import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import styles from "@/styles/BlogPost.module.css"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function BlogPost() {
  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <article className={styles.blogPost}>
        <div className="container">
          <Link href="/blogs" className={styles.backLink}>
            <ArrowLeft size={16} /> Back to Blogs
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.blogHeader}
          >
            <h1>From Fire Arrows to the Moon: India's Rocket Journey Through Time</h1>
            <div className={styles.blogMeta}>
              <div className={styles.metaItem}>
                <Calendar size={14} />
                <span>May 9, 2025</span>
              </div>
              <div className={styles.metaItem}>
                <User size={14} />
                <span>Unknown</span>
              </div>
              <div className={styles.metaItem}>
                <Clock size={14} />
                <span>8 min read</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.blogContent}
          >
            <div className={styles.featuredImage}>
              <img src="/images/Blogs/download.jpg" alt="India's Rocket Journey" />
            </div>

            <div className={styles.content}>
              <p>
                In the annals of human achievement, few stories are as compelling as India's
                journey from ancient rocket pioneers to modern space power. This is a tale
                that spans millennia, from the first fire arrows to the triumphant landing
                on the Moon's south pole.
              </p>

              <h2>The Ancient Origins</h2>
              <p>
                Long before the term "rocket science" entered our lexicon, Indian
                innovators were experimenting with rocket technology. The earliest
                documented use of rockets in warfare dates back to the 18th century,
                during the Mysore Wars. These early rockets, though primitive by today's
                standards, demonstrated a fundamental understanding of propulsion
                principles that would later revolutionize space travel.
              </p>

              <h2>The Modern Era Begins</h2>
              <p>
                The foundation of the Indian Space Research Organisation (ISRO) in 1969
                marked the beginning of India's modern space program. With limited
                resources but unlimited determination, Indian scientists and engineers
                began their quest to conquer the final frontier.
              </p>

              <h2>Key Milestones</h2>
              <ul>
                <li>
                  <strong>1975:</strong> Aryabhata, India's first satellite, launched
                  into orbit
                </li>
                <li>
                  <strong>1983:</strong> INSAT, the Indian National Satellite System,
                  established
                </li>
                <li>
                  <strong>2008:</strong> Chandrayaan-1, India's first lunar mission
                </li>
                <li>
                  <strong>2014:</strong> Mars Orbiter Mission (Mangalyaan) successfully
                  reaches Mars orbit
                </li>
                <li>
                  <strong>2023:</strong> Chandrayaan-3 makes a historic landing on the
                  Moon's south pole
                </li>
              </ul>

              <h2>The Future Beckons</h2>
              <p>
                Today, India stands as a global leader in space technology, known for its
                cost-effective missions and innovative solutions. The success of
                Chandrayaan-3 has opened new possibilities for lunar exploration and
                resource utilization.
              </p>

              <p>
                As we look to the future, India's space program continues to push
                boundaries, with ambitious plans for human spaceflight, interplanetary
                missions, and advanced satellite technology. The journey from fire arrows
                to the Moon is far from over – it's just beginning.
              </p>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
    </>
  )
} 