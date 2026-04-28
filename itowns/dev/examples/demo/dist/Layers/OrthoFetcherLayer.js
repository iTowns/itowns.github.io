import * as itowns from 'itowns';
import { OrthoFetcherSource } from "../Sources/index.js";
export const OrthoFetcherLayer = {
  id: 'OrthoFetcher',
  layerPromise: undefined,
  cachedLayer: undefined,
  getLayer: () => {
    if (OrthoFetcherLayer.cachedLayer) {
      return Promise.resolve(OrthoFetcherLayer.cachedLayer);
    }
    if (!OrthoFetcherLayer.layerPromise) {
      OrthoFetcherLayer.layerPromise = (async () => {
        OrthoFetcherLayer.cachedLayer = new itowns.ColorLayer(OrthoFetcherLayer.id, await OrthoFetcherSource.getFetcherConfig());
        return OrthoFetcherLayer.cachedLayer;
      })();
    }
    return OrthoFetcherLayer.layerPromise;
  }
};