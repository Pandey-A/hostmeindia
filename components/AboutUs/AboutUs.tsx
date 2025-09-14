"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Flying from "../../public/images/Flying.jpg";
import Travel from "../../public/images/Travel.jpg";

// Define the transition effect for fade-in with slight movement
// const fadeInUp = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
// };

const AboutUs = () => {
  return (
    <motion.section
      id="about_us"
      className="relative flex items-center py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-cyan-200 to-cyan-100 rounded-3xl shadow-xl overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }} // Triggers when the section comes into view
    >
      <div className="flex flex-col lg:flex-row items-center w-full space-y-12 lg:space-y-0 lg:space-x-12">
        {/* About Text Section with animation */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-6"
     
        >
          <h2 className="text-4xl font-extrabold text-green1 tracking-tight leading-tight">
            About Us
          </h2>
          <p className="text-lg text-green1 leading-relaxed">
            At <span className="font-semibold">HostmenIndia</span>, we take travelers off the beaten path. 
            We specialize in rural tourism, adventure escapes, dark tourism, and wellness retreats — 
            curating immersive experiences that blend culture, nature, and storytelling.
          </p>
          <p className="text-lg text-green1 leading-relaxed">
            We are not just a travel company — we are your hosts to India’s hidden wonders.
          </p>

          <h3 className="text-2xl font-bold text-green1 mt-6">✨ What We Offer</h3>
          <ul className="list-disc list-inside space-y-2 text-lg text-green1 leading-relaxed">
            <li>
              <span className="font-semibold">Spiritual Tourism:</span> From sacred temple towns to mythological landscapes, 
              we design pilgrimages with depth, connecting travelers with India’s spiritual fabric.
            </li>
            <li>
              <span className="font-semibold">Offbeat Itineraries:</span> Discover forgotten trails, ancient temples, and serene landscapes.
            </li>
            <li>
              <span className="font-semibold">Immersive Experiences:</span> Stargazing nights, riverbank lunches, jungle safaris, and cultural exchanges.
            </li>
            <li>
              <span className="font-semibold">Sustainable Travel:</span> Respect for communities, culture, and the environment at every step.
            </li>
            <li>
              <span className="font-semibold">Tailor-Made Journeys:</span> Flexible plans designed to fit your way of travel.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-green1 mt-6">🌿 Our Philosophy</h3>
          <p className="text-lg text-green1 leading-relaxed">
            Travel with us is not about ticking boxes — it’s about living stories.  
            Every itinerary we design carries a soul: history, mythology, folklore, or the pure magic of nature.
          </p>
        </motion.div>

        {/* Image Section with animation */}
        <motion.div
          className="lg:w-1/2 flex justify-center gap-6"
      
        >
          {/* First Image */}
          <div className="relative group transform hover:scale-105 transition-all duration-300">
            <Image
              className="rounded-2xl shadow-lg"
              src={Flying}
              alt="Flying"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity"></div>
          </div>

          {/* Second Image */}
          <div className="relative group transform hover:scale-105 transition-all duration-300">
            <Image
              className="rounded-2xl shadow-lg"
              src={Travel}
              alt="Travel"
              width={400}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity"></div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
