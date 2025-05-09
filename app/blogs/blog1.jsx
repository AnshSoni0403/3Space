import React, { useEffect } from 'react';
import './blog1.css'; // Importing the dark theme CSS

const BlogIndiaRocketJourney = () => {
  // Function to create starry background
  useEffect(() => {
    const createStars = () => {
      const starsContainer = document.createElement('div');
      starsContainer.className = 'stars';
      
      // Create 100 stars with random positions and properties
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        // Random position
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration and delay
        const duration = `${Math.random() * 3 + 2}s`;
        star.style.setProperty('--duration', duration);
        star.style.animationDelay = `${Math.random() * 3}s`;
        
        // Random opacity
        const opacity = Math.random() * 0.7 + 0.3;
        star.style.setProperty('--opacity', opacity);
        
        starsContainer.appendChild(star);
      }
      
      document.body.appendChild(starsContainer);
    };
    
    // Create loading screen
    const createLoadingScreen = () => {
      const loadingScreen = document.createElement('div');
      loadingScreen.className = 'loading-screen';
      
      const rocketLoader = document.createElement('div');
      rocketLoader.className = 'rocket-loader';
      
      const rocket = document.createElement('div');
      rocket.className = 'rocket';
      
      rocketLoader.appendChild(rocket);
      loadingScreen.appendChild(rocketLoader);
      document.body.appendChild(loadingScreen);
    };
    
    createStars();
    createLoadingScreen();
    
    return () => {
      // Cleanup function
      const stars = document.querySelector('.stars');
      const loadingScreen = document.querySelector('.loading-screen');
      if (stars) document.body.removeChild(stars);
      if (loadingScreen) document.body.removeChild(loadingScreen);
    };
  }, []);

  return (
    <div className="blog-container">
      <h1 className="blog-title">From Fire Arrows to the Moon: India's Rocket Journey Through Time</h1>
      <p className="blog-subtitle">Ever looked up at the sky and wondered, "How did we get from simple fireworks to rockets landing on the Moon?"</p>
      
      <div className="blog-section">
        <h2>Chapter 1: The Ancient Spark – When Imagination Took Flight</h2>
        <p>
          India has always been a land of imagination. Long before we built rockets, our ancient epics like the Ramayana and Mahabharata were already talking about flying chariots (Vimanas) and celestial weapons (Astras). These mythological narratives planted the seeds of aerospace innovation in Indian culture centuries before modern technology made it possible.
        </p>
        <div className="image-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Vimana_India_mythology.jpg/640px-Vimana_India_mythology.jpg" 
            alt="Ancient Vimana" 
            className="blog-image" 
          />
          <div className="image-caption">Ancient depiction of a Vimana from Indian mythology, often described as flying palaces or chariots</div>
        </div>
      </div>
      
      <div className="blog-section">
        <h2>Chapter 2: Tipu Sultan – The Real-Life Rocket Warrior</h2>
        <p>
          While European powers were still experimenting with basic gunpowder, Tipu Sultan, the ruler of Mysore, had already mastered rocket technology. His iron-cased Mysorean rockets could travel up to 2 kilometers and became a formidable weapon against British forces. These innovative war machines later inspired the British to develop their own Congreve rockets, marking India's first significant contribution to modern rocketry.
        </p>
        <div className="image-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Mysorean_rocket.jpg/640px-Mysorean_rocket.jpg" 
            alt="Mysorean Rocket" 
            className="blog-image" 
          />
          <div className="image-caption">A preserved Mysorean rocket from the late 18th century, showcasing India's early mastery of rocket technology</div>
        </div>
      </div>
      
      <div className="blog-section">
        <h2>Chapter 3: A Nation Reborn – From Bullock Carts to Launch Pads</h2>
        <p>
          The story of modern Indian rocketry began with a humble launch in 1963, when components of the first rocket were transported to Thumba, Kerala, using bullock carts and bicycles. This symbolic journey from traditional transportation to cutting-edge space technology represented India's determination to become self-reliant in space exploration despite limited resources and infrastructure.
        </p>
        <div className="image-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/88/Thumba_equatorial_rocket_launching_station_%28TERLS%29.jpg" 
            alt="Thumba Launch" 
            className="blog-image" 
          />
          <div className="image-caption">The historic Thumba Equatorial Rocket Launching Station (TERLS), birthplace of India's space program</div>
        </div>
      </div>
      
      <div className="blog-section">
        <h2>Chapter 4: ISRO – India's Ticket to Space</h2>
        <p>
          Founded in 1969, the Indian Space Research Organisation (ISRO) transformed from a fledgling space agency into a global powerhouse. The journey included developing indigenous launch vehicles like the Satellite Launch Vehicle (SLV), Polar Satellite Launch Vehicle (PSLV), Geosynchronous Satellite Launch Vehicle (GSLV), and Small Satellite Launch Vehicle (SSLV). Each represented a leap in capability, allowing India to launch increasingly complex missions with greater efficiency and reliability.
        </p>
        <div className="image-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/b4/ISRO_Logo.png" 
            alt="ISRO Logo" 
            className="blog-image" 
          />
          <div className="image-caption">The emblem of ISRO, representing India's aspirations in space exploration and technology</div>
        </div>
      </div>
      
      <div className="blog-section">
        <h2>Chapter 5: Big Leaps, Bold Dreams – India in the Space Race</h2>
        <p>
          India's space program has achieved milestones that once seemed impossible for a developing nation:
        </p>
        <ul className="timeline">
          <li className="timeline-item">
            <span className="timeline-year">2008</span>
            Chandrayaan-1 discovered water molecules on the Moon, revolutionizing our understanding of lunar geology
          </li>
          <li className="timeline-item">
            <span className="timeline-year">2013</span>
            Mangalyaan reached Mars orbit on its first attempt—a feat no other space agency had accomplished
          </li>
          <li className="timeline-item">
            <span className="timeline-year">2019</span>
            Mission Shakti demonstrated anti-satellite capabilities, establishing India as a space defense power
          </li>
          <li className="timeline-item">
            <span className="timeline-year">2023</span>
            Chandrayaan-3 successfully landed near the lunar south pole, making India the first nation to reach this strategic location
          </li>
        </ul>
        <div className="image-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Chandrayaan-3_lander_Vikram_captured_by_Pragyan_rover.jpg" 
            alt="Chandrayaan-3" 
            className="blog-image" 
          />
          <div className="image-caption">Historic image of Chandrayaan-3's Vikram lander on the lunar surface, captured by the Pragyan rover</div>
        </div>
      </div>
      
      <div className="blog-section">
        <h2>Chapter 6: The Future is Now</h2>
        <p>
          India's space ambitions continue to evolve with the Gaganyaan mission aiming to send Indian astronauts to space. Meanwhile, private entities like Skyroot Aerospace with their Vikram-S rocket and Agnikul Cosmos with their Agnibaan launch vehicle are spearheading a new era of commercial space exploration. The future promises unprecedented collaboration between government agencies and private innovators, potentially making space more accessible than ever before.
        </p>
        <div className="image-container">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Gaganyaan_spacecraft.jpg/640px-Gaganyaan_spacecraft.jpg" 
            alt="Gaganyaan spacecraft" 
            className="blog-image" 
          />
          <div className="image-caption">Artist's impression of the Gaganyaan spacecraft, which will carry Indian astronauts to space</div>
        </div>
      </div>
      
      <div className="blog-section">
        <h2>Final Thoughts</h2>
        <p>
          From Tipu Sultan's iron-cased rockets to landing on the lunar south pole, India's rocket journey represents a remarkable fusion of ancient wisdom and modern scientific prowess. Each milestone achieved wasn't just a technical triumph but a testament to the nation's resilience, innovation, and unwavering vision. As we look to the stars, the story of Indian rocketry reminds us that with determination and ingenuity, the sky is not the limit—it's just the beginning.
        </p>
      </div>
    </div>
  );
};

export default BlogIndiaRocketJourney;