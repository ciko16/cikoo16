"use client";
import { useState } from "react";
import ParticlesBackground from "./component/particles";
import { useEffect, useRef } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("hero");
  const audioRef = useRef(null);
  //const [isPlaying, setIsPlaying] = useState(false);

  // const toggleAudio = () => {
  //   const audio = audioRef.current;
  //   if (audio.paused) {
  //     audio.play();
  //     setIsPlaying(true);
  //   } else {
  //     audio.pause();
  //     setIsPlaying(false);
  //   }
  // };

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

  const tabs = [
    { id: "hero", label: "Hero" },
    { id: "qualification", label: "🎓 Qualification" },
    { id: "skills", label: "🛠 Skills" },
  ];

  return (
<main className="relative flex flex-col items-center justify-start min-h-screen px-4 py-10 bg-gradient-to-b from-gray-800 to-black text-white">
      {/* Background particles */}
      <ParticlesBackground />

      {/*Audio element */}
      <audio ref={audioRef} volume={0.3}>
        <source src="/audio/midnight-forest.mp3" type="audio/mpeg" />
      </audio>

      {/* Profile photo */}
      <img
        src="/ciko16.jpg"
        alt="foto profil"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto rounded-full mb-6 shadow-lg object-cover z-10 relative"
      />

      {/*Audio toggle */}
      {/* <button onClick={toggleAudio} className="z-20 relative bg-white text-black px-4 py-2 rounded-full">
        {isPlaying ? "Pause Audio" : "Play Audio"}
      </button> */}

      {/* Tabs */}
      <div className="flex space-x-4 mb-8 z-10 relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded font-medium transition-colors duration-300 ${
              activeTab === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Halo, nama saya Muhammad Chicco Ramadhan.
            </h1>
            <p className="text-lg mb-6">
              Saya adalah Quality Assurance Engineer yang passionate tentang teknologi dan pengembangan perangkat lunak.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a href="mailto:muhammadchikor7@gmail.com?subject=Hello&body=Halo%20Chicco,%20saya%20tertarik%20dengan%20portofoliomu.">
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

        {activeTab === "qualification" && (
          <section className="px-4">
            <h2 className="text-2xl font-semibold mb-4">🎓 Qualification</h2>
            <ul className="list-disc list-inside text-left space-y-2">
              <li>Applied Bachelor in Informatics Engineering, GPA: 3.42 - Polytechnic of Caltex Riau</li>
            </ul>
          </section>
        )}

        {activeTab === "skills" && (
          <section className="px-4">
            <h2 className="text-2xl font-semibold mb-4">🛠 Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-gray-100 p-4 rounded text-center">Manual Testing</div>
              {/* Tambahkan skill lainnya di sini */}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
