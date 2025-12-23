import { useQuery } from '@apollo/client';
import { GET_WINE } from '../graphql/queries/wines';
import { Wine } from '../types';

interface WineDetailProps {
  wineId: string;
  onBack: () => void;
}

function WineDetail({ wineId, onBack }: WineDetailProps) {
  const { loading, error, data } = useQuery<{ wine: Wine }>(GET_WINE, {
    variables: { id: wineId },
  });

  if (loading) return <div className="text-center py-8">Loading wine details...</div>;
  if (error) return <div className="text-red-600 py-8">Error: {error.message}</div>;
  if (!data?.wine) return <div className="text-center py-8">Wine not found</div>;

  const wine = data.wine;

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="mb-6 text-indigo-600 hover:text-indigo-800 font-medium"
      >
        ← Back to list
      </button>

      <h1 className="text-3xl font-bold mb-4">{wine.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Wine Information</h2>
          <div className="space-y-3">
            {wine.vintage && (
              <div>
                <span className="font-medium text-gray-700">Vintage:</span>{' '}
                <span className="text-gray-900">{wine.vintage}</span>
              </div>
            )}
            {wine.price && (
              <div>
                <span className="font-medium text-gray-700">Price:</span>{' '}
                <span className="text-gray-900">${wine.price.toFixed(2)}</span>
              </div>
            )}
            {wine.alcoholContent && (
              <div>
                <span className="font-medium text-gray-700">Alcohol Content:</span>{' '}
                <span className="text-gray-900">{wine.alcoholContent}%</span>
              </div>
            )}
            {wine.rating && (
              <div>
                <span className="font-medium text-gray-700">Rating:</span>{' '}
                <span className="text-gray-900">{wine.rating.toFixed(1)}/5.0</span>
              </div>
            )}
            {wine.description && (
              <div className="mt-4">
                <span className="font-medium text-gray-700">Description:</span>
                <p className="text-gray-900 mt-2">{wine.description}</p>
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Winery</h2>
          <div className="space-y-3">
            <div>
              <span className="font-medium text-gray-700">Name:</span>{' '}
              <span className="text-gray-900">{wine.winery.name}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Region:</span>{' '}
              <span className="text-gray-900">{wine.winery.region}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Country:</span>{' '}
              <span className="text-gray-900">{wine.winery.country}</span>
            </div>
            {wine.winery.established && (
              <div>
                <span className="font-medium text-gray-700">Established:</span>{' '}
                <span className="text-gray-900">{wine.winery.established}</span>
              </div>
            )}
            {wine.winery.description && (
              <div className="mt-4">
                <span className="font-medium text-gray-700">About:</span>
                <p className="text-gray-900 mt-2 text-sm">{wine.winery.description}</p>
              </div>
            )}
          </div>

          <h2 className="text-xl font-semibold mb-4 mt-6">Varietal</h2>
          <div className="space-y-3">
            <div>
              <span className="font-medium text-gray-700">Name:</span>{' '}
              <span className="text-gray-900">{wine.varietal.name}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Color:</span>{' '}
              <span className="text-gray-900">{wine.varietal.color}</span>
            </div>
            {wine.varietal.description && (
              <div className="mt-4">
                <span className="font-medium text-gray-700">Description:</span>
                <p className="text-gray-900 mt-2 text-sm">{wine.varietal.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WineDetail;

