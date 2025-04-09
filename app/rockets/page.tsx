"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import ParallaxBackground from "@/components/ParallaxBackground";
import styles from "@/styles/Rockets.module.css";

// Dynamically import RocketModel component for client-only rendering
const RocketModel = dynamic(() => import("@/components/RocketModel"), {
  ssr: false,
  loading: () => (
    <div className={styles.modelLoading}>
      <p>Loading 3D Model...</p>
    </div>
  )
});

// A simple rocket entry for the rockets section.
// Note: modelPath is null, so a fallback image will be used.
const rockets = {
  default: {
    name: "Model Rocket",
    description: "An educational model rocket without a 3D model.",
    height: "30 cm",
    diameter: "4 cm",
    mass: "150 g",
    payload: "None",
    fuelType: "Solid Propellant",
    engines: "Single-stage",
    firstFlight: "Prototype",
    parachute: "Yes",
    modelPath: null, // No 3D model available
    imagePath: "/images/rockets/default.jpg"
  }
};

// Launch kits data for Type 1, 2, and 3
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

export default function RocketsPage() {
  const [selectedRocket, setSelectedRocket] = useState("default");
  const [selectedTab, setSelectedTab] = useState("rockets");

  // Conditionally render the rocket model or a fallback image when no 3D model is available.
  const renderRocketModel = () => {
    const currentRocket = rockets[selectedRocket];
    if (currentRocket.modelPath) {
      return <RocketModel modelPath={currentRocket.modelPath} />;
    } else {
      return (
        <div className={styles.modelFallback}>
          <Image
            src={currentRocket.imagePath}
            alt={currentRocket.name}
            width={300}
            height={600}
            className={styles.rocketImage}
          />
          <p className={styles.fallbackMessage}>
            3D model unavailable. Showing image instead.
          </p>
        </div>
      );
    }
  };

  return (
    <>
      <ParallaxBackground />

      <section className={styles.rocketsHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1>Our Products</h1>
            <p>
              Explore our fleet of advanced model rockets and launch kits
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className={`section ${styles.navigationSection}`}>
        <div className="container">
          <div className={styles.tabSelector}>
            <button
              className={`${styles.tabBtn} ${selectedTab === "rockets" ? styles.active : ""}`}
              onClick={() => setSelectedTab("rockets")}
            >
              Rockets
            </button>
            <button
              className={`${styles.tabBtn} ${selectedTab === "launchKits" ? styles.active : ""}`}
              onClick={() => setSelectedTab("launchKits")}
            >
              Launch Kits
            </button>
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        {selectedTab === "rockets" ? (
          // Rockets Section
          <motion.div
            key="rockets-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <section className={`section ${styles.rocketsSection}`}>
              <div className="container">
                <div className={styles.rocketDisplay}>
                  <div className={styles.rocketModel}>{renderRocketModel()}</div>

                  <motion.div
                    key={selectedRocket}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className={styles.rocketInfo}
                  >
                    <h2>{rockets[selectedRocket].name}</h2>
                    <p className={styles.rocketDescription}>
                      {rockets[selectedRocket].description}
                    </p>
                    <div className={styles.rocketSpecs}>
                      <div className={styles.specItem}>
                        <div className={styles.specContent}>
                          <h3>Height</h3>
                          <p>{rockets[selectedRocket].height}</p>
                        </div>
                      </div>
                      <div className={styles.specItem}>
                        <div className={styles.specContent}>
                          <h3>Diameter</h3>
                          <p>{rockets[selectedRocket].diameter}</p>
                        </div>
                      </div>
                      <div className={styles.specItem}>
                        <div className={styles.specContent}>
                          <h3>Mass</h3>
                          <p>{rockets[selectedRocket].mass}</p>
                        </div>
                      </div>
                      <div className={styles.specItem}>
                        <div className={styles.specContent}>
                          <h3>Payload</h3>
                          <p>{rockets[selectedRocket].payload}</p>
                        </div>
                      </div>
                      <div className={styles.specItem}>
                        <div className={styles.specContent}>
                          <h3>Fuel Type</h3>
                          <p>{rockets[selectedRocket].fuelType}</p>
                        </div>
                      </div>
                      <div className={styles.specItem}>
                        <div className={styles.specContent}>
                          <h3>Engines</h3>
                          <p>{rockets[selectedRocket].engines}</p>
                        </div>
                      </div>
                      <div className={styles.specItem}>
                        <div className={styles.specContent}>
                          <h3>First Flight</h3>
                          <p>{rockets[selectedRocket].firstFlight}</p>
                        </div>
                      </div>
                      <div className={styles.specItem}>
                        <div className={styles.specContent}>
                          <h3>Parachute</h3>
                          <p>{rockets[selectedRocket].parachute}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          // Launch Kits Section
          <motion.div
            key="launchkits-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <section className={`section ${styles.launchKitsSection}`}>
              <div className="container">
                <h2 className="section-title">Launch Kits</h2>
                <p className="section-subtitle">
                  Advanced model rocket kits for experimentation and education
                </p>
                <div className={styles.launchKitsGrid}>
                  {Object.entries(launchKits).map(([id, kit]) => (
                    <motion.div
                      key={id}
                      className={styles.launchKitCard}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      style={{ borderTop: `4px solid ${kit.color}` }}
                    >
                      <div className={styles.launchKitImage}>
                        <div
                          className={styles.kitImagePlaceholder}
                          style={{ backgroundColor: `${kit.color}30` }}
                        >
                          {/* Insert an icon or image placeholder if desired */}
                        </div>
                      </div>
                      <div className={styles.launchKitContent}>
                        <h3>{kit.name}</h3>
                        <p className={styles.kitTagline}>{kit.tagline}</p>
                        <p className={styles.kitDescription}>{kit.description}</p>
                        <h4 className={styles.featuresTitle}>Key Features</h4>
                        <ul className={styles.featuresList}>
                          {kit.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                        <div className={styles.kitPricing}>
                          <span className={styles.kitPrice}>{kit.price}</span>
                          <button className={styles.buyButton}>Learn More</button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
