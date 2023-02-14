async function getGeoJson(url){
	const response = await fetch(url)
  	const geojson = await response.json()
  	return geojson
}

async function load_all_data(){
	todosEdificios = await getGeoJson('/api/edificio/');
	todosParques = await getGeoJson('/api/parque/');
	todosRotaPontos = await getGeoJson('/api/rotaponto/');
	todasSalas = await getGeoJson('/poiapi/sala/');
}