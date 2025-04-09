"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import RocketModel from "@/components/RocketModel"
import ParallaxBackground from "@/components/ParallaxBackground"
import styles from "@/styles/Rockets.module.css"
import { Info, Fuel, Package, FlagIcon as Parachute, Weight, Zap } from "lucide-react"

export default function RocketsPage() {
  const [selectedRocket, setSelectedRocket] = useState("falcon1")

  const rockets = {
    falcon1: {
      name: "Falcon 1",
      description: "Our first orbital class rocket, designed for small satellite launches.",
      height: "22.25 m",
      diameter: "1.68 m",
      mass: "30,146 kg",
      payload: "670 kg to LEO",
      fuelType: "LOX / RP-1",
      engines: "1 Merlin",
      firstFlight: "24 March 2006",
      parachute: "Yes - Recovery system for first stage",
      modelPath: "/models/falcon1.glb",
    },
    falcon9: {
      name: "Falcon 9",
      description: "A reusable, two-stage rocket designed to reliably transport satellites and the Dragon spacecraft.",
      height: "70 m",
      diameter: "3.7 m",
      mass: "549,054 kg",
      payload: "22,800 kg to LEO",
      fuelType: "LOX / RP-1",
      engines: "9 Merlin",
      firstFlight: "4 June 2010",
      parachute: "No - Uses propulsive landing",
      modelPath: "/models/falcon9.glb",
    },
    falconHeavy: {
      name: "Falcon Heavy",
      description: "The most powerful operational rocket in the world by a factor of two.",
      height: "70 m",
      diameter: "12.2 m (width with boosters)",
      mass: "1,420,788 kg",
      payload: "63,800 kg to LEO",
      fuelType: "LOX / RP-1",
      engines: "27 Merlin",
      firstFlight: "6 February 2018",
      parachute: "No - Uses propulsive landing",
      modelPath: "/models/falconheavy.glb",
    },
  }

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
            <h1>Our Rockets</h1>
            <p>Explore our fleet of advanced reusable rockets</p>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.rocketsSection}`}>
        <div className="container">
          <div className={styles.rocketSelector}>
            <button
              className={`${styles.rocketBtn} ${selectedRocket === "falcon1" ? styles.active : ""}`}
              onClick={() => setSelectedRocket("falcon1")}
            >
              Falcon 1
            </button>
            <button
              className={`${styles.rocketBtn} ${selectedRocket === "falcon9" ? styles.active : ""}`}
              onClick={() => setSelectedRocket("falcon9")}
            >
              Falcon 9
            </button>
            <button
              className={`${styles.rocketBtn} ${selectedRocket === "falconHeavy" ? styles.active : ""}`}
              onClick={() => setSelectedRocket("falconHeavy")}
            >
              Falcon Heavy
            </button>
          </div>

          <div className={styles.rocketDisplay}>
            <div className={styles.rocketModel}>
              <RocketModel modelPath={rockets[selectedRocket].modelPath} />
            </div>

            <motion.div
              key={selectedRocket}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={styles.rocketInfo}
            >
              <h2>{rockets[selectedRocket].name}</h2>
              <p className={styles.rocketDescription}>{rockets[selectedRocket].description}</p>

              <div className={styles.rocketSpecs}>
                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <Info size={20} />
                  </div>
                  <div className={styles.specContent}>
                    <h3>Height</h3>
                    <p>{rockets[selectedRocket].height}</p>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <Weight size={20} />
                  </div>
                  <div className={styles.specContent}>
                    <h3>Mass</h3>
                    <p>{rockets[selectedRocket].mass}</p>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <Package size={20} />
                  </div>
                  <div className={styles.specContent}>
                    <h3>Payload</h3>
                    <p>{rockets[selectedRocket].payload}</p>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <Fuel size={20} />
                  </div>
                  <div className={styles.specContent}>
                    <h3>Fuel Type</h3>
                    <p>{rockets[selectedRocket].fuelType}</p>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <Zap size={20} />
                  </div>
                  <div className={styles.specContent}>
                    <h3>Engines</h3>
                    <p>{rockets[selectedRocket].engines}</p>
                  </div>
                </div>

                <div className={styles.specItem}>
                  <div className={styles.specIcon}>
                    <Parachute size={20} />
                  </div>
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

      <section className={`section ${styles.rocketTechSection}`}>
        <div className="container">
          <h2 className="section-title">Our Rocket Technology</h2>
          <p className="section-subtitle">
            Discover the innovations that make our rockets the most advanced in the industry
          </p>

          <div className="grid grid-3">
            <motion.div
              className={styles.techCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Reusable First Stages</h3>
              <p>
                Our rockets feature reusable first stages that can land propulsively, dramatically reducing launch
                costs.
              </p>
            </motion.div>

            <motion.div
              className={styles.techCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Advanced Propulsion</h3>
              <p>
                Our engines are designed for maximum efficiency and reliability, with industry-leading thrust-to-weight
                ratios.
              </p>
            </motion.div>

            <motion.div
              className={styles.techCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>Autonomous Systems</h3>
              <p>Sophisticated guidance and control systems enable precise landings and autonomous operations.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
