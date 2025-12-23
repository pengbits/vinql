export type WineColor = 'RED' | 'WHITE' | 'ROSE' | 'SPARKLING';

export interface Varietal {
  id: string;
  name: string;
  description?: string;
  color: WineColor;
}

export interface VarietalData extends Varietal {
  // Data file may include additional fields
}

