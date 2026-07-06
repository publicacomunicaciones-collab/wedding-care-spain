export interface PackageMeta {
  id: 'essential' | 'full' | 'premium';
  highlight: boolean;
}

export const packagesMeta: PackageMeta[] = [
  { id: 'essential', highlight: false },
  { id: 'full', highlight: true },
  { id: 'premium', highlight: false },
];
