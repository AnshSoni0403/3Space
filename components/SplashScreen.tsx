"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import styles from "@/styles/components/SplashScreen.module.css"

export default function SplashScreen() {
  const [showText, setShowText] = useState(false)
  const [assembled, setAssembled] = useState(false)
  const [exitSplash, setExitSplash] = useState(false)

  useEffect(() => {
    // Assembly complete timing
    const assembleTimer = setTimeout(() => {
      setAssembled(true)
    }, 1800)

    // Show text timing
    const textTimer = setTimeout(() => {
      setShowText(true)
    }, 2200)

    // Exit splash screen
    const exitTimer = setTimeout(() => {
      setExitSplash(true)
    }, 4000)

    return () => {
      clearTimeout(assembleTimer)
      clearTimeout(textTimer)
      clearTimeout(exitTimer)
    }
  }, [])

  return (
    <motion.div
      className={styles.splashScreen}
      initial={{ opacity: 1 }}
      animate={{ opacity: exitSplash ? 0 : 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.rocketContainer}>
        <motion.div
          className={styles.rocketAssembly}
          animate={{
            y: assembled ? "-30vh" : "0vh",
          }}
          transition={{
            duration: 1.5,
            ease: [0.33, 1, 0.68, 1],
            delay: assembled ? 0.3 : 0,
          }}
        >
          <svg width="120" height="400" viewBox="0 0 120 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Nose Cone - from top */}
            <motion.path
              d="M60 0L80 80H40L60 0Z"
              fill="url(#noseGradient)"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className={styles.rocketPart}
            />

            {/* Main Body - from right */}
            <motion.rect
              x="40"
              y="80"
              width="40"
              height="180"
              fill="url(#bodyGradient)"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className={styles.rocketPart}
            />

            {/* Body Rings */}
            <motion.g
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className={styles.rocketPart}
            >
              <rect x="38" y="100" width="44" height="5" rx="2" fill="#2A3B4C" />
              <rect x="38" y="150" width="44" height="5" rx="2" fill="#2A3B4C" />
              <rect x="38" y="200" width="44" height="5" rx="2" fill="#2A3B4C" />
            </motion.g>

            {/* Windows - fade in */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className={styles.rocketPart}
            >
              <circle cx="60" cy="120" r="8" fill="url(#windowGradient)" />
              <circle cx="60" cy="170" r="8" fill="url(#windowGradient)" />
            </motion.g>

            {/* Side Boosters - from left and right */}
            <motion.g
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              className={styles.rocketPart}
            >
              <rect x="15" y="180" width="15" height="100" rx="5" fill="url(#boosterGradient)" />
              <rect x="15" y="285" width="15" height="10" rx="2" fill="#2A3B4C" />
              <rect x="17" y="295" width="11" height="15" rx="2" fill="#E74C3C" />
            </motion.g>

            <motion.g
              initial={{ x: 150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              className={styles.rocketPart}
            >
              <rect x="90" y="180" width="15" height="100" rx="5" fill="url(#boosterGradient)" />
              <rect x="90" y="285" width="15" height="10" rx="2" fill="#2A3B4C" />
              <rect x="92" y="295" width="11" height="15" rx="2" fill="#E74C3C" />
            </motion.g>

            {/* Bottom Section - from bottom */}
            <motion.g
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              className={styles.rocketPart}
            >
              <rect x="40" y="260" width="40" height="40" fill="url(#bottomGradient)" />
              <path d="M40 300H80L90 330H30L40 300Z" fill="#2A3B4C" />
            </motion.g>

            {/* Engine Nozzles - from bottom */}
            <motion.g
              initial={{ y: 150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.0 }}
              className={styles.rocketPart}
            >
              <rect x="45" y="330" width="10" height="20" rx="3" fill="url(#nozzleGradient)" />
              <rect x="65" y="330" width="10" height="20" rx="3" fill="url(#nozzleGradient)" />
              <rect x="55" y="335" width="10" height="25" rx="3" fill="url(#nozzleGradient)" />
            </motion.g>

            {/* Fins - from sides */}
            <motion.path
              d="M30 240L5 300V240H30Z"
              fill="url(#finGradient)"
              initial={{ x: -50, opacity: 0, rotate: -20 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
              className={styles.rocketPart}
            />

            <motion.path
              d="M90 240L115 300V240H90Z"
              fill="url(#finGradient)"
              initial={{ x: 50, opacity: 0, rotate: 20 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 1.2 }}
              className={styles.rocketPart}
            />

            {/* 3SPACE Logo on Rocket */}
            <motion.g
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className={styles.rocketPart}
            >
              <rect x="45" y="220" width="30" height="20" rx="2" fill="#2A3B4C" />
              <text x="48" y="235" fill="white" fontSize="8" fontWeight="bold" fontFamily="Arial">
                3SPACE
              </text>
            </motion.g>

            {/* Gradients */}
            <defs>
              <linearGradient id="noseGradient" x1="60" y1="0" x2="60" y2="80" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E74C3C" />
                <stop offset="1" stopColor="#C0392B" />
              </linearGradient>

              <linearGradient id="bodyGradient" x1="60" y1="80" x2="60" y2="260" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ECF0F1" />
                <stop offset="1" stopColor="#BDC3C7" />
              </linearGradient>

              <linearGradient id="windowGradient" x1="52" y1="112" x2="68" y2="128" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3498DB" />
                <stop offset="1" stopColor="#2980B9" />
              </linearGradient>

              <linearGradient id="boosterGradient" x1="22.5" y1="180" x2="22.5" y2="280" gradientUnits="userSpaceOnUse">
                <stop stopColor="#95A5A6" />
                <stop offset="1" stopColor="#7F8C8D" />
              </linearGradient>

              <linearGradient id="bottomGradient" x1="60" y1="260" x2="60" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#BDC3C7" />
                <stop offset="1" stopColor="#95A5A6" />
              </linearGradient>

              <linearGradient id="nozzleGradient" x1="50" y1="330" x2="50" y2="350" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7F8C8D" />
                <stop offset="1" stopColor="#34495E" />
              </linearGradient>

              <linearGradient id="finGradient" x1="17.5" y1="240" x2="17.5" y2="300" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E67E22" />
                <stop offset="1" stopColor="#D35400" />
              </linearGradient>
            </defs>
          </svg>

          {/* Rocket Exhaust Effects */}
          {assembled && (
            <>
              <motion.div
                className={styles.mainExhaust}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: [0, 0.8, 0.4], scaleY: [0, 1, 0.7] }}
                transition={{
                  duration: 0.8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
              <motion.div
                className={styles.sideExhaustLeft}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: [0, 0.7, 0.3], scaleY: [0, 1, 0.6] }}
                transition={{
                  duration: 0.7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: 0.1,
                }}
              />
              <motion.div
                className={styles.sideExhaustRight}
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: [0, 0.7, 0.3], scaleY: [0, 1, 0.6] }}
                transition={{
                  duration: 0.7,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: 0.2,
                }}
              />
            </>
          )}
        </motion.div>
      </div>

      {/* Stars Background */}
      <div className={styles.starsContainer}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={styles.star}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
            }}
          />
        ))}
      </div>

      {showText && (
        <motion.div
          className={styles.splashText}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1>3 SPACE</h1>
          <p>Exploring the cosmos</p>
        </motion.div>
      )}
    </motion.div>
  )
}
