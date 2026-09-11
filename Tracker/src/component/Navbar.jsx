export function Navbar() {
  return (
    
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-2xl font-bold text-green-600">
          Budget Tracker
        </h1>

        <button className="px-4 py-2 bg-black text-white rounded-lg">
          Reset
        </button>

      </div>
    </nav>
  );
}