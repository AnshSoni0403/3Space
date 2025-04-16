"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import styles from "@/styles/Blogs.module.css"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Link from "next/link"

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const blogs = [
    {
      id: 1,
      title: "Advancements in Reusable Rocket Technology",
      excerpt:
        "Exploring the latest innovations in reusable rocket technology that are revolutionizing the space industry and reducing launch costs.",
      date: "April 15, 2024",
      author: "Dr. Vikram Sharma",
      readTime: "8 min read",
      category: "technology",
      image: "/images/blog-rocket-tech.jpg",
    },
    {
      id: 2,
      title: "The Future of Satellite Constellations",
      excerpt:
        "How mega-constellations of satellites are transforming global communications and creating new opportunities for connectivity.",
      date: "April 2, 2024",
      author: "Priya Patel",
      readTime: "6 min read",
      category: "industry",
      image: "/images/blog-satellite.jpg",
    },
    {
      id: 3,
      title: "India's Growing Role in Space Exploration",
      excerpt:
        "An analysis of India's expanding presence in the global space industry and its contributions to scientific advancement.",
      date: "March 20, 2024",
      author: "Rajiv Mehta",
      readTime: "10 min read",
      category: "industry",
      image: "/images/blog-india-space.jpg",
    },
    {
      id: 4,
      title: "Propulsion Systems: Past, Present, and Future",
      excerpt:
        "A technical deep dive into the evolution of rocket propulsion systems and what innovations lie on the horizon.",
      date: "March 5, 2024",
      author: "Dr. Ananya Singh",
      readTime: "12 min read",
      category: "technology",
      image: "/images/blog-propulsion.jpg",
    },
    {
      id: 5,
      title: "The Economics of Space: Investment Trends",
      excerpt:
        "Examining the current investment landscape in the space industry and identifying emerging opportunities for growth.",
      date: "February 18, 2024",
      author: "Arjun Kapoor",
      readTime: "7 min read",
      category: "business",
      image: "/images/blog-economics.jpg",
    },
    {
      id: 6,
      title: "Environmental Considerations in Rocket Launches",
      excerpt:
        "Analyzing the environmental impact of rocket launches and the industry's efforts to develop more sustainable practices.",
      date: "February 3, 2024",
      author: "Dr. Neha Gupta",
      readTime: "9 min read",
      category: "sustainability",
      image: "/images/blog-environment.jpg",
    },
  ]

  const filteredBlogs = selectedCategory === "all" ? blogs : blogs.filter((blog) => blog.category === selectedCategory)

  return (
    <>
      <ParallaxBackground />
      <Navbar/>

      <section className={styles.blogsHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1>Space Insights</h1>
            <p>Expert analysis and thought leadership from the frontier of space exploration</p>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.blogsSection}`}>
        <div className="container">
          <div className={styles.categoryFilter}>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === "all" ? styles.active : ""}`}
              onClick={() => setSelectedCategory("all")}
            >
              All
            </button>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === "technology" ? styles.active : ""}`}
              onClick={() => setSelectedCategory("technology")}
            >
              Technology
            </button>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === "industry" ? styles.active : ""}`}
              onClick={() => setSelectedCategory("industry")}
            >
              Industry
            </button>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === "business" ? styles.active : ""}`}
              onClick={() => setSelectedCategory("business")}
            >
              Business
            </button>
            <button
              className={`${styles.categoryBtn} ${selectedCategory === "sustainability" ? styles.active : ""}`}
              onClick={() => setSelectedCategory("sustainability")}
            >
              Sustainability
            </button>
          </div>

          <div className={styles.blogGrid}>
            {filteredBlogs.map((blog) => (
              <motion.div
                key={blog.id}
                className={styles.blogCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={styles.blogImage}>
                  <img src={blog.image || "/placeholder.svg"} alt={blog.title} />
                  <div className={styles.blogCategory}>{blog.category}</div>
                </div>
                <div className={styles.blogContent}>
                  <h2>{blog.title}</h2>
                  <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                  <div className={styles.blogMeta}>
                    <div className={styles.metaItem}>
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <User size={14} />
                      <span>{blog.author}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <Link href={`/blogs/${blog.id}`} className={styles.readMoreLink}>
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>
      </section>
      <Footer/>
    </>
  )
}
