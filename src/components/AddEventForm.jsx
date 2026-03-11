// src/components/AddEventForm.jsx
import { useState } from 'react';

export default function AddEventForm({ onAdd }) {
  const [form, setForm] = useState({
    title: '', date: '', location: '', category: 'Tech',
    description: '', price: 0, capacity: '', image: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...form, id: Date.now() });
    setForm({ title: '', date: '', location: '', category: 'Tech', description: '', price: 0, capacity: '', image: '' });
  };

  return (
    <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-sm mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Créer une expérience</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Titre & Date */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Nom de l'événement</label>
            <input required className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              value={form.title} onChange={e => setForm({...form, title: e.target.value})} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Date</label>
            <input type="date" required className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.date} onChange={e => setForm({...form, date: e.target.value})} />
          </div>

          {/* Image URL & Lieu */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Lien de l'image (URL)</label>
            <input placeholder="https://..." className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.image} onChange={e => setForm({...form, image: e.target.value})} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Lieu</label>
            <input placeholder="Paris, Remote..." className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.location} onChange={e => setForm({...form, location: e.target.value})} />
          </div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Description détaillée</label>
          <textarea rows="3" className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
            value={form.description} onChange={e => setForm({...form, description: e.target.value})}></textarea>
        </div>

        {/* Prix & Capacité */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Prix (€)</label>
            <input type="number" className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.price} onChange={e => setForm({...form, price: e.target.value})} />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Capacité</label>
            <input type="number" placeholder="100" className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 outline-none"
              value={form.capacity} onChange={e => setForm({...form, capacity: e.target.value})} />
          </div>
        </div>

        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all active:scale-[0.98]">
          Publier l'événement
        </button>
      </form>
    </div>
  );
}
