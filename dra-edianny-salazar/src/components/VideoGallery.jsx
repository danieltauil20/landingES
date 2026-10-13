const reelVideos = [
  {
    id: 1,
    title: "Tratamiento de Endodoncia",
    description: "Conoce cómo salvamos tu pieza dental y eliminamos el dolor mediante un procedimiento rápido e indoloro.",
    src: "/videos/endodoncia.mp4",
    tag: "Endodoncia"
  }
];

export default function VideoGallery() {
  return (
    <section className="py-16 bg-slate-50" id="educacion">
      <div className="max-w-6xl mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-12">
          <span className="text-teal-600 font-semibold uppercase tracking-wider text-sm">
            Educación en 30 segundos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mt-2">
            Aprende a Cuidar tu Sonrisa
          </h2>
          <p className="text-slate-600 mt-3 max-w-xl mx-auto">
            Vídeos animados breves para entender tu salud bucodental de forma clara y sencilla.
          </p>
        </div>

        {/* Tarjetas de Vídeos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {reelVideos.map((video) => (
            <div 
              key={video.id} 
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-slate-100 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative aspect-[9/16] bg-slate-900 overflow-hidden">
                <video 
                  controls 
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                >
                  <source src={video.src} type="video/mp4" />
                  Tu navegador no soporta vídeos HTML5.
                </video>
              </div>
              
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 text-xs font-bold rounded-full mb-2">
                    {video.tag}
                  </span>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">
                    {video.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}