"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styles from "@/styles/components/CustomCursor.module.css"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const hoveredElement = e.target as HTMLElement
      const isLinkOrButton =
        hoveredElement.tagName.toLowerCase() === "a" ||
        hoveredElement.tagName.toLowerCase() === "button" ||
        hoveredElement.closest("a") ||
        hoveredElement.closest("button")

      setLinkHovered(!!isLinkOrButton)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    addEventListeners()
    return () => removeEventListeners()
  }, [])

  return (
    <motion.div
      className={styles.cursor}
      animate={{
        x: position.x,
        y: position.y,
        scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        type: "spring",
        mass: 0.2,
        stiffness: 800,
        damping: 30,
        scale: {
          type: "spring",
          mass: 0.1,
          stiffness: 800,
          damping: 25,
        },
      }}
    >
      <div className={`${styles.cursorRocket} ${linkHovered ? styles.hovered : ""}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.566 17.67c-.28-.5-.654-.96-1.106-1.355-.452-.394-.978-.725-1.542-.97l-1.95 3.95 1.95-3.95c-.552-.244-1.15-.412-1.756-.487C2.56 14.783 2 14.8 2 14.8s.693.256 1.276.725c.584.47 1.127 1.124 1.487 1.856.36.731.582 1.547.582 2.296 0 .75-.222 1.39-.582 1.845-.36.454-.86.707-1.487.707-.626 0-1.345-.253-1.705-.707C1.21 21.068 1 20.427 1 19.678h2c0 .75.222 1.39.582 1.845H1c0-.75.21-1.39.57-1.845.36-.454.86-.707 1.487-.707.626 0 1.127.253 1.487.707.36.454.582 1.095.582 1.845 0-.75-.222-1.565-.582-2.296-.36-.731-.903-1.386-1.487-1.856C2.473 16.056 1.78 15.8 1.78 15.8s.56-.017 1.156.058c.596.075 1.194.243 1.746.487.564.245 1.09.576 1.542.97.452.395.826.855 1.106 1.355.28.5.456 1.033.456 1.53 0 .5-.175.94-.456 1.24-.28.3-.665.47-1.106.47-.442 0-.95-.17-1.23-.47-.28-.3-.456-.74-.456-1.24h2c0 .5.175.94.456 1.24H5.23c0-.5.175-.94.456-1.24.28-.3.665-.47 1.106-.47.442 0 .826.17 1.106.47.28.3.456.74.456 1.24 0-.5-.175-1.03-.456-1.53-.28-.5-.665-.855-1.106-1.105"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2v4m0 12v4m10-10h-4M6 12H2"
            stroke="#fff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  )
}
