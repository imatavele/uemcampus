document.querySelector('#rooms_tab').addEventListener('click', e => {
	var roomNames = {};
	Array.from(todasSalas.features).forEach(f => {
		//console.log(f.properties.name); 
		roomNames[f.properties.nome] = '/static/img/uem-logo.png';
	});
	//console.log(parkNames);
	M.Autocomplete.init(document.querySelector('#pesquisar_salas'), {
            data: roomNames, limit: 5, minLength: 1
        });
});

document.querySelector('#find_room').addEventListener('click', e => {
				
	resetSearch();

	salasEncontradasLayer = null;
	if(salasEncontradasJson != undefined && salasEncontradasJson != null)
		salasEncontradasJson = null;

	text = document.querySelector('#pesquisar_salas').value;
	
	if (!text){
		M.Toast.dismissAll();
		M.toast({html: 'Digite algo para pesquisar!', classes: 'rounded'});
		document.querySelector('#pesquisar_salas').focus();
	}
	else if(todasSalas != null && todasSalas.features.length > 0){
		
		salasEncontradasJson = todasSalas.features.filter(f => (f.properties.nome != null && f.properties.nome.toLowerCase().indexOf(text.trim().toLowerCase()) != -1));

		if(salasEncontradasJson.length > 0){
			salasEncontradasLayer = L.geoJSON(salasEncontradasJson, {
				pointToLayer: function (feature, latlng) {
		        	return L.circleMarker(latlng, foundPointStyle);
		    	}
			});
			
			try{
				if(salasEncontradasLayer != undefined && salasEncontradasLayer != null){
					salasEncontradasLayer.addTo(map);
					
					map.flyToBounds(salasEncontradasLayer.getBounds());
					document.querySelector('#parking').getElementsByClassName('sidebar-close')[0].click();
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