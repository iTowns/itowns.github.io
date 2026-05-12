import type { ItownsViewType, LayerType } from '../Types';
declare abstract class View {
    id: string;
    view: ItownsViewType | null;
    viewerDiv: HTMLDivElement | null;
    constructor();
    getId(): string;
    getItownsView(): ItownsViewType;
    getViewerDiv(): HTMLDivElement;
    setVisible(visible: boolean): void;
    addLayer(layer: LayerType): Promise<any> | undefined;
    addLayers(layers: LayerType[]): Promise<any[]>;
}
export default View;
