"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import styles from "@/styles/components/Navbar.module.css"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <header className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          
          <div className={styles.logoContainer}>
            
            <Image
        src="/logo.png"
        alt="3 SPACE"
        width={250}
        height={250}
      />
            
            
          </div>
        </Link>
        
        <nav className={styles.desktopNav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          {/* <Link href="/launches" className={styles.navLink}>
            Launches
          </Link> */}
          <Link href="/products" className={styles.navLink}>
            Products
          </Link>
          <Link href="/blogs" className={styles.navLink}>
            Blogs
          </Link>
          <Link href="/careers" className={styles.navLink}>
            Careers
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </nav>
        
        <div className={styles.mobileMenuBtn} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={styles.mobileNav}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={styles.mobileNavContainer}>
              <Link href="/" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/launches" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                Launches
              </Link>
              <Link href="/rockets" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                Rockets
              </Link>
              <Link href="/blogs" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                Blogs
              </Link>
              <Link href="/careers" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                Careers
              </Link>
              <Link href="/about" className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}