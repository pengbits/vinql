export interface Wine {
  id: string;
  name: string;
  wineryId: string;
  varietalId: string;
  vintage?: number;
  price?: number;
  description?: string;
  alcoholContent?: number;
  rating?: number;
}

export interface WineData extends Wine {
  // Data file may include additional fields
}

