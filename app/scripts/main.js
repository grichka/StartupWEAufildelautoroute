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
        popupAnchor: [0, -42],
        shadowUrl: 'images/marker-shadow.png',
        shadowSize: [55,55],
        shadowAnchor: [20, 55]
    });
    
    var nature = L.icon({
        iconUrl: 'images/theme_nature_35.png',
        iconSize: [35, 42],
        iconAnchor: [35/2, 42],
        popupAnchor: [0, -42],
        shadowUrl: 'images/marker-shadow.png',
        shadowSize: [55,55],
        shadowAnchor: [20, 55]
    });
    
    var patrimoine = L.icon({
        iconUrl: 'images/theme_patrimoine_35.png',
        iconSize: [35, 42],
        iconAnchor: [35/2, 42],
        popupAnchor: [0, -42],
        shadowUrl: 'images/marker-shadow.png',
        shadowSize: [55,55],
        shadowAnchor: [20, 55]
    });
    
    var restau = L.icon({
        iconUrl: 'images/theme_restau_35.png',
        iconSize: [35, 42],
        iconAnchor: [35/2, 42],
        popupAnchor: [0, -42],
        shadowUrl: 'images/marker-shadow.png',
        shadowSize: [55,55],
        shadowAnchor: [20, 55]
    });
    
    var terroir = L.icon({
        iconUrl: 'images/theme_terroir_35.png',
        iconSize: [35, 42],
        iconAnchor: [35/2, 42],
        popupAnchor: [0, -42],
        shadowUrl: 'images/marker-shadow.png',
        shadowSize: [55,55],
        shadowAnchor: [20, 55]
    });
    
    var natureMarks = [];
    var hotelsMarks = [];
    var terroirMarks = [];
    var patrimoineMarks = [];
    var restaurantsMarks = [];
        
    var pos;
    // add a marker for ABBAYE DU THORONET - patrimoine
    pos = 0;
    patrimoineMarks.push(L.marker([43.4608,6.263555], {icon: patrimoine}).addTo(map)
    .bindPopup('<div><div><center><h1>ABBAYE DU THORONET</h1></center></div><div><center><img src="./images/abbaye.jpg" style="width:80%;" /></center></div><div><p>Le Thoronet est l\'une des plus remarquables abbayes cistercienne du XIIe siècle nichée dans des collines où règnent le chêne vert, le pin, les oliviers et les vignes.</p><h3>Horaires sous réserve</h3><p><ul><li>Ouvert tous les jours</li><li>1er avril au 30 septembre, 10h à 18h30 (10h à 12h et 14h à 18h30 le dimanche)</li><li>1er octobre au 31 mars, 10h à 13h et 14h à 17h (10h à 12h et 1 4h à 17h le dimanche)</li><li>Fermé: 1er janvier, 1er mai, 1er et 11 novembre, 25 décembre</li></ul></p></div><div><img src="./images/like.png" /><button class="btn btn-primary pull-right selectedState" id="Patrimoine_' + pos + '" onClick="markerSelected(this, \'Patrimoine\',' + pos + ');">M\'avertir !</button><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://thoronet.monuments-nationaux.fr/" data-counturl="http://thoronet.monuments-nationaux.fr/" data-text="#abbayeduthoronet" data-size="large" data-count="horizontal"></a></br><div id="fb-like-button" class="fb-like" data-href="https://www.facebook.com/pages/Abbaye-du-Thoronet/121318334590703" data-send="false" data-layout="button_count" data-width="" data-show-faces="false" style=" height: 26px; padding-bottom: 13px; "></div></div>', {minWidth:500})
    );
    
    // add a marker for LE CANNET DES MAURES - terroir
    pos = 0;
    terroirMarks.push(L.marker([43.403052,6.343506], {icon: terroir}).addTo(map)
    .bindPopup('<div><div><center><h1>LE CANNET DES MAURES</h1></center></div><div><center><img src="./images/cannetdesmaures.jpg" style="width:80%;" /></center></div><div><p>Le Vieux Cannet est perché sur une butte de 127 mètres d’altitude et en contrebas, le village moderne et commercial s’organise autour d’un parc de cèdres centenaires.<p><h3>ECONOMIE</h3><p>La société Meilland est une entreprise d\'horticulture d\'envergure internationale, dans la création et l\'obtention de roses. Elle emploie 200 salariés en France et 600 dans le monde. Et reste une société familiale à 100%. La sixième génération est d\'ores et déjà au travail.</p></div><div><img src="./images/like.png" /><button class="btn btn-primary pull-right selectedState" id="Terroir_' + pos + '" onClick="markerSelected(this, \'Terroir\',' + pos + ');">M\'avertir !</button><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://thoronet.monuments-nationaux.fr/" data-counturl="http://thoronet.monuments-nationaux.fr/" data-text="#abbayeduthoronet" data-size="large" data-count="horizontal"></a></br><div id="fb-like-button" class="fb-like" data-href="https://www.facebook.com/pages/Abbaye-du-Thoronet/121318334590703" data-send="false" data-layout="button_count" data-width="" data-show-faces="false" style=" height: 26px; padding-bottom: 13px; "></div></div>', {minWidth:500})
    );
    
    // add a marker for Château Sainte-Roseline - terroir
    pos = 1;
    terroirMarks.push(L.marker([43.474847,6.514009], {icon: terroir}).addTo(map)
    .bindPopup('<div><div><center><h1>Château Sainte-Roseline</h1></center></div><div><center><img src="./images/sainteroseline.jpg" style="width:80%;" /></center></div><div><p>Le Château Sainte-Roseline n’est pas seulement un lieu de production de vin de Provence, le Château renferme tout un ensemble de trésors historiques et architecturaux liés à l’histoire de la région. La Chapelle Sainte Roseline en est le fleuron.</p></div><div><img src="./images/like.png" /><button class="btn btn-primary pull-right selectedState" id="Terroir_' + pos + '" onClick="markerSelected(this, \'Terroir\',' + pos + ');">M\'avertir !</button><a href="https://twitter.com/share" class="twitter-share-button" data-url="http://thoronet.monuments-nationaux.fr/" data-counturl="http://thoronet.monuments-nationaux.fr/" data-text="#abbayeduthoronet" data-size="large" data-count="horizontal"></a></br><div id="fb-like-button" class="fb-like" data-href="https://www.facebook.com/pages/Abbaye-du-Thoronet/121318334590703" data-send="false" data-layout="button_count" data-width="" data-show-faces="false" style=" height: 26px; padding-bottom: 13px; "></div></div>', {minWidth:500})
    );
    
    // add a marker for La Fourchette Gourmande, Le Cannet Des Maures - Restaurant
    pos = 0;
    restaurantsMarks.push(L.marker([43.390875,6.342639], {icon: restau}).addTo(map)
    .bindPopup('La Fourchette Gourmande, Le Cannet Des Maures')
    );
    
    testFb(document, 'script', 'facebook-jssdk');
    
    updatePointPause("Nature", false);
    updatePointPause("Hôtels", false);
    updatePointPause("Terroir", false);
    updatePointPause("Patrimoine", false);
    updatePointPause("Restaurants", false);

    $('#wonderfullGoButton').click(function(e) {
        e.preventDefault();
        map.setView([43.39931,6.360294], 12)
    });
    
    $('.theme').click(function(e){
        if($(this).hasClass('theme_selected')) {
            $(this).removeClass('theme_selected');
            updatePointPause($(this).find('h4').html(), false);
        } else {
            $(this).addClass('theme_selected');
            updatePointPause($(this).find('h4').html(), true);
        }
    });
    
    $('.switch').on('switch-change', function (e, data) {
        var $el = $(data.el)
          , value = data.value;
        
        if($el.parents('.theme').hasClass('theme_selected')) {
            $el.bootstrapSwitch('setState', value);
            if(value) {
                //updatePointPause($el.parents('.theme').find('h4').html(), true);
            } else {
                //updatePointPause($el.parents('.theme').find('h4').html(), false);
            }
        } else {
            $el.bootstrapSwitch('setState', false);
        }
    });
    
    function updatePointPause(theme, show) {
        switch(theme) {
            case "Nature":
                for(var nat in natureMarks) {
                    if(show) {
                        map.addLayer(natureMarksnat);
                    } else {
                        map.removeLayer(natureMarks[nat]);
                    }
                }
                break;
            case "Hôtels":
                for(var hot in hotelsMarks) {
                    if(show) {
                        map.addLayer(hotelsMarks[hot]);
                    } else {
                        map.removeLayer(hotelsMarks[hot]);
                    }
                }
                break;
            case "Terroir":
                for(var ter in terroirMarks) {
                    if(show) {
                        map.addLayer(terroirMarks[ter]);
                    } else {
                        map.removeLayer(terroirMarks[ter]);
                    }
                }
                break;
            case "Patrimoine":
                for(var pat in patrimoineMarks) {
                    if(show) {
                        map.addLayer(patrimoineMarks[pat]);
                    } else {
                        map.removeLayer(patrimoineMarks[pat]);
                    }
                }
                break;
            case "Restaurants":
                for(var res in restaurantsMarks) {
                    if(show) {
                        map.addLayer(restaurantsMarks[res]);
                    } else {
                        map.removeLayer(restaurantsMarks[res]);
                    }
                }
                break;
        }
        
        
    }
    
    var numSelectedMarkers = 0;
    window.markerSelected = function(el, theme, pos) {
        var _isSelected = false;
        if($(el).hasClass('btn-primary')) {
            $(el).removeClass('btn-primary');
            $(el).html('Ne plus m\'avertir!');
            numSelectedMarkers++;
            _isSelected = true;
        } else {
            $(el).addClass('btn-primary');
            $(el).html('M\'avertir!');
            numSelectedMarkers--;
        }
        
        var elemId = $(el).attr('id');
        var elemIdSplit = elemId.split('_');
        var elemTheme = elemIdSplit[0];
        var elemPos = elemIdSplit[1];
        
        switch(elemTheme) {
            case "Nature":
                natureMarks[elemPos].isSelected = _isSelected;
                break;
            case "Hôtels":
                hotelsMarks[elemPos].isSelected = _isSelected;
                break;
            case "Terroir":
                terroirMarks[elemPos].isSelected = _isSelected;
                break;
            case "Patrimoine":
                patrimoineMarks[elemPos].isSelected = _isSelected;
                break;
            case "Restaurants":
                restaurantsMarks[elemPos].isSelected = _isSelected;
                break;
        }
        
        $("#numSelectedMarkers").html(numSelectedMarkers);
    }
    
    map.on('popupopen', function(e) {
        var elemId = $(e.popup._content).find('.selectedState').attr('id');
        var elemIdSplit = elemId.split('_');
        var elemTheme = elemIdSplit[0];
        var elemPos = elemIdSplit[1];
        switch(elemTheme) {
            case "Nature":
                if(natureMarks[elemPos].isSelected) {
                    $('#' + elemId).removeClass('btn-primary');
                    $('#' + elemId).html('Ne plus m\'avertir!');
                }
                break;
            case "Hôtels":
                if(hotelsMarks[elemPos].isSelected) {
                    $('#' + elemId).removeClass('btn-primary');
                    $('#' + elemId).html('Ne plus m\'avertir!');
                }
                break;
            case "Terroir":
                if(terroirMarks[elemPos].isSelected) {
                    $('#' + elemId).removeClass('btn-primary');
                    $('#' + elemId).html('Ne plus m\'avertir!');
                }
                break;
            case "Patrimoine":
                if(patrimoineMarks[elemPos].isSelected) {
                    $('#' + elemId).removeClass('btn-primary');
                    $('#' + elemId).html('Ne plus m\'avertir!');
                }
                break;
            case "Restaurants":
                if(restaurantsMarks[elemPos].isSelected) {
                    $('#' + elemId).removeClass('btn-primary');
                    $('#' + elemId).html('Ne plus m\'avertir!');
                }
                break;
        }
    });

});