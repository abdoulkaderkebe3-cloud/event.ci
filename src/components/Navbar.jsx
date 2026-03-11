import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, login, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">E</div>
          <span className="text-xl font-bold tracking-tight text-gray-900">Evently</span>
        </div>
        
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-gray-600">Salut, <span className="font-semibold text-gray-900">{user.name}</span></span>
              <button onClick={logout} className="text-sm font-medium text-red-600 hover:text-red-700">Déconnexion</button>
            </>
          ) : (
            <button 
              onClick={() => login("user@hackathon.com")}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
            >
              Connexion 
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
