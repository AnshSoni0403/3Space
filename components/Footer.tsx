'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube } from 'lucide-react';
import { RiTwitterXFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import styles from '@/styles/components/Footer.module.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const socialLinks = [
  { id: 'twitter', icon: <RiTwitterXFill size={18} />, url: 'https://x.com/3Space_tech' },
  { id: 'linkedin', icon: <Linkedin size={18} />, url: 'https://linkedin.com/company/3space' },
  { id: 'instagram', icon: <Instagram size={18} />, url: 'https://instagram.com/3space_tech' },
  { id: 'youtube', icon: <Youtube size={18} />, url: 'https://youtube.com/@3space_tech' }
];

const companyLinks = [
  { id: 'about', path: '/about', label: 'About Us' },
  { id: 'careers', path: '/careers', label: 'Careers' },
  { id: 'news', path: '/news', label: 'News' },
  { id: 'contact', path: '/contact', label: 'Contact' }
];

const resourceLinks = [
  { id: 'research', path: '/resources/research', label: 'Research' },
  { id: 'blog', path: '/resources/blog', label: 'Blog' },
  { id: 'gallery', path: '/resources/gallery', label: 'Gallery' },
  { id: 'faq', path: '/resources/faq', label: 'FAQ' }
];

const contactItems = [
  { id: 'address', icon: <MapPin size={16} />, content: 'IIC PDEU, Gandhinagar, Gujarat', url: 'https://maps.app.goo.gl/oYVoFXa7JgS2cQuN8' },
  { id: 'email', icon: <Mail size={16} />, content: '3spacetechcorp@gmail.com', url: 'mailto:3spacetechcorp@gmail.com' },
  { id: 'phone', icon: <Phone size={16} />, content: '+91 6351932850' }
];

export default function Footer() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to send message');

      alert(data.message || '✅ Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Submission error:', err);
      alert(`❌ ${err instanceof Error ? err.message : 'An error occurred. Please try again.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <motion.div 
          className={styles.footerContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Brand & Social */}
          <div className={styles.footerBrand}>
            <div className={styles.logoContainer}>
              <Link href="/" className={styles.logo}>
                <Image
                  src="/logo.png"
                  alt="3 SPACE Logo"
                  width={120}
                  height={120}
                  className={styles.logoImage}
                  priority
                />
              </Link>
            </div>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <motion.a
                  key={`social-${social.id}`}
                  href={social.url}
                  aria-label={social.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className={styles.footerLinksSection}>
            <div className={styles.linkGroup}>
              <h3>Company</h3>
              <ul>
                {companyLinks.map((link) => (
                  <motion.li 
                    key={`company-${link.id}`}
                    whileHover={{ x: 5 }}
                  >
                    <Link href={link.path}>{link.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Resources</h3>
              <ul>
                {resourceLinks.map((link) => (
                  <motion.li 
                    key={`resource-${link.id}`}
                    whileHover={{ x: 5 }}
                  >
                    <Link href={link.path}>{link.label}</Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className={styles.linkGroup}>
              <h3>Contact Us</h3>
              <div className={styles.contactList}>
                {contactItems.map((item) => (
                  <motion.div 
                    key={`contact-${item.id}`}
                    className={styles.contactItem}
                    whileHover={{ x: 5 }}
                  >
                    {item.icon}
                    {item.url ? (
                      <a href={item.url}>{item.content}</a>
                    ) : (
                      <p>{item.content}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            className={styles.footerForm}
            initial={{ y: 20 }}
            animate={{ y: 0 }}
          >
            <h3>Send us a Message</h3>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <motion.input 
                  type="text" 
                  placeholder="Name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  disabled={isSubmitting}
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.input 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  disabled={isSubmitting}
                  whileFocus={{ scale: 1.02 }}
                />
              </div>
              <motion.textarea 
                placeholder="Your message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows={3} 
                disabled={isSubmitting}
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} 3 SPACE. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            {['privacy', 'terms', 'cookies'].map((link) => (
              <motion.div 
                key={`policy-${link}`}
                whileHover={{ scale: 1.05 }}
              >
                <Link href={`/${link}`}>
                  {`${link.charAt(0).toUpperCase() + link.slice(1)} Policy`}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}