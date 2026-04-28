import * as itowns from 'itowns';
import { ParksSource } from '../Sources';
export const ParksLayer = {
    id: 'parks',
    layerPromise: undefined,
    cachedLayer: undefined,
    getLayer: () => {
        if (ParksLayer.cachedLayer) {
            return Promise.resolve(ParksLayer.cachedLayer);
        }
        if (!ParksLayer.layerPromise) {
            ParksLayer.layerPromise = (async () => {
                ParksLayer.cachedLayer = new itowns.ColorLayer(ParksLayer.id, {
                    source: await ParksSource.getSource(),
                    // @ts-expect-error style property undefined
                    style: {
                        fill: {
                            color: '#00FF00',
                            opacity: 0.5,
                        },
                    },
                });
                return ParksLayer.cachedLayer;
            })();
        }
        return ParksLayer.layerPromise;
    },
    getPickingInfo(feature) {
        const properties = feature;
        return {
            Name: properties.geometry.properties.nom,
            Street: properties.geometry.properties.voie,
            City: properties.geometry.properties.commune,
            'Total area (m²)': properties.geometry.properties.surf_tot_m2,
            'Postal code': properties.geometry.properties.codepost,
            'INSEE code': properties.geometry.properties.code_insee,
        };
    },
};
//# sourceMappingURL=ParksLayer.js.map