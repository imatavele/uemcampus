document.querySelector('#waypoints_tab').addEventListener('click', e => {
	var wps_keywords = {}; //wps - waypoints search
	Array.from(todosRotaPontos.features).forEach(f => {
		//console.log(f.properties.name); 
		if(!wps_keywords.hasOwnProperty(f.properties.name))
			wps_keywords[f.properties.name] = '/static/img/uem-logo.png';
		if(!wps_keywords.hasOwnProperty(f.properties.addr_stree))
			wps_keywords[f.properties.addr_stree] = '/static/img/uem-logo.png';
		if(!wps_keywords.hasOwnProperty(f.properties.addr_distr))
			wps_keywords[f.properties.addr_distr] = '/static/img/uem-logo.png';
		if(!wps_keywords.hasOwnProperty(f.properties.addr_subdi))
			wps_keywords[f.properties.addr_subdi] = '/static/img/uem-logo.png';
	});
	//console.log(wps_keywords);
	M.Autocomplete.init(document.querySelector('#pesquisar_rotapontos'), {
            data: wps_keywords, limit: 5, minLength: 2
        });
});

document.querySelector('#find_waypoint').addEventListener('click', e => {
				
	resetSearch();

	rotaPontosEncontradosLayer = null;
	if(rotaPontosEncontradosJson != undefined && rotaPontosEncontradosJson != null)
		rotaPontosEncontradosJson = null;

	text = document.querySelector('#pesquisar_rotapontos').value;
	
	if (!text){
		M.Toast.dismissAll();
		M.toast({html: 'Digite algo para pesquisar!', classes: 'rounded'});
		document.querySelector('#pesquisar_rotapontos').focus();
	}
	else if(todosRotaPontos != null && todosRotaPontos.features.length > 0){
		
		rotaPontosEncontradosJson = todosRotaPontos.features.filter(f => (f.properties.name != null && f.properties.name.toLowerCase().indexOf(text.trim().toLowerCase()) != -1) || (f.properties.addr_stree != null && f.properties.addr_stree.toLowerCase().indexOf(text.trim().toLowerCase()) != -1) || (f.properties.addr_distr != null && f.properties.addr_distr.toLowerCase().indexOf(text.trim().toLowerCase()) != -1) || (f.properties.addr_subdi != null && f.properties.addr_subdi.toLowerCase().indexOf(text.trim().toLowerCase()) != -1));

		if(rotaPontosEncontradosJson.length > 0){
			rotaPontosEncontradosLayer = L.geoJSON(rotaPontosEncontradosJson, {
				pointToLayer: function (feature, latlng) {
		        	return L.circleMarker(latlng, foundPointStyle);
		    	}
			});
			
			try{
				if(rotaPontosEncontradosLayer != undefined && rotaPontosEncontradosLayer != null){
					rotaPontosEncontradosLayer.addTo(map);
					
					map.flyToBounds(rotaPontosEncontradosLayer.getBounds());
					document.querySelector('#waypoints').getElementsByClassName('sidebar-close')[0].click();
				}
			}catch(error){
				console.log(error);
				M.Toast.dismissAll();

				M.toast({html: 'Nenhum ponto encontrado na pesquisa. Tente outra expressão', classes: 'rounded'});
			}
		}else{
			
			M.Toast.dismissAll();

			M.toast({html: 'Nenhum ponto encontrado na pesquisa. Tente outra expressão', classes: 'rounded'});
		}
		
	}else{
		M.Toast.dismissAll();

		M.toast({html: 'Nenhum ponto encontrado para pesquisar', classes: 'rounded'});
	}
});