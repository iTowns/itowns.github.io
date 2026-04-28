import * as itowns from 'itowns';
import { OrientedImageSource } from "../Sources/index.js";
export const OrientedImageLayer = {
  id: 'OrientedImageLayer',
  layerPromise: undefined,
  cachedLayer: undefined,
  getLayer: (crs, onPanoChanged) => {
    if (OrientedImageLayer.cachedLayer) {
      return Promise.resolve(OrientedImageLayer.cachedLayer);
    }
    if (!OrientedImageLayer.layerPromise) {
      OrientedImageLayer.layerPromise = (async () => {
        OrientedImageLayer.cachedLayer = new itowns.OrientedImageLayer(OrientedImageLayer.id, {
          source: await OrientedImageSource.getSource(),
          crs,
          onPanoChanged,
          backgroundDistance: 1200,
          // @ts-expect-error useMask property used
          // but not defined in OrientedImageLayerOptions
          useMask: false
        });
        return OrientedImageLayer.cachedLayer;
      })();
    }
    return OrientedImageLayer.layerPromise;
  }
};