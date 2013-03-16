require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        leaflet: 'vendor/leaflet',
        
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'leaflet', 'bootstrap'], function (app, $) {

    var map = L.map('map', {
        center: [46.619261,2.702637],
        zoom: 5,
        attributionControl: false,
        layers: [
            L.tileLayer('tilesmap/{z}/{x}/{y}.png', {
                attribution: 'OpenStreetMap contributors - Wikipedia contributors - AirFrance',
                maxZoom: 6,
                // continuousWorld: false,
                // noWrap: true
            })
            ]
    });
});