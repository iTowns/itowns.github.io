import * as itowns from 'itowns';
import { CartoWFSSource } from "../Sources/index.js";
export const CartoLabelLayer = {
  id: 'CartoLabelsWFS',
  layerPromise: undefined,
  cachedLayer: undefined,
  getLayer: () => {
    if (CartoLabelLayer.cachedLayer) {
      return Promise.resolve(CartoLabelLayer.cachedLayer);
    }
    if (!CartoLabelLayer.layerPromise) {
      CartoLabelLayer.layerPromise = (async () => {
        const wfsCartoStyle = {
          zoom: {
            min: 0,
            max: 20
          },
          text: {
            field: '{toponyme}',
            color: 'white',
            transform: 'uppercase',
            size: 15,
            haloColor: 'rgba(20,20,20, 0.8)',
            haloWidth: 3
          }
        };
        CartoLabelLayer.cachedLayer = new itowns.LabelLayer(CartoLabelLayer.id, {
          // @ts-expect-error source undefined
          source: await CartoWFSSource.getSource(),
          style: wfsCartoStyle
        });
        return CartoLabelLayer.cachedLayer;
      })();
    }
    return CartoLabelLayer.layerPromise;
  }
};