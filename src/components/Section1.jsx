export default function Head() {
  return (
    <header className="relative h-[85vh] flex items-center justify-center text-white">
      {/* Background avec image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Overlay sombre */}
      </div>

      {/* Contenu */}
      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Texte de présentation */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-600 bg-clip-text text-transparent">
            Développement Logiciel & Web
          </h1>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            Innover avec le numérique
          </h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-gray-200">
            Créez des solutions modernes et performantes pour le web et les applications.
            Transformez vos idées en expériences numériques uniques.
          </p>
          <a
            href="https://developer.mozilla.org/fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-indigo-500 to-pink-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:opacity-90 transition">
              Découvrir plus
            </button>
          </a>
        </div>

        {/* Illustration */}
        <div className="mt-8 md:mt-0 text-center">
          <img
            src="https://img.icons8.com/ios-filled/200/ffffff/laptop-coding.png"
            alt="Icône Développement"
            className="mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
}
