angular.module('esri-map-example.controllers', ['esri.map'])
    .controller('MapController', function ($scope, esriLoader) {
        esriLoader.require(['esri/Map'], function (Map) {
            $scope.map = new Map({
                basemap: 'streets'
            });
        });
    });