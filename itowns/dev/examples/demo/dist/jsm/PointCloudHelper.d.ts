export function getFormat(url: any, format: any): any;
export function getPointCloudClass(format: any): {
    Source: typeof CopcSource;
    Layer: typeof CopcLayer;
} | {
    Source: typeof EntwinePointTileSource;
    Layer: typeof EntwinePointTileLayer;
} | {
    Source: typeof PotreeSource;
    Layer: typeof PotreeLayer;
} | {
    Source: typeof Potree2Source;
    Layer: typeof Potree2Layer;
};
export function getDefaultAttribute(format: any): number;
export function zoomToLayer(view: any, layer: any): void;
export function zoomToLayerGlobe(view: any, layer: any): void;
import { CopcSource } from 'itowns';
import { CopcLayer } from 'itowns';
import { EntwinePointTileSource } from 'itowns';
import { EntwinePointTileLayer } from 'itowns';
import { PotreeSource } from 'itowns';
import { PotreeLayer } from 'itowns';
import { Potree2Source } from 'itowns';
import { Potree2Layer } from 'itowns';
