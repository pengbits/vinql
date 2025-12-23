import { WineryData } from '../../types/winery';
import { WineData } from '../../types/wine';
import { loadWineries, loadWines } from '../../utils/dataLoader';

export const wineryResolvers = {
  Query: {
    wineries: async (): Promise<WineryData[]> => {
      return await loadWineries();
    },
    winery: async (_: unknown, { id }: { id: string }): Promise<WineryData | null> => {
      const wineries = await loadWineries();
      return wineries.find(w => w.id === id) || null;
    },
  },
  Winery: {
    wines: async (parent: WineryData): Promise<WineData[]> => {
      const wines = await loadWines();
      return wines.filter(w => w.wineryId === parent.id);
    },
  },
};

