---
layout: null
---

# Layers

In a digital map environment, a layer is a visual representation of any
geographic data. Data is thus displayed as a [`Layer`][layer] within iTowns.
Several specific types of [`Layer`][layer] exist, the use of which depends on
the data to display:

- [`ColorLayer`][color] can be used to display raster graphics or vector data
  that needs to be rasterized to be projected on the ground (left picture in the
  table bellow),
- [`ElevationLayer`][elevation] can be used to display 3D elevation models
  (center picture in the table bellow),
- [`GeometryLayer`][geometry] can be used to display 2D vector data or 3D
  objects, such as geometric shapes or buildings modelling (right picture in the
  table bellow).
- [`FeatureGeometryLayer`][feature] is a pre-configured
  [`GeometryLayer`][geometry] which simplifies its implementation in given cases
  (e.g. to extrude 3D buildings).
- [`PointCloudLayer`][pointcloud] can be used to display 3D point clouds. Any
  point cloud formats are supported as long as the corresponding
  [`Source`][source] is provided. Some point clouds formats such as Potree, Las
  and Entwine already have parsers defined in itowns that you can use. For 3D
  Tiles point clouds (pnts), use [`OGC3DTilesLayer`][3dtiles]
- [`OGC3DTilesLayer`][3dtiles] can be used to display 3D Tiles datasets in
  version 1.0 (b3dm, pnts and gltf tiles are supported).
- [`OrientedImageLayer`][oriented] can be used to display oriented images.


| ![color layer][image1] | ![elevation layer][image2] | ![geometry layer][image3] |
| :---: | :---: | :---: |
| A simple [`ColorLayer`][color] is displayed | An [`ElevationLayer`][elevation] is added to represent terrain elevation | A [`GeometryLayer`][geometry] is added to model the buildings |


Note that [`ColorLayer`][color] and [`ElevationLayer`][elevation] don't have
their own geometry and are always *attached* to a [`GeometryLayer`][geometry]
(generally the layer representing the geometry of the globe or of the plane).
[`ColorLayer`][color] are projected onto this [`GeometryLayer`][geometry] and
[`ElevationLayer`][elevation] are used to read elevation and to deform a
[`GeometryLayer`][geometry] accordingly.


[layer]: https://itowns.github.io/itowns/docs/#api/Layer/Layer
[color]: https://itowns.github.io/itowns/docs/#api/Layer/ColorLayer
[elevation]: https://itowns.github.io/itowns/docs/#api/Layer/ElevationLayer
[geometry]: https://itowns.github.io/itowns/docs/#api/Layer/GeometryLayer
[feature]: https://itowns.github.io/itowns/docs/#api/Layer/FeatureGeometryLayer
[pointcloud]: https://itowns.github.io/itowns/docs/#api/Layer/PointCloudLayer
[3dtiles]: https://itowns.github.io/itowns/docs/#api/Layer/OGC3DTilesLayer
[oriented]: https://itowns.github.io/itowns/docs/#api/Layer/OrientedImageLayer

[source]: https://itowns.github.io/itowns/docs/#api/Source/Source

[image1]: {{ site.baseurl }}/assets/images/manuals/layer-1.png
[image2]: {{ site.baseurl }}/assets/images/manuals/layer-2.png
[image3]: {{ site.baseurl }}/assets/images/manuals/layer-3.png

