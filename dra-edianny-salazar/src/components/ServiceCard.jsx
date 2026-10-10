export function ServiceCard({ icon, title, category, description, features, highlighted = false }) {
  return (
    <div className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-2 hover:shadow-2xl ${
      highlighted 
        ? 'bg-gradient-to-br from-slate-900 via-cyan-950 to-slate-900 text-white border-2 border-cyan-500/40 shadow-xl shadow-cyan-950/30' 
        : 'bg-white text-slate-800 border border-slate-200/90 shadow-sm hover:border-cyan-400'
    }`}>
      
      <div>
        {/* Cabecera de la tarjeta: Badge + Icono colorido */}
        <div className="flex items-center justify-between mb-6">
          <span className={`text-[11px] font-extrabold tracking-widest uppercase px-3.5 py-1.5 rounded-full ${
            highlighted 
              ? 'bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-black shadow-sm' 
              : 'bg-cyan-100/80 text-cyan-800 border border-cyan-200/60'
          }`}>
            {category}
          </span>

          <div className={`w-13 h-13 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 shadow-sm ${
            highlighted 
              ? 'bg-gradient-to-tr from-cyan-500 to-teal-300 text-slate-950' 
              : 'bg-gradient-to-br from-cyan-50 to-teal-50 text-cyan-600 group-hover:from-cyan-600 group-hover:to-teal-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-cyan-600/30'
          }`}>
            <i className={icon}></i>
          </div>
        </div>

        {/* Título y Descripción */}
        <h3 className={`text-xl font-bold font-montserrat mb-3 ${highlighted ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h3>
        <p className={`text-sm leading-relaxed mb-6 ${highlighted ? 'text-cyan-100/90' : 'text-slate-600'}`}>
          {description}
        </p>

        {/* Viñetas de características con iconos en verde esmeralda / cian */}
        {features && (
          <ul className={`space-y-2.5 pt-6 border-t text-xs font-semibold mb-8 ${
            highlighted ? 'border-cyan-800/60 text-slate-200' : 'border-slate-100 text-slate-600'
          }`}>
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-2.5">
                <i className={`fa-solid fa-circle-check text-sm ${
                  highlighted ? 'text-cyan-400' : 'text-teal-500'
                }`}></i>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Botón interactivo de llamada a la acción */}
      <a
        href="#contacto"
        className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold font-montserrat transition-all duration-300 text-center flex items-center justify-center space-x-2 ${
          highlighted 
            ? 'bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 text-slate-950 shadow-md shadow-cyan-400/20' 
            : 'bg-slate-100 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-teal-600 hover:text-white text-slate-700 shadow-none hover:shadow-lg hover:shadow-cyan-600/25'
        }`}
      >
        <span>Consultar Tratamiento</span>
        <i className="fa-solid fa-arrow-right text-[10px]"></i>
      </a>

    </div>
  );
}