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
      slug: "blog1",
      title: "From Fire Arrows to the Moon: India's Rocket Journey Through Time",
      excerpt:
        "How India carved out its space in the stars - from ancient dreams to modern missions",
      date: "May 9, 2025",
      author: "Unknown",
      readTime: "8 min read",
      category: "technology",
<<<<<<< HEAD
      image: "public/images/blogs/download.jpg",
=======
      image: "/images/Blogs/download.jpg",
>>>>>>> 7653d5b (tried image)
    },
    // {
    //   id: 2,
    //   title: "The Future of Satellite Constellations",
    //   excerpt:
    //     "How mega-constellations of satellites are transforming global communications and creating new opportunities for connectivity.",
    //   date: "April 2, 2024",
    //   author: "Priya Patel",
    //   readTime: "6 min read",
    //   category: "industry",
    //   image: "/images/blog-satellite.jpg",
    // },
    // ...other blogs
  ]

  const filteredBlogs =
    selectedCategory === "all"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory)

  return (
    <>
      <ParallaxBackground />
      <Navbar />

      <section className={styles.blogsHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1>Space Insights</h1>
            <p>
              Expert analysis and thought leadership from the frontier of space exploration
            </p>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.blogsSection}`}>
        <div className="container">
          <div className={styles.categoryFilter}>
            {["all", "technology", "industry", "business", "sustainability"].map((category) => (
              <button
                key={category}
                className={`${styles.categoryBtn} ${selectedCategory === category ? styles.active : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
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
                  <img src={blog.image} alt={blog.title} />
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

                  <Link
                    href={`/blogs/${blog.slug}`}
                    className={styles.readMoreLink}
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
