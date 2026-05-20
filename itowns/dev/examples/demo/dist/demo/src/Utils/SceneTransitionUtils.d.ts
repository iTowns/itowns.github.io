import * as itowns from 'itowns';
import type { SceneType } from '../Types';
/**
 * Updates the UI elements with the title and description of the given scene.
 * @param scene - scene whose title and description will be displayed
 */
export declare const updateUIForScene: (scene: SceneType) => void;
/**
 * Moves the camera of a view to a given placement over a specified duration.
 * @param view - current view whose camera will be moved
 * @param placement - See {@link SceneType.placement} - tilt and heading are
 * optional
 * @param duration - duration of the animation in ms
 * @returns Promise<any>
 */
export declare const moveCameraTo: (view: itowns.View, placement: SceneType["placement"], duration?: number) => Promise<any>;
/**
 * Transitions the camera and layers from the current scene to the next scene.
 * @param currentScene - current scene that is being transitioned from
 * @param nextScene - next scene that is being transitioned to
 * @returns Promise<void>
 */
export declare const transitionToScene: (currentScene: SceneType, nextScene: SceneType) => Promise<void>;
/**
 * Resets the given scene by disposing and recreating its view and layers.
 * As well as updating other scenes that share the same view.
 * @param scene - current scene to reset
 * @returns Promise<void>
 */
export declare const hardResetScene: (scene: SceneType) => Promise<void>;
/**
 * Resets the given scene by hiding and showing appropriate layers
 * @param scene - scene to reset
 * @returns Promise<void>
 */
export declare const resetScene: (scene: SceneType) => Promise<void>;
