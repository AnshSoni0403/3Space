"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import ParallaxBackground from "@/components/ParallaxBackground";
import styles from "@/styles/Rockets.module.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Rockets() {
  // Launch kits data
  const launchKits = {
    type1: {
      name: "TYPE 1 | 100m Launch Kit",
      tagline: "Experience your first high-altitude deployment",
      description:
        "A simple, beginner-friendly setup. This kit focuses on safe parachute deployment and basic altitude sensing—perfect for learning environments and first-time flyers.",
      features: [
        "Compact electronics",
        "Altitude detection and monitoring functionality",
        "Stable and consistent parachute deployment mechanism"
      ],
      price: "$299",
      imagePath: "/images/products/launch-kit-100m.jpg",
      color: "#4299e1" // blue
    },
    type2: {
      name: "TYPE 2 | 200m Launch Kit",
      tagline: "Mid-Range Kit | Smarter, Deeper Insights",
      description:
        "Step up your mission with enhanced data awareness and motion tracking. This kit not only ensures a smooth parachute deployment but also records flight movement and stores data for post-launch analysis.",
      features: [
        "Advanced motion tracking",
        "Onboard data storage",
        "Ideal for intermediate-level projects"
      ],
      price: "$499",
      imagePath: "/images/products/launch-kit-200m.jpg",
      color: "#68d391" // green
    },
    type3: {
      name: "TYPE 3 | 300m Launch Kit",
      tagline: "Advanced Explorer Kit | Visual + Data-Driven Missions",
      description:
        "Take your mission to the next level. Equipped with a smart onboard system, this kit captures visuals during flight and logs real-time environmental and movement data. It's designed for high-altitude performance and professional-grade experimentation.",
      features: [
        "In-flight video capture",
        "Comprehensive data logging",
        "High-performance launch capability"
      ],
      price: "$799",
      imagePath: "/images/products/launch-kit-300m.jpg",
      color: "#f687b3" // pink
    }
  };

  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <section className={styles.section}>
        <div className={styles.headingContainer}>
          <h1 className={styles.launchingSoon}>🚀 Launching Soon</h1>
          <h2 className={styles.productsTitle}>Our Products</h2>
          <p className={styles.productsSubtitle}>
            Explore our fleet of advanced model rockets and launch kits
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
