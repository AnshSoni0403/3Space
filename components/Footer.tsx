import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from "lucide-react";
import { RiTwitterXFill } from "react-icons/ri";
import { useState } from "react";

import styles from "@/styles/components/Footer.module.css";

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/logo.png"
                  alt="3 SPACE Logo"
                  width={120}
                  height={120}
                  className={styles.logoImage}
                />
              </Link>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://x.com/3Space_tech?t=zISEm6mjQYrCN7ZNEd6jxg&s=09" aria-label="Twitter">
                <RiTwitterXFill size={18} />
              </a>
              <a href="https://www.linkedin.com/company/3space-aerospace-and-space-technologies-company/" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://www.instagram.com/3space_tech?igsh=ZDBrY3Rla254MDVy" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com/@3space_tech?si=EBQQzO5K1RiG_YSj" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className={styles.footerLinksSection}>
            <div className={styles.linkGroup}>
              <h3>Company</h3>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/news">News</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Resources</h3>
              <ul>
                <li><Link href="/resources/research">Research</Link></li>
                <li><Link href="/resources/blog">Blog</Link></li>
                <li><Link href="/resources/gallery">Gallery</Link></li>
                <li><Link href="/resources/faq">FAQ</Link></li>
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Contact Us</h3>
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <MapPin size={16} />
                  <a href="https://maps.app.goo.gl/oYVoFXa7JgS2cQuN8">
                    <p>IIC PDEU, Gandhinagar, Gujarat</p>
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <Mail size={16} />
                  <a href="mailto:3spacetechcorp@gmail.com">
                    <p>3spacetechcorp@gmail.com</p>
                  </a>
                </div>
                <div className={styles.contactItem}>
                  <Phone size={16} />
                  <p>+91 6351932850</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.footerForm}>
            <h3>Send us a Message</h3>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input 
                  type="text" 
                  placeholder="Name" 
                  name="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <textarea 
                placeholder="Your message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={2}
              ></textarea>
              <button type="submit">Send</button>
            </form>
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
  );
}