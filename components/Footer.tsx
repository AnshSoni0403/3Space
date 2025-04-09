import Link from "next/link"
import { Rocket, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react"
import styles from "@/styles/components/Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <Link href="/" className={styles.logo}>
              <Rocket size={24} />
              <span>3 SPACE</span>
            </Link>
            <p>
              Making India a global leader in space exploration through cost-effective satellite launches and reusable
              rockets.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.linkGroup}>
              <h3>Company</h3>
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/news">News</Link>
              <Link href="/contact">Contact</Link>
            </div>

            <div className={styles.linkGroup}>
              <h3>Services</h3>
              <Link href="/services/satellite-launch">Satellite Launch</Link>
              <Link href="/services/payload-integration">Payload Integration</Link>
              <Link href="/services/mission-planning">Mission Planning</Link>
              <Link href="/services/consulting">Consulting</Link>
            </div>

            <div className={styles.linkGroup}>
              <h3>Resources</h3>
              <Link href="/resources/research">Research</Link>
              <Link href="/resources/blog">Blog</Link>
              <Link href="/resources/gallery">Gallery</Link>
              <Link href="/resources/faq">FAQ</Link>
            </div>
          </div>

          <div className={styles.footerContact}>
            <h3>Contact Us</h3>
            <div className={styles.contactItem}>
              <MapPin size={16} />
              <p>123 Space Park, Bangalore, India</p>
            </div>
            <div className={styles.contactItem}>
              <Mail size={16} />
              <p>info@3space.in</p>
            </div>
            <div className={styles.contactItem}>
              <Phone size={16} />
              <p>+91 1234567890</p>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} 3 SPACE. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
