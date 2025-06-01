"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';
import '../../styles/components/faqs.css'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from '@/styles/components/FAQ.module.css';

interface FAQ {
  id: number;
  year: string;
  title: string;
  question: string;
  answer: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is 3Space?",
    answer: "3Space is a collaborative platform that brings together space enthusiasts, researchers, and professionals to share knowledge and work on space-related projects."
  },
  {
    question: "How can I join 3Space?",
    answer: "You can join 3Space by creating an account on our platform. Simply click the 'Sign Up' button and follow the registration process."
  },
  {
    question: "What kind of projects can I work on?",
    answer: "3Space hosts a variety of space-related projects, from research initiatives to educational programs and collaborative experiments. Browse our project listings to find something that matches your interests."
  },
  {
    question: "Is 3Space free to use?",
    answer: "Yes, 3Space offers a free tier with basic features. We also have premium plans for users who need advanced features and capabilities."
  },
  {
    question: "How can I contribute to the community?",
    answer: "You can contribute by participating in discussions, sharing your knowledge, joining projects, or starting your own initiatives. We welcome all forms of constructive participation."
  }
];

export default function FAQPage() {
  const [faqs] = useState<FAQ[]>([
    {
      id: 1,
      year: "2024",
      title: "Space Propulsion Systems",
      question: "What are the principles of ion propulsion and how are they applied in deep space missions?",
      answer: "Ion propulsion accelerates ions using electrical fields to create thrust. It's ideal for deep space missions due to high specific impulse and fuel efficiency, used in missions like NASA's Dawn and JAXA's Hayabusa.",
      difficulty: "Advanced",
      category: "Propulsion"
    },
    {
      id: 2,
      year: "2023",
      title: "Orbital Mechanics",
      question: "How do you calculate the delta-v required for a Hohmann transfer from LEO to GEO?",
      answer: "For a Hohmann transfer from LEO (400km) to GEO (35,786km), the total delta-v is approximately 3.8 km/s: 2.5 km/s for transfer orbit insertion and 1.3 km/s for circularization at GEO.",
      difficulty: "Intermediate",
      category: "Orbital Mechanics"
    },
    {
      id: 3,
      year: "2023",
      title: "Spacecraft Materials",
      question: "What are the main challenges in material selection for re-entry vehicles?",
      answer: "Re-entry vehicles face extreme temperatures (1500°C+), thermal shock, and ablation. Materials must balance thermal protection, structural integrity, and weight constraints. Common solutions include carbon-carbon composites and ceramic tiles.",
      difficulty: "Advanced",
      category: "Materials"
    },
    {
      id: 4,
      year: "2022",
      title: "Satellite Communication",
      question: "What are the advantages of Ka-band over Ku-band for satellite communications?",
      answer: "Ka-band (26.5-40 GHz) offers higher bandwidth, smaller antennas, and greater frequency reuse than Ku-band (12-18 GHz), enabling higher data rates. However, it's more susceptible to rain fade and requires more sophisticated signal processing.",
      difficulty: "Intermediate",
      category: "Communications"
    },
    {
      id: 5,
      year: "2024",
      title: "Rocket Engine Design",
      question: "How do liquid and solid rocket engines compare in terms of performance characteristics?",
      answer: "Liquid engines offer throttling capability, restart capability, and higher specific impulse but are more complex. Solid engines are simpler, more reliable, and have instant ignition but cannot be throttled or restarted once ignited.",
      difficulty: "Intermediate",
      category: "Propulsion"
    },
    {
      id: 6,
      year: "2022",
      title: "Aerodynamics",
      question: "What is hypersonic flow and what challenges does it present in vehicle design?",
      answer: "Hypersonic flow (Mach >5) involves complex phenomena like shock-boundary layer interactions, real gas effects, and extreme heating. Design challenges include thermal protection, control surface effectiveness, and structural integrity under intense aerothermal loads.",
      difficulty: "Advanced",
      category: "Aerodynamics"
    },
    {
      id: 7,
      year: "2023",
      title: "Guidance and Control",
      question: "How do inertial navigation systems work in spacecraft?",
      answer: "Inertial navigation uses accelerometers and gyroscopes to track position and orientation without external references. It provides autonomous navigation capability but suffers from drift over time, requiring periodic corrections from other navigation sources.",
      difficulty: "Intermediate",
      category: "Navigation"
    },
    {
      id: 8,
      year: "2024",
      title: "Mission Planning",
      question: "What factors influence the selection of launch windows for interplanetary missions?",
      answer: "Launch windows depend on planetary alignment, energy requirements, mission duration, and arrival conditions. Optimal windows minimize delta-v requirements and occur when planets are favorably positioned, typically every 26 months for Mars missions.",
      difficulty: "Beginner",
      category: "Mission Planning"
    }
  ]);

  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>(faqs);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [yearFilter, setYearFilter] = useState<string>('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    let filtered = faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesYear = !yearFilter || faq.year === yearFilter;
      const matchesDifficulty = !difficultyFilter || faq.difficulty === difficultyFilter;
      const matchesCategory = !categoryFilter || faq.category === categoryFilter;
      
      return matchesSearch && matchesYear && matchesDifficulty && matchesCategory;
    });

    setFilteredFAQs(filtered);
  }, [searchTerm, yearFilter, difficultyFilter, categoryFilter, faqs]);

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setYearFilter('');
    setDifficultyFilter('');
    setCategoryFilter('');
  };

  const uniqueYears = [...new Set(faqs.map(faq => faq.year))].sort().reverse();
  const uniqueCategories = [...new Set(faqs.map(faq => faq.category))].sort();

  return (
    <>
      <Navbar />
      <main>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
            <p className={styles.faqSubtitle}>
              Find answers to common questions about 3Space and our community
            </p>
          </div>

          <div className={styles.faqList}>
            {faqData.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <div
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(index)}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <svg
                    className={`${styles.expandIcon} ${
                      expandedIndex === index ? styles.expanded : ''
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 9L12 16L5 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div
                  className={`${styles.faqAnswer} ${
                    expandedIndex === index ? styles.expanded : ''
                  }`}
                >
                  <p className={styles.answerText}>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}