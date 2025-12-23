import { useQuery } from '@apollo/client';
import { GET_ALL_WINERIES } from '../graphql/queries/wineries';
import { Winery } from '../types';

function WineryList() {
  const { loading, error, data } = useQuery<{ wineries: Winery[] }>(GET_ALL_WINERIES);

  if (loading) return <div className="text-center py-8">Loading wineries...</div>;
  if (error) return <div className="text-red-600 py-8">Error: {error.message}</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Wineries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.wineries.map((winery) => (
          <div
            key={winery.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{winery.name}</h3>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Region:</span> {winery.region}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Country:</span> {winery.country}
            </p>
            {winery.established && (
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Established:</span> {winery.established}
              </p>
            )}
            {winery.description && (
              <p className="text-gray-600 text-sm mt-4">{winery.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WineryList;

