import * as itowns from 'itowns';
import { OrthoImageWMSSource } from '../Sources';
export const OrthoImageWMSLayer = {
    id: 'OrthoImageryWMS',
    layerPromise: undefined,
    cachedLayer: undefined,
    getLayer: (extent) => {
        if (OrthoImageWMSLayer.cachedLayer) {
            return Promise.resolve(OrthoImageWMSLayer.cachedLayer);
        }
        if (!OrthoImageWMSLayer.layerPromise) {
            OrthoImageWMSLayer.layerPromise = (async () => {
                OrthoImageWMSLayer.cachedLayer = new itowns.ColorLayer(OrthoImageWMSLayer.id, {
                    // @ts-expect-error updateStrategy undefined
                    updateStrategy: {
                        type: itowns.STRATEGY_DICHOTOMY,
                        options: {},
                    },
                    source: await OrthoImageWMSSource.getSource(extent),
                });
                return OrthoImageWMSLayer.cachedLayer;
            })();
        }
        return OrthoImageWMSLayer.layerPromise;
    },
};
//# sourceMappingURL=OrthoImageWMSLayer.js.map