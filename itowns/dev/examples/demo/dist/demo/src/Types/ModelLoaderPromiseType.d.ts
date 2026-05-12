import * as THREE from 'three';
type ModelLoaderPromiseType = {
    modelPromise: Promise<THREE.Object3D> | undefined;
    cachedModel: THREE.Object3D | undefined;
    getModel: () => Promise<THREE.Object3D>;
};
export default ModelLoaderPromiseType;
