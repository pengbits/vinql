import { useState } from 'react';
import WineList from './components/WineList';
import WineryList from './components/WineryList';
import VarietalList from './components/VarietalList';
import WineDetail from './components/WineDetail';

function App() {
  const [selectedWineId, setSelectedWineId] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'wines' | 'wineries' | 'varietals'>('wines');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">VinQL</h1>
          <p className="mt-2 text-sm text-gray-600">GraphQL Wine Sandbox</p>
        </div>
      </header>

      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => {
                setActiveView('wines');
                setSelectedWineId(null);
              }}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeView === 'wines'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Wines
            </button>
            <button
              onClick={() => {
                setActiveView('wineries');
                setSelectedWineId(null);
              }}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeView === 'wineries'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Wineries
            </button>
            <button
              onClick={() => {
                setActiveView('varietals');
                setSelectedWineId(null);
              }}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeView === 'varietals'
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Varietals
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedWineId ? (
          <WineDetail wineId={selectedWineId} onBack={() => setSelectedWineId(null)} />
        ) : (
          <>
            {activeView === 'wines' && (
              <WineList onWineSelect={(id) => setSelectedWineId(id)} />
            )}
            {activeView === 'wineries' && <WineryList />}
            {activeView === 'varietals' && <VarietalList />}
          </>
        )}
      </main>
    </div>
  );
}

export default App;

