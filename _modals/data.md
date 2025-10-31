---
layout: null
---

# Protocols and data formats


ITowns comes with a wide range of compatible data sources. All available sources
can be seen in the [`Source`][source] section of the API documentation.

iTowns supports all the main geographic protocols:

- [Web Map Service][wms] with [`WMSSource`][wmssource],
- [Web Map Tiled Service][wmts] with [`WMTSSource`][wmtssource],
- [Web Feature Service][wfs] with [`WFSSource`][wfssource]
- [Tile Map Service][tms] and XYZ with [`TMSSource`][tmssource].

iTowns also has sources for many data formats:

- [vector tile][mvt] resources from [MapBox][mapbox] with
  [`VectorTilesSource`][mvtsource],
- [Potree][potree] ([`PotreeSource`][potreesource] and
  [`Potree2Source`][potree2source]) and [Entwine][ept] (
  [`EntwinePointTileSource`][eptsource]) 3D point clouds,
- [3DTiles][3dt] mesh (b3dm) and point clouds (pnts) from web servers (
  [`OGC3DTilesSource`][3dtsource]), from Cesium ion (
  [`OGC3DTilesIonSource`][3dtisource]) and from the Google API (
  [`OGC3DTilesGoogleSource`][3dtgsource]),
- [GeoJSON][gjson] with [`FileSource`][filesource] and
  [`GeoJsonParser`][gjsonparser],
- [KML][kml] with [`FileSource`][filesource] and [`KMLParser`][kmlparser],
- [GPX][gpx] with [`FileSource`][filesource] and [`GpxParser`][gpxparser]
- oriented images with [`OrientedImageSource`][oisource].

It is also possible to create your own source and/or your own parser to read and
add data from any format or protocol that is not supported by itowns.


[wms]: https://www.ogc.org/standards/wms
[wmts]: https://www.ogc.org/standards/wmts
[wfs]: https://www.ogc.org/standards/wfs
[tms]: https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification
[mvt]: https://docs.mapbox.com/help/glossary/vector-tiles/
[mapbox]: https://www.mapbox.com/
[potree]: https://github.com/potree/potree
[ept]: https://entwine.io/
[3dt]: https://www.ogc.org/standards/3DTiles
[gjson]: https://geojson.org/
[kml]: https://www.ogc.org/standards/kml
[gpx]: https://www.topografix.com/gpx.asp

[source]: https://itowns.github.io/itowns/docs/#api/Source/Source
[wmssource]: https://itowns.github.io/itowns/docs/#api/Source/WMSSource
[wmtssource]: https://itowns.github.io/itowns/docs/#api/Source/WMTSSource
[wfssource]: https://itowns.github.io/itowns/docs/#api/Source/WFSSource
[tmssource]: https://itowns.github.io/itowns/docs/#api/Source/TMSSource
[mvtsource]: https://itowns.github.io/itowns/docs/#api/Source/VectorTilesSource
[potreesource]: https://itowns.github.io/itowns/docs/#api/Source/PotreeSource
[potree2source]: https://itowns.github.io/itowns/docs/#api/Source/Potree2Source
[eptsource]: https://itowns.github.io/itowns/docs/#api/Source/EntwinePointTileSource
[3dtsource]: https://itowns.github.io/itowns/docs/#api/Source/OGC3DTilesSource
[3dtisource]: https://itowns.github.io/itowns/docs/#api/Source/OGC3DTilesIonSource
[3dtgsource]: https://itowns.github.io/itowns/docs/#api/Source/OGC3DTilesGoogleSource
[filesource]: https://itowns.github.io/itowns/docs/#api/Source/FileSource
[gjsonparser]: https://itowns.github.io/itowns/docs/#api/Parser/GeoJsonParser
[kmlparser]: KMLParser
[gpxparser]: https://itowns.github.io/itowns/docs/#api/Parser/GpxParser
[oisource]: https://itowns.github.io/itowns/docs/#api/Source/OrientedImageSource

