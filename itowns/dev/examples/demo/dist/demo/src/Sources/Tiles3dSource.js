import * as itowns from 'itowns';
let sourcePromise;
let cachedSource;
export async function getSource() {
    if (cachedSource) {
        return Promise.resolve(cachedSource);
    }
    if (!sourcePromise) {
        sourcePromise = (async () => {
            cachedSource = new itowns.OGC3DTilesSource({
                url: 'https://webimaging.lillemetropole.fr/externe/maillage/2020_mel_5cm/tileset.json',
            });
            return cachedSource;
        })();
    }
    return sourcePromise;
}
//# sourceMappingURL=Tiles3dSource.js.map