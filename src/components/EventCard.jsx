
export default function EventCard({ event }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
      {/* Zone Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={event.image || "https://unsplash.com"} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-indigo-600 shadow-sm">
          {event.price > 0 ? `${event.price}fcfa` : "Gratuit"}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded">
            {event.category}
          </span>
          <span className="text-gray-400 text-xs italic">
            {event.capacity ? `${event.capacity} places` : "Illimité"}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 group-hover:text-indigo-600 transition-colors">
          {event.title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {event.description}
        </p>

        <div className="flex flex-col gap-1 text-xs text-gray-500 font-medium">
          <div className="flex items-center gap-2">📅 {event.date}</div>
          <div className="flex items-center gap-2">📍 {event.location}</div>
        </div>
      </div>
    </div>
  );
}
