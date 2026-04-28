import * as itowns from 'itowns';
let sourcePromise;
let cachedSource;
export async function getSource() {
  if (cachedSource) {
    return Promise.resolve(cachedSource);
  }
  if (!sourcePromise) {
    sourcePromise = (async () => {
      cachedSource = new itowns.VectorTilesSource({
        style: 'https://data.geopf.fr/annexes/ressources/vectorTiles/styles/PLAN.IGN/standard.json',
        // @ts-expect-error filter property undefined
        filter: layer => layer['source-layer'].includes('bati_surf') && layer.paint['fill-color']
      });
      return cachedSource;
    })();
  }
  return sourcePromise;
}