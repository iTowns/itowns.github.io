import * as itowns from 'itowns';
import * as THREE from 'three';
import type LayerType from './LayerType';
interface LayerPromiseTypeBase {
    id: string;
    layerPromise: Promise<LayerType> | undefined;
    cachedLayer: LayerType | undefined;
    getPickingInfo?: (feature: unknown) => Record<string, string> | null;
}
export type LayerPromiseTypeNoParams = LayerPromiseTypeBase & {
    getLayer: () => Promise<LayerType>;
};
export type LayerPromiseTypeCRS = LayerPromiseTypeBase & {
    getLayer: (crs: string) => Promise<LayerType>;
};
export type LayerPromiseTypeExtent = LayerPromiseTypeBase & {
    getLayer: (extent: itowns.Extent) => Promise<LayerType>;
};
export type LayerPromiseTypeMeshCallback = LayerPromiseTypeBase & {
    getLayer: (meshCallback: (mesh: THREE.Mesh) => void) => Promise<LayerType>;
};
export type LayerPromiseTypeCRSPanoChangeCallback = LayerPromiseTypeBase & {
    getLayer: (crs: string, onPanoChanged: (e: {
        previousPanoPosition: THREE.Vector3;
        currentPanoPosition: THREE.Vector3;
        nextPanoPosition: THREE.Vector3;
    }) => void) => Promise<LayerType>;
};
export type LayerPromiseType = LayerPromiseTypeNoParams | LayerPromiseTypeCRS | LayerPromiseTypeExtent | LayerPromiseTypeMeshCallback | LayerPromiseTypeCRSPanoChangeCallback;
export {};
