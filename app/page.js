"use client";
import { useState, useEffect, useRef } from "react";
import ParticlesBackground from "./component/particles";
import Qualification from "./tabs/qualification";
import Skills from "./tabs/skills";
import Footer from "./component/footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("hero");
  const audioRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // autoplay ketika diklik
    const handleUserInteraction = () => {
      if (audioRef.current && audioRef.current.paused){
        audioRef.current.play().catch((e) => console.log("Autoplay blocked:", e))
      }
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const tabs = [
    { id: "hero", label: "Hero" },
    { id: "qualification", label: "🎓 Qualification" },
    { id: "skills", label: "🛠 Skills" },
  ];

  return (
<main className="relative flex flex-col items-center justify-start min-h-screen px-4 py-10 bg-gradient-to-b from-gray-800 to-black text-white">
      {/* Background particles */}
      <ParticlesBackground />

      <div className="absolute top-4 right-4 z-50">
        <button
        onClick={() => setIsMuted(!isMuted)}
        className="bg-black bg-opacity-60 text-white px-3 py-2 rounded-full shadow hover:bg-opacity-80 transition"
        title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <span role="Image" aria-label="muted">🔇</span>
          ) : (
            <span role="Image" aria-label="playing">🔊</span>
          )}
        </button>
      </div>

      {/*Audio element */}
      <audio ref={audioRef} volume={0.3}>
        <source src="/audio/midnight-forest.mp3" type="audio/mpeg" />
      </audio>

      {/* Profile photo */} 
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto rounded-full mb-6 shadow-lg overflow-hidden group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(!hovered)} /* Mobile: tap to toggle*/
      >
      <img
        src="/ciko1612.png"
        alt="foto profil"
        className={`w-full h-full object-cover rounded-full transition-opacity duration-300 ${
          hovered ? "opacity-0" : "opacity-100"
        }`}
      />

      {/*Foto Hover*/}
      <img
        src="/cikoavatar.png"
        alt="foto profil hover"
        className={`w-full h-full object-cover rounded-full absolute top-0 left-0 opacity-0 transition-opacity duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />
      </div>

      

      {/* Tabs */}
      <div className="flex space-x-4 mb-8 z-10 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded font-medium transition-colors duration-300 ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-900 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="w-full max-w-3xl z-10 relative">
        {activeTab === "hero" && (
          <section className="text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-typing highlight">
              Halo, nama saya Muhammad Chicco Ramadhan.
            </h1>
            <p className="text-lg mb-6">
              Saya adalah Quality Assurance Engineer yang passionate tentang teknologi dan pengembangan perangkat lunak.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a href="mailto:muhammadchikor7@gmail.com?subject=Hello&body=Hello%20Chicco,%20I'm%20interested%20with%20your%20portfolio.">
                <button className="w-full sm:w-auto flex items-center justify-center bg-[#4169E1] text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-medium hover:bg-[#02066f] transition duration-300">
                  Contact me
                </button>
              </a>
              <button className="w-full sm:w-auto flex items-center justify-center bg-gray-900 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full font-medium hover:bg-gray-800 transition duration-300">
                Download CV
              </button>
            </div>
          </section>
        )}

        {activeTab === "qualification" && <Qualification />}
        {activeTab === "skills" && <Skills />}
      </div>

      <Footer />
    </main>
  );
}
