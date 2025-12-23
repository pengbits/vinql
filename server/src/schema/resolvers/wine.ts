import { WineData } from '../../types/wine';
import { WineryData } from '../../types/winery';
import { VarietalData } from '../../types/varietal';
import { loadWines, loadWineries, loadVarietals } from '../../utils/dataLoader';

export const wineResolvers = {
  Query: {
    wines: async (): Promise<WineData[]> => {
      return await loadWines();
    },
    wine: async (_: unknown, { id }: { id: string }): Promise<WineData | null> => {
      const wines = await loadWines();
      return wines.find(w => w.id === id) || null;
    },
  },
  Wine: {
    winery: async (parent: WineData): Promise<WineryData> => {
      const wineries = await loadWineries();
      const winery = wineries.find(w => w.id === parent.wineryId);
      if (!winery) {
        throw new Error(`Winery with id ${parent.wineryId} not found`);
      }
      return winery;
    },
    varietal: async (parent: WineData): Promise<VarietalData> => {
      const varietals = await loadVarietals();
      const varietal = varietals.find(v => v.id === parent.varietalId);
      if (!varietal) {
        throw new Error(`Varietal with id ${parent.varietalId} not found`);
      }
      return varietal;
    },
  },
};

