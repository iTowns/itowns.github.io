import * as itowns from 'itowns';
import { BuildingsSource } from "../Sources/index.js";
export const FlatBuildingsLayer = {
  id: 'VTBuilding2D',
  layerPromise: undefined,
  cachedLayer: undefined,
  getLayer: () => {
    if (FlatBuildingsLayer.cachedLayer) {
      return Promise.resolve(FlatBuildingsLayer.cachedLayer);
    }
    if (!FlatBuildingsLayer.layerPromise) {
      FlatBuildingsLayer.layerPromise = (async () => {
        FlatBuildingsLayer.cachedLayer = new itowns.ColorLayer(FlatBuildingsLayer.id, {
          source: await BuildingsSource.getSource(),
          // @ts-expect-error style property undefined
          style: {
            fill: {
              opacity: 0.3
            }
          }
        });
        return FlatBuildingsLayer.cachedLayer;
      })();
    }
    return FlatBuildingsLayer.layerPromise;
  }
};