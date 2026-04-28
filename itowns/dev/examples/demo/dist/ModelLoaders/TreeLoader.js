import * as itowns from 'itowns';
export const TreeLoader = {
  modelPromise: undefined,
  cachedModel: undefined,
  getModel: () => {
    if (TreeLoader.cachedModel) {
      return Promise.resolve(TreeLoader.cachedModel);
    }
    if (!TreeLoader.modelPromise) {
      // Load a glTF resource
      const gltfLoader = new itowns.iGLTFLoader();
      TreeLoader.modelPromise = new Promise(resolve => {
        gltfLoader.load(
        // resource URL
        'https://raw.githubusercontent.com/iTowns/iTowns2-sample-data/master/models/tree/tree.glb',
        // called when the resource is loaded
        async gltf => {
          TreeLoader.cachedModel = gltf.scene;
          resolve(TreeLoader.cachedModel);
        },
        // called while loading is progressing
        () => {}, error => {
          console.error('An error happened while loading the 3D model of tree.', error);
        });
      });
    }
    return TreeLoader.modelPromise;
  }
};