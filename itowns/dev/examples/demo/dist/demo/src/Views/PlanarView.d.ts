import * as itowns from 'itowns';
import View from './View';
declare class PlanarView extends View {
    extentKey: string;
    constructor(extent: itowns.Extent);
    setVisible(visible: boolean): void;
    clearInstance(): void;
}
export default PlanarView;
