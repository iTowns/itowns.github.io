import * as Layers from "../Layers/index.js";
import { Config } from "../Config/index.js";
import { BlockEventsIfFromPanel } from "../Utils/index.js";

/**
 * FeaturePicker module to handle feature picking on specified layers
 * and display their information in a container.
 */
export const FeaturePickerService = {
  mouseDownPos: null,
  // currently, featureGeometryLayer needs to be passed before ColorLayer
  layers: [Layers.Buildings3dLayer, Layers.ParksLayer],
  pickingContent: [],
  container: null,
  view: null,
  onClick: async event => {
    if (!(event instanceof MouseEvent)) {
      return;
    }
    if (!FeaturePickerService.view || !FeaturePickerService.layers.length || !FeaturePickerService.container) {
      return;
    }

    // check drag with allowed threshold
    if (!FeaturePickerService.mouseDownPos) {
      return;
    }
    const dx = event.clientX - FeaturePickerService.mouseDownPos.x;
    const dy = event.clientY - FeaturePickerService.mouseDownPos.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist > Config.DRAG_THRESHOLD) {
      return;
    }
    const coords = {
      x: event.clientX,
      y: event.clientY
    };
    const layers = await Promise.all(FeaturePickerService.layers.map(async layerPromise => layerPromise.layerPromise));
    const layerIds = [];
    for (const layer of layers) {
      if (layer && layer.visible) {
        layerIds.push(layer.id);
      }
    }
    if (layerIds.length === 0) {
      FeaturePickerService.container.innerHTML = 'Click on a feature to display informations.';
      return;
    }
    const results = FeaturePickerService.view.pickFeaturesAt(coords, 3, ...layerIds);
    FeaturePickerService.pickingContent = [];

    // picking results' properties are named after layer id
    for (const [layerId, featureArray] of Object.entries(results)) {
      if (!featureArray || featureArray.length === 0) {
        continue;
      }
      const layerPromise = FeaturePickerService.layers.find(layer => layer.id === layerId);
      if (!layerPromise || !layerPromise.getPickingInfo) {
        continue;
      }

      // featureProperties structure depends on layer type and data source
      const featureProperties = layerPromise.getPickingInfo(featureArray[0]);
      if (featureProperties) {
        FeaturePickerService.pickingContent.push(featureProperties);
      }
    }
    if (FeaturePickerService.pickingContent.length === 0) {
      FeaturePickerService.container.innerHTML = 'Click on a feature to display informations.';
      return;
    }
    FeaturePickerService.container.innerHTML = '<h3>Features Info:</h3>';
    for (let i = 0; i < FeaturePickerService.pickingContent.length; i++) {
      const featureProps = FeaturePickerService.pickingContent[i];
      const propH = document.createElement('h4');
      propH.innerHTML = `--- Feature ${i + 1} ---`;
      FeaturePickerService.container.appendChild(propH);
      for (const [key, value] of Object.entries(featureProps)) {
        const propP = document.createElement('p');
        propP.innerHTML = `<strong>${key}:</strong> ${value}`;
        FeaturePickerService.container.appendChild(propP);
      }
    }
  },
  onMouseDown: event => {
    if (!(event instanceof MouseEvent)) {
      return;
    }
    FeaturePickerService.mouseDownPos = {
      x: event.clientX,
      y: event.clientY
    };
  },
  enable: view => {
    FeaturePickerService.view = view.getItownsView();
    const viewerDiv = view.getViewerDiv();
    let container = viewerDiv.querySelector('#feature-picking-info');
    if (!container) {
      container = document.createElement('div');
      container.id = 'feature-picking-info';
      viewerDiv.appendChild(container);
      viewerDiv.addEventListener('mouseup', FeaturePickerService.onClick);
      viewerDiv.addEventListener('mousedown', FeaturePickerService.onMouseDown);

      // Prevent interaction with the viewer
      // when interacting with the feature info panel
      BlockEventsIfFromPanel(viewerDiv, container);
    }
    FeaturePickerService.container = container;
    FeaturePickerService.container.innerHTML = 'Click on a feature to display informations.';
  }
};