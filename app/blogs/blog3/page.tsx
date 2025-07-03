import React from 'react';

const Blog3 = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text text-transparent leading-tight">
              Axiom-4 Mission
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              India's Grand Return to Space
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Featured Image */}
        <div className="relative mb-16 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          <div className="relative overflow-hidden rounded-2xl border border-gray-800/50 shadow-2xl">
            <img 
              src="/images/Blogs/axiom4.jpg" 
              alt="Axiom-4 Mission Launch" 
              className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm text-gray-300 font-medium">Axiom-4 Mission Launch - June 25, 2025</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg prose-invert max-w-none">
          
          {/* Opening paragraph with special styling */}
          <div className="relative mb-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20 backdrop-blur-sm">
            <div className="absolute top-4 left-4 w-1 h-16 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full"></div>
            <p className="text-lg md:text-xl leading-relaxed text-gray-100 ml-6">
              It was on June 25, 2025, that the world saw one of the most significant moments in space history when Axiom Space sent its fourth private crewed mission, Axiom-4 (Ax-4), to the International Space Station (ISS). This mission not only advanced Axiom's ambitious project of commercializing low-Earth orbit but also bore with it the aspirations of more than a billion Indians. On board the Crew Dragon spacecraft, under the control of SpaceX's Falcon 9 rocket, was Group Captain Shubhanshu Shukla, who made history by becoming the first Indian to step on the ISS.
            </p>
          </div>

          {/* ISS Image */}
          <div className="relative mb-12 group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl border border-gray-800/50 shadow-2xl">
              <img 
                src="/images/Blogs/iss-station.jpg" 
                alt="International Space Station" 
                className="w-full h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-sm text-gray-300 font-medium">International Space Station - Destination of Axiom-4</p>
              </div>
            </div>
          </div>

          {/* Regular content paragraphs */}
          <div className="space-y-8">
            <p className="text-gray-300 leading-relaxed">
              But Axiom-4 is so much more than a national moment of pride. It was a significant step in the transformation of the global space industry from government-supported missions towards commercial and collaborative efforts. Axiom Space, a private US-based spaceflight company, has been at the forefront of making such missions possible through its vision of establishing the first commercial space station. Ax-4 is an extension of that vision — intended to accelerate scientific inquiry, global collaboration, and the expanding potential of low-Earth orbit as a place for innovation and industry.
            </p>

            <p className="text-gray-300 leading-relaxed">
              The crew of the mission is made up of four astronauts from various nations and institutions, carefully chosen for their experience, scientific acumen, and role in international space objectives. India's Shubhanshu Shukla was not chosen by ISRO but through collaboration with Axiom Space. With him came a decade of experience as an Indian Air Force test pilot, extensive training for deep space on the ISRO's Gaganyaan program, and a fervent enthusiasm to take India's footprint further into the universe.
            </p>

            {/* Mission Video */}
            <div className="relative mb-12 group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/50 shadow-2xl">
                <video 
                  controls 
                  className="w-full h-[350px] md:h-[400px] object-cover bg-black"
                  poster="/images/Blogs/mission-video-poster.jpg"
                >
                  <source src="/videos/Blogs/axiom4-mission.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-gray-300 font-medium">Axiom-4 Mission Overview</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              The Axiom-4 mission is scheduled for a 14-day trip on the ISS, where the astronauts are performing an array of cutting-edge experiments. These include research into muscle atrophy in microgravity, a key topic with missions by space agencies underway to lengthier trips to the Moon and Mars. The team is also researching biological resilience, plant development, and micro-algae cultivation — all fields that have applicability both to space sustainability and to addressing issues on Earth such as food security and health in extreme environments.
            </p>

            {/* Highlighted section */}
            <div className="relative p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 backdrop-blur-sm">
              <div className="absolute top-3 left-3 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <p className="text-gray-200 leading-relaxed font-medium">
                What is unique about Ax-4 is the magnitude and variance of its research agenda. Over 60 experiments from 31 nations are being performed in this mission, one of the most scientifically demanding private spaceflights ever. Not only are these experiments being sponsored by space agencies, but also by universities, biotechnology companies, and innovation laboratories, illustrating a trend to democratize access to space research.
              </p>
            </div>

            <p className="text-gray-300 leading-relaxed">
              The launch itself was a picture-perfect show of SpaceX's now commonplace but still breathtaking technology. The Falcon 9 rocket took off from Kennedy Space Center in Florida, delivering the Crew Dragon capsule into orbit. Within 24 hours of the launch, the capsule docked successfully with the ISS, where the crew was greeted by astronauts who were already on board. The mission is being tracked by NASA and manned by ground control teams from different countries.
            </p>

            {/* Crew Image */}
            <div className="relative mb-12 group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="relative overflow-hidden rounded-2xl border border-gray-800/50 shadow-2xl">
                <img 
                  src="/images/Blogs/shubhanshu-crew.jpg" 
                  alt="Group Captain Shubhanshu Shukla and Axiom-4 Crew" 
                  className="w-full h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-sm text-gray-300 font-medium">Group Captain Shubhanshu Shukla and the Axiom-4 Crew</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              For India, Shubhanshu Shukla's place in this mission is symbolically significant. He might not be on board ISRO's Gaganyaan launch yet, but his contribution to an international mission demonstrates the nation's willingness to join the global space community. It also provides ISRO with a rich foresight of how Indian astronauts can work together in multinational environments, handle scientific duties on the ISS, and add to sophisticated research in real-time.
            </p>

            <p className="text-gray-300 leading-relaxed">
              The Ax-4 mission also points toward the future of space exploration — one that is commercial, collaborative, and continuous. It is not merely about getting to space; it's about remaining there, working there, and making it a frontier for science, commerce, and diplomacy.
            </p>

            {/* Closing section */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-500/20 backdrop-blur-sm">
              <div className="absolute top-4 right-4 w-1 h-16 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full"></div>
              <p className="text-gray-100 leading-relaxed text-lg mr-6">
                As Shukla sent his inaugural message from the ISS, a warm "Namaskar" to planet Earth. It was more than a salutation. It was an indication that India is not on the sidelines observing space missions anymore. It is joining in, giving back, and writing its own script. The success of Axiom-4 provides a window into a future where borders melt away in light years and humanity progresses together among the stars.
              </p>
            </div>

            <p className="text-xl text-center text-gray-200 font-semibold mt-12 mb-8">
              India's return to space has started — not with one step, but as one of a multitude of steps into a common cosmic future.
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-pink-400 rounded-full animate-pulse opacity-50"></div>
      </div>
    </div>
  );
};

export default Blog3; 