export default DragNDrop;
declare namespace DragNDrop {
    export { _TEXT as TEXT };
    export { _JSON as JSON };
    export { _BINARY as BINARY };
    export { _IMAGE as IMAGE };
    export { _XML as XML };
    export { _COLOR as COLOR };
    export { _GEOMETRY as GEOMETRY };
    export function register(extension: string, type: number, parser: Function, mode: number): void;
    export function setView(view: View): void;
}
declare const _TEXT: 1;
declare const _JSON: 2;
declare const _BINARY: 3;
declare const _IMAGE: 4;
declare const _XML: 5;
declare const _COLOR: 6;
declare const _GEOMETRY: 7;
