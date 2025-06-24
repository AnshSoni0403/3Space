"use client"

import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import styles from "../blog1/blog1.module.css"
import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function BlogPost() {
  return (
    <>
      
      <Navbar />

      <article className={styles.blogContainer}>
          <header className={styles.blogHeader}>
            <h1>Women in Indian Space: A Journey of Excellence and Empowerment</h1>
            <p className={styles.subtitle}>How India carved out its space in the stars - from ancient dreams to modern missions</p>
            <div className={styles.blogImageWrapper}>
              <img
                src="/images/Blogs/blog2.jpg"
                alt="Women in Indian Space"
                className={styles.blogMainImage}
              />
              <span className={styles.imageCaption}>
                Celebrating the women behind India's space success
              </span>
            </div>
          </header>

          <section className={styles.introSection}>
            <p>India’s rise in space exploration is not only a triumph of science and engineering but also a celebration of the women who have redefined possibilities in one of the most challenging fields. From mission control rooms to spacecraft design labs, women have played a crucial role in shaping India’s space legacy — a story not just of scientific progress but also of resilience and transformation.</p>
          </section>

          <section className={styles.contentSection}>
            {/* <h2>Chapter 1: The Ancient Spark – When Imagination Took Flight</h2> */}
            <p>Trailblazers like Dr. Ritu Karidhal, fondly known as the Rocket Woman of India, and Nandini Harinath, both central to the success of the Mars Orbiter Mission (Mangalyaan), proved that intellect and ambition know no gender. The mission itself made global headlines for its precision and cost-effectiveness, but the presence of women in leadership roles made it a moment of national pride. Chandrayaan-2 pushed the envelope further with Muthayya Vanitha as Project Director and Dr. Karidhal as Mission Director — marking the first time two women led such a major ISRO mission.</p>
          </section>

          <section className={styles.contentSection}>
            {/* <h2>Chapter 2: Tipu Sultan – The Real-Life Rocket Warrior</h2> */}
            <p>Despite their achievements, women in India’s space sector have often had to navigate cultural expectations, gender biases, and lack of representation. Their ability to balance high-pressure roles with personal responsibilities speaks volumes about their dedication and strength. It is not just about being part of the mission — they’ve led it, designed it, and made it soar.</p>
          </section>

          <section className={styles.contentSection}>
            {/* <h2>Chapter 3: A Nation Reborn – From Bullock Carts to Launch Pads</h2> */}
            <p>These women have not only advanced India’s scientific capabilities but have also inspired a generation. Popular culture, through films like Mission Mangal, has amplified their contributions and encouraged young girls to envision themselves as scientists, engineers, and leaders in space technology. When young minds see women breaking barriers in labs and launchpads, they begin to believe in the power of their own potential.</p>
          </section>

          <section className={styles.timelineSection}>
            {/* <h2>Chapter 4: ISRO – India's Ticket to Space</h2> */}
            <p>At 3SPACE, we don’t just build spacecraft — we build a future inspired by these pioneering women. Their journeys fuel our mission to create an ecosystem where innovation thrives on merit, not limited by stereotypes. From propulsion engineers to system designers, we believe every young girl deserves to see herself in these roles, not as exceptions, but as equals.</p>
          </section>

          <section className={styles.contentSection}>
            {/* <h2>Chapter 5: The Future is Now – What's Next for Indian Rocketry?</h2> */}
            <p>We are committed to continuing this legacy — not just by remembering the women who made history, but by empowering those who will make the future. For us, the cosmos is not just a destination — it’s a canvas where everyone, regardless of gender, can leave a mark.</p>
          </section>

          <section className={styles.conclusionSection}>
            {/* <h2>Final Thoughts: What Can We Learn from This Journey?</h2> */}
            <p>As India reaches for the stars with upcoming missions like Aditya-L1 and Venus exploration, one thing is certain: when Indian women enter the control room, the universe listens. At 3SPACE, we are proud to walk in their footsteps — and launch forward, one mission at a time.</p>
          </section>
        </article>

      <Footer />
    </>
  )
} 
