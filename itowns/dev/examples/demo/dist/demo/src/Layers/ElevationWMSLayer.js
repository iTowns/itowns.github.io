import * as itowns from 'itowns';
import { ElevationWMSSource } from '../Sources';
export const ElevationWMSLayer = {
    id: 'ElevationWMS',
    layerPromise: undefined,
    cachedLayer: undefined,
    getLayer: (extent) => {
        if (ElevationWMSLayer.cachedLayer) {
            return Promise.resolve(ElevationWMSLayer.cachedLayer);
        }
        if (!ElevationWMSLayer.layerPromise) {
            ElevationWMSLayer.layerPromise = (async () => {
                ElevationWMSLayer.cachedLayer = new itowns.ElevationLayer(ElevationWMSLayer.id, {
                    // @ts-expect-error source undefined
                    source: await ElevationWMSSource.getSource(extent),
                });
                return ElevationWMSLayer.cachedLayer;
            })();
        }
        return ElevationWMSLayer.layerPromise;
    },
};
//# sourceMappingURL=ElevationWMSLayer.js.map