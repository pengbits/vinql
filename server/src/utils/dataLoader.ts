import * as fs from 'fs-extra';
import * as path from 'path';
import { WineryData } from '../types/winery';
import { VarietalData } from '../types/varietal';
import { WineData } from '../types/wine';

const dataDir = path.join(__dirname, '../data');

export async function loadWineries(): Promise<WineryData[]> {
  const filePath = path.join(dataDir, 'wineries.json');
  const data = await fs.readJson(filePath);
  return data;
}

export async function loadVarietals(): Promise<VarietalData[]> {
  const filePath = path.join(dataDir, 'varietals.json');
  const data = await fs.readJson(filePath);
  return data;
}

export async function loadWines(): Promise<WineData[]> {
  const filePath = path.join(dataDir, 'wines.json');
  const data = await fs.readJson(filePath);
  return data;
}

