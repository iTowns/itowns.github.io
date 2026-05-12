export default FeatureToolTip;
declare namespace FeatureToolTip {
    function init(viewerDiv: Element, viewer: View): void;
    function addLayer(layer: Layer, options: {
        filterGeometries?: Function | undefined;
        format?: Function | undefined;
        filterProperties?: string[] | undefined;
        filterAllProperties?: boolean | undefined;
    }): Layer;
}
