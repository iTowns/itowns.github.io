import View from './View';
declare class View3D extends View {
    static _instance: View3D | undefined;
    protected atmosphereFrameRequester: (() => void) | undefined;
    constructor();
    clearInstance(): void;
}
export default View3D;
