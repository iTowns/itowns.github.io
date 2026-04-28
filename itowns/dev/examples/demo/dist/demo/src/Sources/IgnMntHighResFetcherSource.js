import * as itowns from 'itowns';
import { Config } from '../Config';
let configPromise;
let cachedConfig;
export async function getFetcherConfig() {
    if (cachedConfig) {
        return Promise.resolve(cachedConfig);
    }
    if (!configPromise) {
        configPromise = itowns.Fetcher.json(`${Config.basePath}/demo/assets/IGN_MNT_HIGHRES.json`).then((config) => {
            config.source = new itowns.WMTSSource(config.source);
            cachedConfig = config;
            return cachedConfig;
        });
    }
    return configPromise;
}
//# sourceMappingURL=IgnMntHighResFetcherSource.js.map