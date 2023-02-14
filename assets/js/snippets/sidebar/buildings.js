document.querySelector('#buildings_tab').addEventListener('click', e => {
	var buildingNames = {};
	Array.from(todosEdificios.features).forEach(f => {
		//console.log(f.properties.name); 
		if (f.properties.name != null)
			buildingNames[f.properties.name] = '/static/img/uem-logo.png';
	});
	//console.log(parkNames);
	M.Autocomplete.init(document.querySelector('#pesquisar_edificios'), {
            data: buildingNames, limit: 5, minLength: 2
        });
});

document.querySelector('#find_building').addEventListener('click', e => {
				
	resetSearch();

	edificiosEncontrados = null;
	if(foundBuildings != undefined && foundBuildings != null)
		foundBuildings = null;

	text = document.querySelector('#pesquisar_edificios').value;
	
	if (!text){
		M.Toast.dismissAll();
		M.toast({html: 'Digite algo para pesquisar!', classes: 'rounded'});
		document.querySelector('#pesquisar_edificios').focus();
	}
	else if(todosEdificios != null && todosEdificios.features.length > 0){
		
		foundBuildings = todosEdificios.features.filter(f => f.properties.name != null && f.properties.name.toLowerCase().indexOf(text.trim().toLowerCase()) != -1);

		if(foundBuildings.length > 0){
			edificiosEncontrados = L.geoJSON(foundBuildings, {
	    		style: selectedPolygonStyle
			});
			
			try{
				if(edificiosEncontrados != undefined && edificiosEncontrados != null){
					edificiosEncontrados.addTo(map);
					
					map.flyToBounds(edificiosEncontrados.getBounds());
					document.querySelector('#buildings').getElementsByClassName('sidebar-close')[0].click();
				}
			}catch(error){
				console.log(error);
				M.Toast.dismissAll();

				M.toast({html: 'Nenhum edifício encontrado na pesquisa. Tente outra expressão', classes: 'rounded'});
			}
		}else{
			
			M.Toast.dismissAll();

			M.toast({html: 'Nenhum edifício encontrado na pesquisa. Tente outra expressão', classes: 'rounded'});
		}
		
	}else{
		M.Toast.dismissAll();

		M.toast({html: 'Nenhum edifício encontrado para pesquisar', classes: 'rounded'});
	}
});