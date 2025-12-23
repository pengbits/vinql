import { wineryResolvers } from './winery';
import { varietalResolvers } from './varietal';
import { wineResolvers } from './wine';

export const resolvers = {
  Query: {
    ...wineryResolvers.Query,
    ...varietalResolvers.Query,
    ...wineResolvers.Query,
  },
  Winery: wineryResolvers.Winery,
  Varietal: varietalResolvers.Varietal,
  Wine: wineResolvers.Wine,
};

