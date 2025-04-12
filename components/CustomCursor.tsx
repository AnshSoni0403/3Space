"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket } from "lucide-react";
import styles from "../styles/components/CustomCursor.module.css";


type TrailDot = {
  id: number;
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);

  useEffect(() => {
    let id = 0;
    let moveTimeout: NodeJS.Timeout;

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Clear existing timeout
      if (moveTimeout) clearTimeout(moveTimeout);

      // Set new timeout
      moveTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);

      const hoveredElement = e.target as HTMLElement;
      const isLinkOrButton =
        hoveredElement.tagName.toLowerCase() === "a" ||
        hoveredElement.tagName.toLowerCase() === "button" ||
        hoveredElement.closest("a") ||
        hoveredElement.closest("button");

      setLinkHovered(!!isLinkOrButton);

      if (isMoving) {
        const newDot: TrailDot = {
          id: id++,
          x: e.clientX - 4,
          y: e.clientY - 4,
        };
        setTrail((prev) => [...prev.slice(-8), newDot]);
      }
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    addEventListeners();
    return () => {
      removeEventListeners();
      if (moveTimeout) clearTimeout(moveTimeout);
    };
  }, [isMoving]);

  return (
    <>
      {/* Thrust particles */}
      <AnimatePresence>
        {isMoving && trail.map((dot, index) => (
          <motion.div
            key={dot.id}
            className={styles.thrustParticle}
            initial={{ 
              scale: 1,
              opacity: 0.8,
              x: position.x,
              y: position.y
            }}
            animate={{
              scale: 0,
              opacity: 0,
              x: dot.x - 20,
              y: dot.y - 20,
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
            style={{
              backgroundColor: index % 2 === 0 ? '#ff6b6b' : '#ffd93d'
            }}
          />
        ))}
      </AnimatePresence>

      {/* Main cursor */}
      <motion.div
        className={styles.cursor}
        animate={{
          x: position.x - 15,
          y: position.y - 15,
          scale: clicked ? 0.8 : linkHovered ? 1.2 : 1,
          opacity: hidden ? 0 : 1,
          rotate: isMoving ? 45 : 0,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
          stiffness: 800,
          damping: 30,
        }}
      >
        <div 
          className={`
            ${styles.cursorInner} 
            ${clicked ? styles.clicked : ""} 
            ${linkHovered ? styles.hovered : ""} 
            ${isMoving ? styles.moving : ""}
          `}
        >
          <Rocket size={20} className={styles.rocket} />
        </div>
      </motion.div>
    </>
  );
}