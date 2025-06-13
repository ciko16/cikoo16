<div className="w-full px-4 sm:px-6 lg:px-12 py-8">
  <main className="flex flex-col md:flex-row items-start justify-center gap-12 max-w-7xl mx-auto">
    {/* Kiri: Foto & Tabs */}
    <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
      <img
        src="/ciko16.jpg"
        alt="foto profil"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full mb-6 shadow-lg object-cover"
      />

      <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
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
    </div>

    {/* Kanan: Konten */}
    <div className="w-full md:w-2/3">
      {activeTab === "hero" && (
        <section>
          <h1 className="text-3xl font-bold mb-4">
            Halo, nama saya Muhammad Chicco Ramadhan.
          </h1>
          <p className="text-lg mb-6">
            Saya adalah Quality Assurance Engineer yang passionate tentang teknologi dan pengembangan perangkat lunak.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a href="mailto:muhammadchikor7@gmail.com?subject=Hello&body=Halo%20Chicco,%20saya%20tertarik%20dengan%20portofoliomu.">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition duration-300">
                Contact me
              </button>
            </a>
            <button className="bg-gray-900 text-white py-2 px-4 rounded-full hover:bg-gray-800 transition duration-300">
              Download CV
            </button>
          </div>
        </section>
      )}

      {activeTab === "qualification" && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">🎓 Qualification</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Applied Bachelor in Informatics Engineering, GPA: 3.42 - Polytechnic of Caltex Riau</li>
          </ul>
        </section>
      )}

      {activeTab === "skills" && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">🛠 Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded text-center text-black">Manual Testing</div>
            {/* Tambahkan skill lainnya */}
          </div>
        </section>
      )}
    </div>
  </main>
</div>
