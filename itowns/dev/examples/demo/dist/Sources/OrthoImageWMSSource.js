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
        name: 'OI.OrthoimageCoverage.HR',
        version: '1.3.0',
        url: 'https://data.geopf.fr/wms-r/wms?',
        crs: 'EPSG:2154',
        format: 'image/png'
      });
      return cachedSource;
    })();
  }
  return sourcePromise;
}