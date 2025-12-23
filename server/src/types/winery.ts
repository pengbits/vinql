export interface Winery {
  id: string;
  name: string;
  region: string;
  country: string;
  established?: number;
  description?: string;
}

export interface WineryData extends Winery {
  // Data file may include additional fields
}

