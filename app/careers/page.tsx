"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ParallaxBackground from "@/components/ParallaxBackground"
import Navbar from "@/components/Navbar"
import styles from "@/styles/Careers.module.css"
import { MapPin, Briefcase, Clock, ChevronDown, ChevronUp, Search } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState("all")
  const [expandedJob, setExpandedJob] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const toggleJob = (id: number) => {
    if (expandedJob === id) {
      setExpandedJob(null)
    } else {
      setExpandedJob(id)
    }
  }

  const jobs = [
    {
      id: 1,
      title: "Senior Propulsion Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "We're looking for an experienced Propulsion Engineer to lead the development of our next-generation rocket engines. You'll work on designing, testing, and optimizing propulsion systems for our launch vehicles.",
      responsibilities: [
        "Lead the design and development of liquid rocket engines",
        "Conduct performance analysis and optimization of propulsion systems",
        "Develop test plans and oversee engine testing campaigns",
        "Collaborate with cross-functional teams to integrate propulsion systems into vehicle designs",
        "Mentor junior engineers and contribute to the technical growth of the team",
      ],
      requirements: [
        "M.S. or Ph.D. in Aerospace Engineering, Mechanical Engineering, or related field",
        "7+ years of experience in rocket propulsion system design and development",
        "Strong understanding of fluid dynamics, thermodynamics, and combustion processes",
        "Experience with propellant management systems and engine control systems",
        "Excellent problem-solving skills and attention to detail",
      ],
    },
    {
      id: 2,
      title: "Guidance, Navigation & Control Engineer",
      department: "Engineering",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Join our GNC team to develop advanced control systems for our rockets. You'll work on algorithms and software that ensure precise navigation and control during all phases of flight.",
      responsibilities: [
        "Develop and implement GNC algorithms for launch vehicles",
        "Design and analyze control systems for vehicle stability and performance",
        "Create simulation environments to test and validate GNC systems",
        "Support integration and testing of GNC hardware and software",
        "Analyze flight data to improve future mission performance",
      ],
      requirements: [
        "B.S. or M.S. in Aerospace Engineering, Electrical Engineering, or related field",
        "3+ years of experience in GNC system development",
        "Strong background in control theory and state estimation",
        "Proficiency in MATLAB, Simulink, and C/C++",
        "Experience with real-time embedded systems is a plus",
      ],
    },
    {
      id: 3,
      title: "Spacecraft Systems Engineer",
      department: "Engineering",
      location: "Hyderabad, India",
      type: "Full-time",
      description:
        "We're seeking a Spacecraft Systems Engineer to work on the design and development of our satellite platforms. You'll be responsible for ensuring all spacecraft subsystems work together seamlessly.",
      responsibilities: [
        "Lead spacecraft system architecture development and integration",
        "Perform system-level analyses including mass, power, and thermal budgets",
        "Coordinate between subsystem teams to ensure compatibility and performance",
        "Develop and maintain system requirements and specifications",
        "Support spacecraft assembly, integration, and testing activities",
      ],
      requirements: [
        "B.S. or M.S. in Aerospace Engineering or related field",
        "5+ years of experience in spacecraft systems engineering",
        "Knowledge of spacecraft subsystems including power, thermal, structures, and communications",
        "Experience with systems engineering tools and methodologies",
        "Strong communication and teamwork skills",
      ],
    },
    {
      id: 4,
      title: "Manufacturing Engineer",
      department: "Production",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Join our manufacturing team to develop and optimize production processes for rocket components. You'll work on implementing efficient manufacturing techniques while maintaining the highest quality standards.",
      responsibilities: [
        "Develop manufacturing processes for aerospace components",
        "Design tooling and fixtures for production operations",
        "Implement quality control procedures and continuous improvement initiatives",
        "Collaborate with design engineers to ensure manufacturability",
        "Troubleshoot production issues and implement solutions",
      ],
      requirements: [
        "B.S. in Mechanical Engineering, Manufacturing Engineering, or related field",
        "3+ years of experience in aerospace manufacturing",
        "Knowledge of CNC machining, composites fabrication, and welding processes",
        "Experience with CAD/CAM software and production planning tools",
        "Familiarity with lean manufacturing principles",
      ],
    },
    {
      id: 5,
      title: "Software Developer - Flight Software",
      department: "Software",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "We're looking for a Software Developer to join our Flight Software team. You'll work on mission-critical software that controls our rockets during all phases of flight.",
      responsibilities: [
        "Develop and maintain flight software for launch vehicles",
        "Implement real-time control algorithms and communication protocols",
        "Create and execute software test plans and procedures",
        "Participate in code reviews and software architecture discussions",
        "Support software integration with hardware systems",
      ],
      requirements: [
        "B.S. or M.S. in Computer Science, Software Engineering, or related field",
        "3+ years of experience in embedded software development",
        "Proficiency in C/C++ programming for real-time systems",
        "Experience with RTOS and embedded Linux",
        "Knowledge of software development best practices and version control systems",
      ],
    },
    {
      id: 6,
      title: "Mission Operations Specialist",
      department: "Operations",
      location: "Bangalore, India",
      type: "Full-time",
      description:
        "Join our Mission Operations team to plan and execute launch campaigns. You'll work on mission planning, launch procedures, and real-time mission support.",
      responsibilities: [
        "Develop mission timelines and operational procedures",
        "Coordinate launch campaign activities and team responsibilities",
        "Conduct mission simulations and training exercises",
        "Provide real-time support during launch operations",
        "Analyze mission data and prepare post-mission reports",
      ],
      requirements: [
        "B.S. in Aerospace Engineering, Systems Engineering, or related field",
        "2+ years of experience in aerospace operations or mission planning",
        "Strong understanding of launch vehicle systems and operations",
        "Excellent communication and teamwork skills",
        "Ability to work under pressure in time-critical situations",
      ],
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())

    if (activeTab === "all") return matchesSearch
    return job.department.toLowerCase() === activeTab.toLowerCase() && matchesSearch
  })

  return (
    <>
      <ParallaxBackground />
      <Navbar/>

      <section className={styles.careersHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroContent}
          >
            <h1>Join Our Mission</h1>
            <p>Help us build the future of space exploration</p>
          </motion.div>
        </div>
      </section>

      <section className={`section ${styles.careersSection}`}>
        <div className="container">
          <div className={styles.careersIntro}>
            <h2>Careers at 3 SPACE</h2>
            <p>
              At 3 SPACE, we're on a mission to make India a global leader in space exploration. We're looking for
              passionate individuals who share our vision and want to be part of this exciting journey. Join our team of
              innovators, engineers, and dreamers as we push the boundaries of what's possible in space technology.
            </p>
          </div>

          <div className={styles.searchFilter}>
            <div className={styles.searchBar}>
              <Search size={18} />
              <input
                type="text"
                placeholder="Search positions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className={styles.tabs}>
              <button
                className={`${styles.tab} ${activeTab === "all" ? styles.active : ""}`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              <button
                className={`${styles.tab} ${activeTab === "engineering" ? styles.active : ""}`}
                onClick={() => setActiveTab("engineering")}
              >
                Engineering
              </button>
              <button
                className={`${styles.tab} ${activeTab === "software" ? styles.active : ""}`}
                onClick={() => setActiveTab("software")}
              >
                Software
              </button>
              <button
                className={`${styles.tab} ${activeTab === "production" ? styles.active : ""}`}
                onClick={() => setActiveTab("production")}
              >
                Production
              </button>
              <button
                className={`${styles.tab} ${activeTab === "operations" ? styles.active : ""}`}
                onClick={() => setActiveTab("operations")}
              >
                Operations
              </button>
            </div>
          </div>

          <div className={styles.jobsList}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  className={styles.jobCard}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className={styles.jobHeader} onClick={() => toggleJob(job.id)}>
                    <div className={styles.jobInfo}>
                      <h3>{job.title}</h3>
                      <div className={styles.jobMeta}>
                        <div className={styles.metaItem}>
                          <Briefcase size={16} />
                          <span>{job.department}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                        <div className={styles.metaItem}>
                          <Clock size={16} />
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className={styles.expandIcon}>
                      {expandedJob === job.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </div>

                  {expandedJob === job.id && (
                    <motion.div
                      className={styles.jobDetails}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className={styles.jobDescription}>{job.description}</p>

                      <div className={styles.jobSection}>
                        <h4>Responsibilities</h4>
                        <ul>
                          {job.responsibilities.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.jobSection}>
                        <h4>Requirements</h4>
                        <ul>
                          {job.requirements.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.applySection}>
                        <Link href={`/careers/apply/${job.id}`} className={styles.applyButton}>
                          Apply Now
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className={styles.noJobs}>
                <h3>No positions found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className={`section ${styles.perksSection}`}>
        <div className="container">
          <h2 className="section-title">Why Work With Us</h2>
          <p className="section-subtitle">
            At 3 SPACE, we offer more than just a job. Join us and be part of a team that's making history.
          </p>

          <div className="grid grid-3">
            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3>Cutting-Edge Technology</h3>
              <p>
                Work with the latest aerospace technologies and contribute to innovations that are pushing the
                boundaries of what's possible in space exploration.
              </p>
            </motion.div>

            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3>Professional Growth</h3>
              <p>
                Continuous learning opportunities, mentorship programs, and a clear career progression path to help you
                reach your full potential.
              </p>
            </motion.div>

            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3>Meaningful Impact</h3>
              <p>
                Be part of a mission that's making a real difference in advancing India's position in the global space
                industry and enabling humanity's future in space.
              </p>
            </motion.div>

            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Comprehensive Benefits</h3>
              <p>
                Competitive salary, health insurance, retirement plans, and additional perks designed to support your
                wellbeing and work-life balance.
              </p>
            </motion.div>

            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3>Collaborative Environment</h3>
              <p>
                Work alongside some of the brightest minds in the industry in a culture that values teamwork,
                innovation, and open communication.
              </p>
            </motion.div>

            <motion.div
              className={styles.perkCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>Flexible Work Arrangements</h3>
              <p>
                We understand the importance of work-life balance and offer flexible scheduling options to help you
                perform at your best.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
