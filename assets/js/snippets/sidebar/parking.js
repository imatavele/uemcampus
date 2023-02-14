document.querySelector('#parking_tab').addEventListener('click', e => {
	var parkNames = {};
	Array.from(todosParques.features).forEach(f => {
		//console.log(f.properties.name); 
		parkNames[f.properties.name] = '/static/img/uem-logo.png';
	});
	//console.log(parkNames);
	M.Autocomplete.init(document.querySelector('#pesquisar_parques'), {
            data: parkNames, limit: 5, minLength: 2
        });
});

document.querySelector('#find_park').addEventListener('click', e => {
				
	resetSearch();

	parquesEncontradosLayer = null;
	if(parquesEncontradosJson != undefined && parquesEncontradosJson != null)
		parquesEncontradosJson = null;

	text = document.querySelector('#pesquisar_parques').value;
	
	if (!text){
		M.Toast.dismissAll();
		M.toast({html: 'Digite algo para pesquisar!', classes: 'rounded'});
		document.querySelector('#pesquisar_parques').focus();
	}
	else if(todosParques != null && todosParques.features.length > 0){
		
		parquesEncontradosJson = todosParques.features.filter(f => (f.properties.name != null && f.properties.name.toLowerCase().indexOf(text.trim().toLowerCase()) != -1));

		if(parquesEncontradosJson.length > 0){
			parquesEncontradosLayer = L.geoJSON(parquesEncontradosJson, {
				style: selectedPolygonStyle
			});
			
			try{
				if(parquesEncontradosLayer != undefined && parquesEncontradosLayer != null){
					parquesEncontradosLayer.addTo(map);
					
					map.flyToBounds(parquesEncontradosLayer.getBounds());
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