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
            L.tileLayer('http://{s}.tile.cloudmade.com/3d8eea6648df4f66aa555d92e0a6e6b1/997/256/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
                maxZoom: 18
            }),
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
    
    // add a marker for La Fourchette Gourmande, Le Cannet Des Maures - Restaurant
    L.marker([43.390875,6.342639], {icon: canard}).addTo(map)
    .bindPopup('La Fourchette Gourmande, Le Cannet Des Maures')
    ;//.openPopup();

    $('#wonderfullGoButton').click(function(e) {
        e.preventDefault();

        map.setView([43.480826,6.278687], 6);
    });
    
    
    $('.theme').click(function(e){
        if($(this).hasClass('theme_selected')) {
            $(this).removeClass('theme_selected');
            $(this).find('.btn').removeClass('btn-primary');
            $(this).find('.btn').addClass('disabled');
        } else {
            $(this).addClass('theme_selected');
            $(this).find('.btn').addClass('btn-primary');
            $(this).find('.btn').removeClass('disabled');
        }
    });
});