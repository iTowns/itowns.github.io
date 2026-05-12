declare namespace _default {
    export { setupPictureFromCamera };
    export { setupViewCameraLookingAtObject };
    export { initCamera };
    export { setupViewCameraDecomposing };
    export { addCameraHelper };
    export { transformTexturedPlane };
    export { setupPictureUI };
}
export default _default;
declare function setupPictureFromCamera(camera: any, imageUrl: any, opacity: any, distance: any): THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial, THREE.Object3DEventMap>;
declare function setupViewCameraLookingAtObject(camera: any, coord: any, objectToLookAt: any): void;
declare function initCamera(view: any, image: any, coord: any, EnhToOrientationUp: any, EnhToOrientationLookAt: any, rotMatrix: any, orientationToCameraUp: any, orientationToCameraLookAt: any, distance: any, size: any, focale: any): THREE.PerspectiveCamera;
declare function setupViewCameraDecomposing(view: any, camera: any): void;
declare function addCameraHelper(view: any, camera: any): void;
declare function transformTexturedPlane(camera: any, distance: any, plane: any): void;
declare function setupPictureUI(menu: any, pictureInfos: any, plane: any, updateDistanceCallback: any, view: any, min: any, max: any): void;
import * as THREE from 'three';
