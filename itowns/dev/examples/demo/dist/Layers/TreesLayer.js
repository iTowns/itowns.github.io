import * as itowns from 'itowns';
import { TreesSource } from "../Sources/index.js";
import { TreeLoader } from "../ModelLoaders/index.js";
export const TreesLayer = {
  id: 'Trees3D',
  layerPromise: undefined,
  cachedLayer: undefined,
  getLayer: async () => {
    if (TreesLayer.cachedLayer) {
      return Promise.resolve(TreesLayer.cachedLayer);
    }
    if (!TreesLayer.layerPromise) {
      TreesLayer.layerPromise = (async () => {
        const model = await TreeLoader.getModel();
        model.rotateX(Math.PI / 2.0);
        model.position.z = 165;
        model.scale.set(2, 2, 2);
        const styleModel3D = {
          point: {
            model: {
              object: model
            }
          }
        };
        TreesLayer.cachedLayer = new itowns.FeatureGeometryLayer(TreesLayer.id, {
          // @ts-expect-error source property undefined
          source: await TreesSource.getSource(),
          style: styleModel3D,
          zoom: {
            min: 7,
            max: 21
          }
        });
        return TreesLayer.cachedLayer;
      })();
    }
    return TreesLayer.layerPromise;
  }
};