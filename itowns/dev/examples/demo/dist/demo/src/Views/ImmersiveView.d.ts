import View from './View';
declare class ImmersiveView extends View {
    static _instance: ImmersiveView | undefined;
    constructor();
    clearInstance(): void;
}
export default ImmersiveView;
