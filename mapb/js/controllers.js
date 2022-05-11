/*
//Feature Map
angular.module('esri-map-example.controllers', ['esri.map'])
    .controller('MapController', function ($scope, esriLoader) {
      var self = this;
        esriLoader.require([
            'esri/Map',
            'esri/layers/FeatureLayer'
        ], function (Map, FeatureLayer) {
            self.map = new Map({
                basemap: 'hybrid'
            });
            var featureLayer = new FeatureLayer({
                url: '//services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0'
            });
            self.map.add(featureLayer);
        });
    });
*/

//Vector Map
angular.module('esri-map-example.controllers', ['esri.map'])
    .controller('MapController', function ($scope, esriLoader) {
    var self = this;
        // load esri modules
    esriLoader.require([
        'esri/Map',
        'esri/layers/VectorTileLayer'
    ], function(Map, VectorTileLayer) {
        // create the map
        self.map = new Map();
        // add a tile layer to the map
        var tileLyr = new VectorTileLayer({
            url:  'http://www.arcgis.com/sharing/rest/content/items/2e063e709e3446459f8538ed6743f879/resources/styles/root.json'
        });
        self.map.add(tileLyr);
        });
    });