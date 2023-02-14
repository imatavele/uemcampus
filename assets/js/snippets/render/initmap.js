if(document.querySelector('#campus_imap')){
	map.on("moveend", e => {
		render_rotaponto();
		render_edificio();
		render_parque();
		render_campus();
		render_sala();
	});
	map.on('layerremove', layerChanged);
	map.on('layeradd', layerChanged);

	function layerChanged(){
		/*if(!map.hasLayer(campusLayer))
			console.log('Campus layer was removed')
		else{
			console.log('Campus layer was added')
		}*/
	}
	
	render_rotaponto();
	render_edificio();
	render_parque();
	render_campus();
	render_sala();
	load_all_data();
	
	map.zoomControl.setPosition('topright');
	
	layerControl.addBaseLayer(osm, "Open Street Map");
	layerControl.addBaseLayer(satellite, "Mapbox Satélite");
	layerControl.addTo(map);

	map.addLayer(osm);
	//map.addLayer(campusLayer);
	L.control.locate({
	    position: 'topright',
	    flyTo: true,
	    strings: {
	        title: "Zoom à minha localização!"
	    }
	}).addTo(map);

	var sidebar = L.control.sidebar('sidebar').addTo(map);
};