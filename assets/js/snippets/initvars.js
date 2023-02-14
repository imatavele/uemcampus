if(document.querySelector('#campus_imap')){
	var map = L.map('campus_imap'/*, {center: [32.5985525, -25.950371], zoom: 10}*/);
	map.fitBounds(L.latLngBounds([[-25.9457918, 32.6058273],[-25.9549541, 32.5912714]]));

	var campusJson = null, campusLayer = null, layerControl = L.control.layers();
	var edificioJson = null, edificioLayer = null; 
	var parqueJson = null, parqueLayer = null; 
	var rotaPontoJson = null, rotaPontoLayer = null; 
	var edificiosEncontrados = null, text = '', foundBuildings = null;
	var parquesEncontradosJson = null, parquesEncontradosLayer = null;
	var salaJson = null, salaLayer = null;
	var rotaPontosEncontradosJson = null, rotaPontosEncontradosLayer = null;
	var salasEncontradasJson = null, salasEncontradasLayer = null;
	var todosEdificios = null, todosParques = null, todosRotaPontos = null;
	var todasSalas = null;
	
	var routingControl = L.Routing.control({position: 'topleft'});

	var selectedPolygonStyle = {
    	weight: 3,
        opacity: 0.6,
        color: '#f00',
        dashArray: '4',
        fillColor: "#ffffff",
        fillOpacity: 0.0
	};

	var foundPointStyle = {
	    radius: 10,
	    fillColor: "#339933",
	    color: "#f00",
	    weight: 1,
	    opacity: 1,
	    fillOpacity: 0
	};

	var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
	osmAttr = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', 
	osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

	var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr}),
		satellite  = L.tileLayer(mbUrl, {id: 'mapbox.satellite',   attribution: mbAttr}),
		osm  = L.tileLayer(osmUrl, {attribution: osmAttr});

	var rotaPontoCluster = L.markerClusterGroup({
		showCoverageOnHover: false,
		/*chunkedLoading: true,
		iconCreateFunction: function(cluster) {
        var clusterSize = "small";
        if (cluster.getChildCount() >= 10) {
            clusterSize = "medium";
        }
        return new L.DivIcon({
            html: '<div><span>' + cluster.getChildCount() + '</span></div>',
            className: 'marker-cluster marker-cluster-' + clusterSize,
            iconSize: new L.Point(10, 10)
        });
    	}*/
    });

    var nonSpecificPointStyle = {
	    radius: 4,
	    fillColor: "red",
	    color: "#000",
	    weight: 1,
	    opacity: 1,
	    fillOpacity: 0.8
	};

	var cmmAttr = '<a href="https://www.cmm.gov.mz">CMM</a>';
	var mtAttr = '<a href="https://www.metop.co.mz">Metop</a>';
	var baseLayers = {
		"Mapbox Grayscale": grayscale,
		"Mapbox Streets": streets,
		"Mapbox Satellite": satellite
	};
}
