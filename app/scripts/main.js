require.config({
    paths: {
        jquery: '../components/jquery/jquery',
        bootstrap: 'vendor/bootstrap',
        leaflet: 'vendor/leaflet',
        bootstrapSwitch: 'vendor/bootstrapSwitch'
        
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        bootstrapSwitch: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

require(['app', 'jquery', 'leaflet', 'bootstrap', 'bootstrapSwitch'], function (app, $) {

    console.log($('.alertswitch'));
    $('.switch').on('switch-change', function (e, data) {
        var $el = $(data.el)
          , value = data.value;
        
        if($el.parents('.theme').hasClass('theme_selected')) {
            // alert('OK' + value);
            $el.bootstrapSwitch('setState', value);
        } else {
            $el.bootstrapSwitch('setState', value);
        }
    });

    var canard = L.icon({
        iconUrl: 'images/canard.png',
        shadowUrl: 'images/marker-shadow.png',
        iconSize: [38, 42],
        shadowSize: [55,55],
        shadowAnchor: [20, 55],
        iconAnchor: [38/2, 42],
        popupAnchor: [0, -42]
    });

    var map = L.map('map', {
        center: [46.319261,2.702637],
        zoom: 6,
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
    
    var hotels = L.icon({
        iconUrl: 'images/theme_hotels_35.png',
        iconSize: [35, 42],
        iconAnchor: [35/2, 42],
        popupAnchor: [0, -42]
    });
    
    var nature = L.icon({
        iconUrl: 'images/theme_nature_35.png',
        iconSize: [35, 42],
        iconAnchor: [35/2, 42],
        popupAnchor: [0, -42]
    });
    
    var patrimoine = L.icon({
        iconUrl: 'images/theme_patrimoine_35.png',
        iconSize: [35, 42],
        iconAnchor: [35/2, 42],
        popupAnchor: [0, -42]
    });
    
    var restau = L.icon({
        iconUrl: 'images/theme_restau_35.png',
        iconSize: [35, 42],
        iconAnchor: [35/2, 42],
        popupAnchor: [0, -42]
    });
    
    var terroir = L.icon({
        iconUrl: 'images/theme_terroir_35.png',
        iconSize: [35, 42],
        iconAnchor: [35/2, 42],
        popupAnchor: [0, -42]
    });
    
    
    
    // add a marker for LE CANNET DES MAURES - terroir
    L.marker([43.403052,6.343506], {icon: patrimoine}).addTo(map)
    .bindPopup('LE CANNET DES MAURES')
    ;//.openPopup();
    
    // add a marker for ABBAYE DU THORONET - patrimoine
    L.marker([43.4608,6.263555], {icon: patrimoine}).addTo(map)
    .bindPopup('ABBAYE DU THORONET')
    ;//.openPopup();
    
    // add a marker for Château Sainte-Roseline - terroir
    L.marker([43.474847,6.514009], {icon: terroir}).addTo(map)
    .bindPopup('Château Sainte-Roseline')
    ;//.openPopup();
    
    // add a marker for La Fourchette Gourmande, Le Cannet Des Maures - Restaurant
    L.marker([43.390875,6.342639], {icon: restau}).addTo(map)
    .bindPopup('La Fourchette Gourmande, Le Cannet Des Maures')
    ;//.openPopup();

    $('#wonderfullGoButton').click(function(e) {
        e.preventDefault();
        map.setView([43.39931,6.360294], 12);
    });
    
    $('.theme').click(function(e){
        $(this).find('.switch').bootstrapSwitch('toggleState');
        if($(this).hasClass('theme_selected')) {
            $(this).removeClass('theme_selected');
        } else {
            $(this).addClass('theme_selected');
        }
    });
    
});