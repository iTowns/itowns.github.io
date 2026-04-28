import * as itowns from 'itowns';
import { BuildingsSource } from "../Sources/index.js";
export const Buildings3dLayer = {
  id: 'VTBuilding3D',
  layerPromise: undefined,
  cachedLayer: undefined,
  getLayer: meshCallback => {
    if (Buildings3dLayer.cachedLayer) {
      return Promise.resolve(Buildings3dLayer.cachedLayer);
    }
    if (!Buildings3dLayer.layerPromise) {
      Buildings3dLayer.layerPromise = (async () => {
        Buildings3dLayer.cachedLayer = new itowns.FeatureGeometryLayer(Buildings3dLayer.id, {
          // @ts-expect-error source property undefined
          source: await BuildingsSource.getSource(),
          zoom: {
            min: 15
          },
          onMeshCreated: meshCallback,
          accurate: false,
          style: {
            fill: {
              base_altitude: p => p.alti_sol || 0,
              extrusion_height: p => p.hauteur || 0
            }
          }
        });
        return Buildings3dLayer.cachedLayer;
      })();
    }
    return Buildings3dLayer.layerPromise;
  },
  getPickingInfo(feature) {
    const properties = feature;
    return {
      ID: properties.object.feature.id,
      'Ground altitude': properties.object.feature.geometries[0].properties.alti_sol,
      Height: properties.object.feature.geometries[0].properties.hauteur,
      Isolated: properties.object.feature.geometries[0].properties.isole,
      Level: properties.object.feature.geometries[0].properties.niveau,
      Symbol: properties.object.feature.geometries[0].properties.symbo,
      Territory: properties.object.feature.geometries[0].properties.territoire
    };
  }
};