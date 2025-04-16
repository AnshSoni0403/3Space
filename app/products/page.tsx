// app/(your‑folder)/Rockets.jsx
"use client";

import ParallaxBackground from "@/components/ParallaxBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "@/styles/Rockets.module.css";

export default function Rockets() {
  return (
    <>
      <ParallaxBackground/>
      <Navbar />
      
      {/* Launch Banner now separate from content section */}
      <div className={styles.launchBanner}>
        <h1>🚀 Launching Soon</h1>
      </div>

      <section className={styles.section}>
        <div className={styles.headingContainer}>
          <h2 className={styles.productsTitle}>Our Products</h2>
          <p className={styles.productsSubtitle}>
            Explore our fleet of advanced model rockets and launch kits
          </p>
          <div className={styles.comingSoonMessage}>
            📝 Product is Coming Soon!
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}