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

          {/* Big handwritten-style message */}
          <div className={styles.comingSoonMessage}>
            📝 Product is Coming Soon!
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
