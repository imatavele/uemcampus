document.querySelector('#check_directions').addEventListener('click', e=>{
	//console.log(todosRotaPontos.features);
	routingControl.remove();//map.removeControl(routingControl());
	var paragem = M.FormSelect.getInstance(document.querySelector('#start_point')).getSelectedValues()[0];
	var filtered = todosRotaPontos.features.filter(f => f.properties.name != null && 
		f.properties.name.toLowerCase().indexOf(paragem.toLowerCase().trim()) != -1)[0].geometry.coordinates[0];
	var paragemLatLng = [filtered[1], filtered[0]];
	var destinoFiltrado = M.FormSelect.getInstance(document.querySelector('#end_point')).getSelectedValues()[0].split('-');
	var salaNome = destinoFiltrado[0].trim();
	var edificio = edificioID(destinoFiltrado[1].trim());
	var sala = todasSalas.features.filter(f => f.properties.nome == salaNome && 
		f.properties.edificio == edificio)[0].geometry.coordinates[0];
	var salaLatLng = [sala[1], sala[0]];
	//console.log(L.latLng(paragemLatLng));
	routingControl.setWaypoints([L.latLng(paragemLatLng), L.latLng(salaLatLng)]).route();
	routingControl.addTo(map);
	document.querySelector('#directions').getElementsByClassName('sidebar-close')[0].click();
	//M.Toast.dismissAll();
	//M.toast({html: 'D: ' + salaNome + ' - ' + edificio, classes: 'rounded'});
});