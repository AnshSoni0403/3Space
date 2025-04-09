"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import styles from "@/styles/components/LaunchCountdown.module.css"

export default function LaunchCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isLaunched, setIsLaunched] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Set launch date to 7 days from now
  useEffect(() => {
    const launchDate = new Date()
    launchDate.setDate(launchDate.getDate() + 7)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = launchDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setIsLaunched(true)
        if (audioRef.current && !isMuted) {
          audioRef.current.play()
        }
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [isMuted])

  const resetCountdown = () => {
    setIsLaunched(false)
    // Reset launch date to 30 seconds from now for demo purposes
    const newLaunchDate = new Date()
    newLaunchDate.setSeconds(newLaunchDate.getSeconds() + 30)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
    }
  }

  return (
    <div className={styles.countdownContainer}>
      <audio ref={audioRef} src="/sounds/rocket-launch.mp3" muted={isMuted} />

      <div className={styles.soundToggle} onClick={toggleMute}>
        {isMuted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <line x1="23" y1="9" x2="17" y2="15"></line>
            <line x1="17" y1="9" x2="23" y2="15"></line>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
          </svg>
        )}
      </div>

      <AnimatePresence mode="wait">
        {!isLaunched ? (
          <motion.div
            key="countdown"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.countdown}
          >
            <div className={styles.timeUnits}>
              <div className={styles.timeUnit}>
                <div className={styles.timeValue}>{timeLeft.days}</div>
                <div className={styles.timeLabel}>Days</div>
              </div>
              <div className={styles.timeSeparator}>:</div>
              <div className={styles.timeUnit}>
                <div className={styles.timeValue}>{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className={styles.timeLabel}>Hours</div>
              </div>
              <div className={styles.timeSeparator}>:</div>
              <div className={styles.timeUnit}>
                <div className={styles.timeValue}>{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className={styles.timeLabel}>Minutes</div>
              </div>
              <div className={styles.timeSeparator}>:</div>
              <div className={styles.timeUnit}>
                <div className={styles.timeValue}>{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className={styles.timeLabel}>Seconds</div>
              </div>
            </div>

            <div className={styles.launchInfo}>
              <h3>Next Mission: Orbital Deployment</h3>
              <p>Launching from Satish Dhawan Space Centre, Sriharikota</p>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="launched"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.launchAnimation}
          >
            <div className={styles.rocketLaunch}>
              <motion.div
                className={styles.rocket}
                initial={{ y: 0 }}
                animate={{ y: -500 }}
                transition={{ duration: 3, ease: [0.45, 0.05, 0.55, 0.95] }}
              >
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.5 16.5L3 18L4.5 19.5L6 18L4.5 16.5Z" fill="currentColor" />
                  <path d="M13 7.5L9 3.5C7.5 2 5.5 2 4 3.5C2.5 5 2.5 7 4 8.5L8 12.5L13 7.5Z" fill="currentColor" />
                  <path
                    d="M15 9.5L19 13.5C20.5 15 20.5 17 19 18.5C17.5 20 15.5 20 14 18.5L10 14.5L15 9.5Z"
                    fill="currentColor"
                  />
                  <path d="M19.5 4.5L21 3L19.5 1.5L18 3L19.5 4.5Z" fill="currentColor" />
                  <path d="M19.5 4.5L18 6L15 3L16.5 1.5L19.5 4.5Z" fill="currentColor" />
                  <path d="M6 15L3 18L4.5 19.5L7.5 16.5L6 15Z" fill="currentColor" />
                </svg>
              </motion.div>

              <motion.div
                className={styles.launchSmoke}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 1, 0.8, 0.6, 0.4, 0.2, 0],
                  scale: [0, 1, 2, 3, 4, 5, 6],
                }}
                transition={{
                  duration: 3,
                  times: [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
                }}
              />
            </div>

            <motion.div
              className={styles.launchMessage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <h2>Liftoff!</h2>
              <p>The rocket has successfully launched!</p>
              <button className={styles.resetButton} onClick={resetCountdown}>
                Watch Again
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
