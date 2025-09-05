export default function Apropos() {
  return (
    <section className="container mx-auto px-4 py-12 font-sans">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            alt="Laptop de développeur"
            className="rounded-2xl shadow-xl w-full max-w-xs md:max-w-sm lg:max-w-md object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            À propos
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Informations
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit esse voluptatum illo mollitia ad animi eius similique expedita ut eos.
          </p>

          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8">
            <li><span className="font-medium">Nom :</span> ANDRIAMIRADO TOLOJANAHARY DAYAN</li>
            <li><span className="font-medium">Adresse :</span> <em>Tananarive</em>, Madagascar</li>
            <li><span className="font-medium">Contact :</span> 038 86 822 67</li>
            <li><span className="font-medium">Disponibilité :</span> 6/7 jours</li>
            <li>Travail dynamique et motivé</li>
          </ul>

          <p className="text-gray-700 leading-relaxed text-lg">
            <span className="font-semibold">Information :</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eos nemo praesentium eum doloremque consequuntur magnam libero itaque eius esse !
            Tempora facilis reprehenderit adipisci, ipsa tenetur cumque qui quod, est dignissimos quo,
            sapiente nesciunt saepe assumenda labore inventore animi eveniet fugit ?
          </p>
        </div>
      </div>
    </section>
  );
}
