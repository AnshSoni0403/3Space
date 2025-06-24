"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Search, Filter, X } from 'lucide-react';
import '../../styles/components/faqs.css'; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface FAQ {
  id: number;
  // year: string;
  title: string;
  question: string;
  answer: string;
  // difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
}

export default function FAQPage() {
  const [faqs] = useState<FAQ[]>([
    {
      id: 1,
      // year: "2024",
      title: "Space Propulsion Systems",
      question: "What are the differences between electric, chemical, and nuclear propulsion?",
      answer: "Electric uses electricity to accelerate ions, chemical burns fuel for high thrust, and nuclear uses nuclear reactions for propulsion.",
      // difficulty: "Advanced",
      category: "Propulsion"
    },
    {
      id: 2,
      // year: "2023",
      title: "Orbital Mechanics",
      question: "How do gravitational slingshots (gravity assists) work?",
      answer: "Gravitational slingshots use a planet's gravity and motion to change a spacecraft’s speed and direction without using extra fuel.",
      // difficulty: "Intermediate",
      category: "Orbital Mechanics"
    },
    {
      id: 3,
      // year: "2023",
      title: "Spacecraft Materials",
      question: "What materials are used for thermal protection systems (TPS)?",
      answer: "Thermal protection systems use materials like reinforced carbon-carbon, ablative composites, silica tiles, and ceramic blankets to withstand extreme heat during re-entry.",
      // difficulty: "Advanced",
      category: "Materials"
    },
    {
      id: 4,
      // year: "2022",
      title: "Satellite Communication",
      question: "How is signal delay managed in deep space communication?",
      answer: "Signal delay in deep space communication is managed by using pre-programmed commands, autonomous systems, and time-tagged instructions.",
      // difficulty: "Intermediate",
      category: "Communications"
    },
    {
      id: 5,
      // year: "2024",
      title: "Rocket Engine Design",
      question: "How do liquid and solid rocket engines compare in terms of performance characteristics?",
      answer: "Liquid engines offer throttling capability, restart capability, and higher specific impulse but are more complex. Solid engines are simpler, more reliable, and have instant ignition but cannot be throttled or restarted once ignited.",
      // difficulty: "Intermediate",
      category: "Propulsion"
    },
    {
      id: 6,
      // year: "2022",
      title: "Aerodynamics",
      question: "What is boundary layer transition and how does it affect high-speed flight?",
      answer: "Boundary layer transition is the change from smooth laminar flow to turbulent flow over a surface, increasing skin friction and heat during high-speed flight.",
      // difficulty: "Advanced",
      category: "Aerodynamics"
    },
    {
      id: 7,
      // year: "2023",
      title: "Guidance and Control",
      question: "What is the difference between open-loop and closed-loop guidance?",
      answer: "Open-loop guidance follows a preset path without feedback, while closed-loop guidance uses real-time data to adjust the trajectory.",
      // difficulty: "Intermediate",
      category: "Navigation"
    },
    {
      id: 8,
      // year: "2024",
      title: "Mission Planning",
      question: "What is a planetary launch window and how is it calculated?",
      answer: "A planetary launch window is the optimal time to launch a spacecraft for minimal energy use, calculated based on planetary alignments and orbital mechanics.",
      // difficulty: "Beginner",
      category: "Mission Planning"
    }
  ]);

  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>(faqs);
  const [searchTerm, setSearchTerm] = useState<string>('');
  // const [yearFilter, setYearFilter] = useState<string>('');
  // const [difficultyFilter, setDifficultyFilter] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    let filtered = faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      // const matchesYear = !yearFilter || faq.year === yearFilter;
      // const matchesDifficulty = !difficultyFilter || faq.difficulty === difficultyFilter;
      const matchesCategory = !categoryFilter || faq.category === categoryFilter;
      
      return matchesSearch && matchesCategory;
    });

    setFilteredFAQs(filtered);
  }, [searchTerm, categoryFilter, faqs]);
  //yearFilter, difficultyFilter

  const toggleExpanded = (id: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const clearFilters = () => {
    setSearchTerm('');
    // setYearFilter('');
    // setDifficultyFilter('');
    setCategoryFilter('');
  };

  const toggleFilterPopup = () => {
    setIsFilterPopupOpen(!isFilterPopupOpen);
  };

  // const uniqueYears = [...new Set(faqs.map(faq => faq.year))].sort().reverse();
  const uniqueCategories = [...new Set(faqs.map(faq => faq.category))].sort();

  return (
    <>
      <Navbar />
      <main>
        <div className="faqs-container">
          <header className="faqs-header">
            <h1>Frequently Asked Questions</h1>
            <p className="faqs-subtitle">Aerospace Engineering</p>
          </header>

          {/* <div className="search-section">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div> */}

          <div className="filters-section">
            <div className="filters-grid">
              {/* <select
                value={yearFilter}
                onChange={(e) => setYearFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Years</option>
                {uniqueYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select> */}

              {/* <select
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Difficulties</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select> */}

              {/* <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="filter-select"
              >
                <option value="">All Categories</option>
                {uniqueCategories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <button onClick={clearFilters} className="clear-filters-btn">
                <Filter size={18} />
                Clear Filters
              </button> */}
            </div>
          </div>

          <div className="stats-section">
            {/* <div className="stat-card">
              <span className="stat-number">{faqs.length}</span>
              <span className="stat-label">Total FAQs</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{filteredFAQs.length}</span>
              <span className="stat-label">Showing</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">{expandedItems.size}</span>
              <span className="stat-label">Expanded</span>
            </div> */}
          </div>

          <div className="faqs-list">
            {filteredFAQs.length === 0 ? (
              <div className="no-results">
                <p>No FAQs match your search criteria.</p>
                <button onClick={clearFilters} className="clear-filters-btn">
                  Clear all filters
                </button>
              </div>
            ) : (
              filteredFAQs.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <div className="faq-header" onClick={() => toggleExpanded(faq.id)}>
                    <div className="faq-meta">
                      {/* <span className="year-badge">{faq.year}</span>
                      <span className={`difficulty-badge difficulty-${faq.difficulty.toLowerCase()}`}>
                        {faq.difficulty}
                      </span> */}
                      <span className="category-badge">{faq.category}</span>
                    </div>
                    <div className="faq-question-section">
                      <h3 className="faq-title">{faq.title}</h3>
                      <p className="faq-question">{faq.question}</p>
                    </div>
                    <button className="expand-btn">
                      {expandedItems.has(faq.id) ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                  </div>
                  
                  {expandedItems.has(faq.id) && (
                    <div className="faq-answer">
                      <div className="answer-label">Answer</div>
                      <p className="answer-text">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Floating Filter Button */}
          <button 
            className="floating-filter-btn" 
            onClick={toggleFilterPopup}
            aria-label="Open filters"
          >
            <Filter size={20} />
          </button>

          {/* Filter Popup */}
          {isFilterPopupOpen && (
            <div className="filter-popup-overlay" onClick={toggleFilterPopup}>
              <div className="filter-popup" onClick={(e) => e.stopPropagation()}>
                <div className="filter-popup-header">
                  <h3>Filters</h3>
                  <button 
                    className="filter-popup-close"
                    onClick={toggleFilterPopup}
                    aria-label="Close filters"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="filter-popup-content">
                  <div className="filter-group">
                    <label htmlFor="popup-search">Search</label>
                    <div className="popup-search-box">
                      <Search className="popup-search-icon" size={16} />
                      <input
                        id="popup-search"
                        type="text"
                        placeholder="Search FAQs..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="popup-search-input"
                      />
                    </div>
                  </div>

                  <div className="filter-group">
                    <label htmlFor="popup-category">Category</label>
                    <select
                      id="popup-category"
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                      className="filter-select"
                    >
                      <option value="">All Categories</option>
                      {uniqueCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div className="filter-popup-actions">
                    <button onClick={clearFilters} className="clear-filters-btn">
                      Clear Filters
                    </button>
                    <button onClick={toggleFilterPopup} className="apply-filters-btn">
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}