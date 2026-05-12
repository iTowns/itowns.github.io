import * as itowns from 'itowns';
type LayerType = (itowns.ColorLayer | itowns.FeatureGeometryLayer | itowns.ElevationLayer | itowns.PointCloudLayer | itowns.OGC3DTilesLayer | itowns.CopcLayer | itowns.OrientedImageLayer | itowns.LabelLayer | itowns.EntwinePointTileSource) & {
    id: string;
    visible?: boolean;
};
export default LayerType;
