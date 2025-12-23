import { VarietalData } from '../../types/varietal';
import { WineData } from '../../types/wine';
import { loadVarietals, loadWines } from '../../utils/dataLoader';

export const varietalResolvers = {
  Query: {
    varietals: async (): Promise<VarietalData[]> => {
      return await loadVarietals();
    },
    varietal: async (_: unknown, { id }: { id: string }): Promise<VarietalData | null> => {
      const varietals = await loadVarietals();
      return varietals.find(v => v.id === id) || null;
    },
  },
  Varietal: {
    wines: async (parent: VarietalData): Promise<WineData[]> => {
      const wines = await loadWines();
      return wines.filter(w => w.varietalId === parent.id);
    },
  },
};

