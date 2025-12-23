import { useQuery } from '@apollo/client';
import { GET_ALL_VARIETALS } from '../graphql/queries/varietals';
import { Varietal } from '../types';

function VarietalList() {
  const { loading, error, data } = useQuery<{ varietals: Varietal[] }>(GET_ALL_VARIETALS);

  if (loading) return <div className="text-center py-8">Loading varietals...</div>;
  if (error) return <div className="text-red-600 py-8">Error: {error.message}</div>;

  const getColorBadgeClass = (color: string) => {
    switch (color) {
      case 'RED':
        return 'bg-red-100 text-red-800';
      case 'WHITE':
        return 'bg-yellow-100 text-yellow-800';
      case 'ROSE':
        return 'bg-pink-100 text-pink-800';
      case 'SPARKLING':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Varietals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.varietals.map((varietal) => (
          <div
            key={varietal.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-semibold">{varietal.name}</h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getColorBadgeClass(
                  varietal.color
                )}`}
              >
                {varietal.color}
              </span>
            </div>
            {varietal.description && (
              <p className="text-gray-600 text-sm mt-2">{varietal.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VarietalList;

