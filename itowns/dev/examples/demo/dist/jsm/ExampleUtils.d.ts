/**
 * Generates a shareable URL for the current example.
 * Handles both iTowns gallery (iframe) and standalone contexts.
 * @param {string} url - The data source URL to be shared.
 * @param {string} searchParam - The search param to set in the new URL (e.g. 'copc' or 'ept').
 * @returns {string} The full shareable URL. (e.g. https://itowns-project/itowns/examples/copc_3d_loader.html?copc=https://data.copc.laz)
 */
export function getShareableURL(url: string, searchParam: string): string;
