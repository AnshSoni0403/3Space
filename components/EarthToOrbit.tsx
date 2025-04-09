"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import styles from "@/styles/components/EarthToOrbit.module.css"

export default function EarthToOrbit() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5])
  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.2])
  const satelliteX = useTransform(scrollYProgress, [0, 1], [-100, 300])
  const satelliteY = useTransform(scrollYProgress, [0, 1], [50, -100])
  const satelliteRotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const starOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.earthOrbitContainer}>
        <motion.div className={styles.earth} style={{ scale, y, opacity }} />

        <motion.div
          className={styles.satellite}
          style={{
            x: satelliteX,
            y: satelliteY,
            rotate: satelliteRotate,
          }}
        >
          <div className={styles.satelliteBody}>
            <div className={styles.satellitePanel} />
            <div className={styles.satellitePanel} />
          </div>
        </motion.div>

        <motion.div className={styles.stars} style={{ opacity: starOpacity }} />

        <div className={styles.content}>
          <motion.div
            className={styles.contentText}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2>From Earth to Orbit</h2>
            <p>
              Experience the journey from our home planet to the vastness of space. Our advanced rockets make this
              transition seamless, reliable, and increasingly affordable.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
