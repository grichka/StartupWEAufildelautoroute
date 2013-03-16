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

    var canard = L.icon({
        iconUrl: 'images/canard.png',
        iconSize: [38, 42],
        iconAnchor: [0, 21],
        popupAnchor: [18, -21]
    });

    var map = L.map('map', {
        center: [46.619261,2.702637],
        zoom: 5,
        attributionControl: false,
        layers: [
            L.tileLayer('tilesmap/{z}/{x}/{y}.png', {
                attribution: 'OpenStreetMap contributors - Wikipedia contributors - AirFrance',
                //maxZoom: 6,
                // continuousWorld: false,
                // noWrap: true
            })
            ]
    });
    
    // add a marker for ABBAYE DU THORONET - patrimoine
    L.marker([43,4501, 6,3081], {icon: canard}).addTo(map)
    .bindPopup('ABBAYE DU THORONET')
    ;//.openPopup();
    
    // add a marker for LE CANNET DES MAURES - terroir
    L.marker([43.403052,6.343506], {icon: canard}).addTo(map)
    .bindPopup('LE CANNET DES MAURES')
    ;//.openPopup();
    
    // add a marker for Château Sainte-Roseline - terroir
    L.marker([43.474847,6.514009], {icon: canard}).addTo(map)
    .bindPopup('Château Sainte-Roseline')
    ;//.openPopup();
});