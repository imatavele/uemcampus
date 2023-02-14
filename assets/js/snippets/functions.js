function campusOnEachFeature(feature, layer) {
    layer.on({
        click: campusPopup
    });
}

function edificioOnEachFeature(feature, layer) {
    layer.on({
        click: edificioPopup
    });
}

function parqueOnEachFeature(feature, layer) {
    layer.on({
        click: parquePopup
    });
}

function rotaPontoOnEachFeature(feature, layer) {
    layer.on({
        click: rotaPontoPopup
    });
}

function salaOnEachFeature(feature, layer) {
    layer.on({
        click: salaPopup
    });
}

function iconOption(highway){
    var iconUrl = '';
    if (highway == 'bus_stop'){
        iconUrl  = "/static/icons/osm-carto/symbols/highway/bus_stop.svg";
    }else /*if(highway == 'traffic_signals')*/{
        iconUrl  = "/static/icons/osm-carto/symbols/highway/traffic_light.svg";
    }
    return {
        icon: L.icon({
            iconUrl: iconUrl,
            iconSize: [15, 15],
            //inconAnchor: [22, 94],
            //popupAnchor: [-3, -76]
        })
    }
}

function resetSearch(){
    if(edificiosEncontrados != null)
        map.removeLayer(edificiosEncontrados);

    if(rotaPontosEncontradosLayer != null)
        map.removeLayer(rotaPontosEncontradosLayer);

    if(parquesEncontradosLayer != null)
        map.removeLayer(parquesEncontradosLayer);

    if(salasEncontradasLayer != null)
        map.removeLayer(salasEncontradasLayer);
}

function edificioID(nome){
    var edificio = todosEdificios.features.filter(f => f.properties.name != null &&
        f.properties.name.toLowerCase().indexOf(nome.toLowerCase().trim()) != -1)[0];
    
    return edificio.id;
}

function edificioNome(id){
    var edificio = todosEdificios.features.filter(f => f.id == id)[0];
    
    return edificio.properties.name;
}