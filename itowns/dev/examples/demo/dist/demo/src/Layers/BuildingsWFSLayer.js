import * as itowns from 'itowns';
import { BuildingsWFSSource } from '../Sources';
export const BuildingsWFSLayer = {
    id: 'BuildingsWFSLayer',
    layerPromise: undefined,
    cachedLayer: undefined,
    getLayer: (meshCallback) => {
        if (BuildingsWFSLayer.cachedLayer) {
            return Promise.resolve(BuildingsWFSLayer.cachedLayer);
        }
        if (!BuildingsWFSLayer.layerPromise) {
            BuildingsWFSLayer.layerPromise = (async () => {
                BuildingsWFSLayer.cachedLayer = new itowns.FeatureGeometryLayer(BuildingsWFSLayer.id, {
                    // @ts-expect-error source property undefined
                    source: await BuildingsWFSSource.getSource(),
                    zoom: { min: 15 },
                    onMeshCreated: meshCallback,
                    accurate: false,
                    style: {
                        fill: {
                            base_altitude: (properties) => properties.altitude_minimale_sol - 3 || 0,
                            extrusion_height: (properties) => properties.hauteur + 3 || 0,
                        },
                    },
                });
                return BuildingsWFSLayer.cachedLayer;
            })();
        }
        return BuildingsWFSLayer.layerPromise;
    },
};
//# sourceMappingURL=BuildingsWFSLayer.js.map