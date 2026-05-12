export function createHTMLListFromObject(jsObject: any): HTMLUListElement;
export default GuiTools;
declare function GuiTools(domId: any, view: any, w: any): void;
declare class GuiTools {
    constructor(domId: any, view: any, w: any);
    gui: any;
    colorGui: any;
    elevationGui: any;
    geoidGui: any;
    view: any;
    addLayerGUI(layer: any): void;
    addLayersGUI(): void;
    addImageryLayerGUI(layer: any): void;
    addElevationLayerGUI(layer: any): void;
    addGeoidLayerGUI(layer: any): void;
    addImageryLayersGUI(layers: any): void;
    addElevationLayersGUI(layers: any): void;
    removeLayersGUI(nameLayer: any): void;
    addGUI(name: any, value: any, callback: any): any;
    colorLayerFolder(nameLayer: any, value: any): void;
}
