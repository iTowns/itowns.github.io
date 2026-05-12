/**
 * Blocks UI events from propagating to itowns.
 * @param viewerDiv - Itowns view div
 * @param panel - UI element that prevents event propagation
 */
export declare const blockEventsIfFromPanel: (viewerDiv: HTMLDivElement, panel: HTMLDivElement) => void;
export default blockEventsIfFromPanel;
