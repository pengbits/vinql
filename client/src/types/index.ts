// TypeScript types matching the GraphQL schema

export type WineColor = 'RED' | 'WHITE' | 'ROSE' | 'SPARKLING';

export interface Winery {
  id: string;
  name: string;
  region: string;
  country: string;
  established?: number;
  description?: string;
  wines?: Wine[];
}

export interface Varietal {
  id: string;
  name: string;
  description?: string;
  color: WineColor;
  wines?: Wine[];
}

export interface Wine {
  id: string;
  name: string;
  winery: Winery;
  varietal: Varietal;
  vintage?: number;
  price?: number;
  description?: string;
  alcoholContent?: number;
  rating?: number;
}

