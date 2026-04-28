import * as itowns from 'itowns';
import { Config } from "../Config/index.js";
let configPromise;
let cachedConfig;
export async function getFetcherConfig() {
  if (cachedConfig) {
    return Promise.resolve(cachedConfig);
  }
  if (!configPromise) {
    configPromise = itowns.Fetcher.json(`${Config.basePath}/demo/assets/Ortho.json`).then(config => {
      config.source = new itowns.WMTSSource(config.source);
      cachedConfig = config;
      return cachedConfig;
    });
  }
  return configPromise;
}