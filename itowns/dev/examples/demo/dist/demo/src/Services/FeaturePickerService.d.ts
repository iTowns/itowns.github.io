import * as itowns from 'itowns';
import { LayerPromiseType } from '../Types';
import { View3D } from '../Views';
/**
 * FeaturePicker module to handle feature picking on specified layers
 * and display their information in a container.
 */
export declare const FeaturePickerService: {
    mouseDownPos: {
        x: number;
        y: number;
    } | null;
    layers: (LayerPromiseType)[];
    pickingContent: Record<string, unknown>[];
    container: HTMLDivElement | null;
    view: itowns.GlobeView | null;
    onClick: (event: Event) => Promise<void>;
    onMouseDown: (event: Event) => void;
    enable: (view: View3D) => void;
};
