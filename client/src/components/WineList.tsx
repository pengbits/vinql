import { useQuery } from '@apollo/client';
import { GET_ALL_WINES } from '../graphql/queries/wines';
import { Wine } from '../types';

interface WineListProps {
  onWineSelect: (id: string) => void;
}

function WineList({ onWineSelect }: WineListProps) {
  const { loading, error, data } = useQuery<{ wines: Wine[] }>(GET_ALL_WINES);

  if (loading) return <div className="text-center py-8">Loading wines...</div>;
  if (error) return <div className="text-red-600 py-8">Error: {error.message}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Wines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.wines.map((wine) => (
          <div
            key={wine.id}
            onClick={() => onWineSelect(wine.id)}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{wine.name}</h3>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Winery:</span> {wine.winery.name}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Varietal:</span> {wine.varietal.name}
            </p>
            {wine.vintage && (
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Vintage:</span> {wine.vintage}
              </p>
            )}
            {wine.price && (
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Price:</span> ${wine.price.toFixed(2)}
              </p>
            )}
            {wine.rating && (
              <p className="text-gray-600">
                <span className="font-medium">Rating:</span> {wine.rating.toFixed(1)}/5.0
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WineList;

