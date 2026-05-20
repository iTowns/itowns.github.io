/**
 * Function allowing picking on a given 3D tiles layer and filling an html div
 * with information on the picked feature.
 * @param {MouseEvent} event
 * @param {object} pickingArg
 * @param {HTMLDivElement} pickingArg.htmlDiv - div element which contains the
 * picked information
 * @param {GlobeView} pickingArg.view - iTowns view where the picking must be done
 * @param {OGC3DTilesLayer} pickingArg.layer - the layer on which the picking
 * must be done
 */
export function fillHTMLWithPickingInfo(event: MouseEvent, pickingArg: {
    htmlDiv: HTMLDivElement;
    view: GlobeView;
    layer: OGC3DTilesLayer;
}): void;
export function zoomToLayer(view: any, layer: any): void;
