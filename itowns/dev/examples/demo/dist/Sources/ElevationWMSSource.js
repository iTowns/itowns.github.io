import * as itowns from 'itowns';
let sourcePromise;
let cachedSource;
export async function getSource(extent) {
  if (cachedSource) {
    return Promise.resolve(cachedSource);
  }
  if (!sourcePromise) {
    sourcePromise = (async () => {
      cachedSource = new itowns.WMSSource({
        extent,
        name: 'ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES',
        version: '1.3.0',
        url: 'https://data.geopf.fr/wms-r/wms?',
        format: 'image/x-bil;bits=32',
        crs: 'EPSG:2154'
      });
      return cachedSource;
    })();
  }
  return sourcePromise;
}