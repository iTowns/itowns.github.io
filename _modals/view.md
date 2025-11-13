---
layout: null
---

# The View

The support to display anything within iTowns is called a [`View`][view].

Each [`View`][view] in iTowns displays 3D data in a unique Coordinates Reference
System (CRS). Yet, the data displayed within a [`View`][view] do not necessarily
have to be in the [`View`][view]'s CRS. ITowns comes with two pre-made
[`View`][view] types : [`GlobeView`][globeview] and [`PlanarView`][planarview].
Each of these allows visualizing data from different types (raster or vector)
and from different CRS. On this matter, iTowns distinguishes two cases:

- The first one regards data that are to be displayed as raster. These data can
  either be original raster data or vector data which are rasterized by iTowns
  and projected on the ground. Data from this type are displayed in a
  [`GlobeView`][globeview] if their source CRS is [WGS 84][epsg4326] or
  [Pseudo-Mercator][epsg3857]. However, if their source CRS defines a local
  projection (such as [RGF93 / Lambert 93][epsg2154]) for instance), they are
  displayed in a [`PlanarView`][planarview].
- On another hand, vector data that are to be displayed as 3D objects can be
  displayed in any type of [`View`][view], regardless of their source CRS since
  they can be converted by iTowns.

It is important to acknowledge the following facts regarding original raster
data and [`Views`][view]:

- a [`GlobeView`][globeview] allows displaying multiple raster data from two
  different source CRS : [WGS 84][epsg4326] and [Pseudo-Mercator][epsg3857],
- a [`PlanarView`][planarview] allows displaying multiple raster data, but all
  those data sources must have the same CRS.

&rarr;[**`Visit GlobeView tutorial`**][tutoglobe]

&rarr;[**`Visit PlanarView tutorial`**][tutoplanar]


[view]: https://itowns.github.io/itowns/docs/#api/View/View
[globeview]: https://itowns.github.io/itowns/docs/#api/View/GlobeView
[planarview]: https://itowns.github.io/itowns/docs/#api/View/PlanarView

[epsg4326]: https://epsg.io/4326
[epsg3857]: https://epsg.io/3857
[epsg2154]: https://epsg.io/2154

[tutoglobe]: https://itowns.github.io/itowns/docs/#tutorials/Raster-data-WGS84
[tutoplanar]: https://itowns.github.io/itowns/docs/#tutorials/Raster-data-Lambert93

