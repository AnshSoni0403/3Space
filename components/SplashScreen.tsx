"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import styles from "@/styles/components/SplashScreen.module.css"

export default function SplashScreen() {
  const [showText, setShowText] = useState(false)
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true)
    }, 1500)
    
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <motion.div
      className={styles.splashScreen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.rocketContainer}>
        <motion.div
          className={styles.rocket}
          initial={{ y: "100vh" }}
          animate={{ y: "-10vh" }}
          transition={{
            duration: 3,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <svg width="100" height="380" viewBox="0 0 100 380" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Rocket Nose Cone */}
            <path d="M50 0L70 60H30L50 0Z" fill="#D1D1D1" />
            
            {/* Main Body */}
            <rect x="30" y="60" width="40" height="240" fill="#E8E8E8" />
            
            {/* Windows/Details */}
            <circle cx="50" cy="100" r="8" fill="#333333" />
            <circle cx="50" cy="140" r="8" fill="#333333" />
            <circle cx="50" cy="180" r="8" fill="#333333" />
            
            {/* Body Details */}
            <rect x="30" y="220" width="40" height="10" fill="#CCCCCC" />
            <rect x="30" y="240" width="40" height="10" fill="#CCCCCC" />
            
            {/* Boosters */}
            <rect x="20" y="300" width="60" height="30" fill="#D1D1D1" />
            
            {/* Engine Section */}
            <path d="M30 330H70L80 360H20L30 330Z" fill="#B9B9B9" />
            
            {/* Engine Nozzles */}
            <rect x="30" y="360" width="10" height="20" rx="2" fill="#666666" />
            <rect x="45" y="360" width="10" height="20" rx="2" fill="#666666" />
            <rect x="60" y="360" width="10" height="20" rx="2" fill="#666666" />
            
            {/* Fins */}
            <path d="M20 280L0 320V280H20Z" fill="#B9B9B9" />
            <path d="M80 280L100 320V280H80Z" fill="#B9B9B9" />
          </svg>
        </motion.div>
        
        <motion.div
          className={styles.exhaustEffect}
          initial={{ opacity: 0, scaleY: 0.2 }}
          animate={{ opacity: [0, 0.7, 0.4], scaleY: [0.2, 1, 0.6] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        />
      </div>
      
      {showText && (
        <motion.div
          className={styles.splashText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1>3 SPACE</h1>
          <p>Exploring the cosmos</p>
        </motion.div>
      )}
    </motion.div>
  )
}