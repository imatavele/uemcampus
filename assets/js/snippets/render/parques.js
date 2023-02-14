async function load_parque() {
  	const parque_url = `/api/parque/?in_bbox=${map.getBounds().toBBoxString()}`
  	const response = await fetch(parque_url)
  	const geojson = await response.json()
  	return geojson
}



async function render_parque() {
	if(map.hasLayer(parqueLayer)){
    	layerControl.removeLayer(parqueLayer);
    }
	if(parqueJson != null){
    	parqueJson = null;
    }
  	parqueJson = await load_parque();
  	parqueLayer = L.geoJSON(parqueJson,{
  		style: {
    	color: "brown",
    	fillColor: "brown",
    	fillOpacity: "0.1", 
    	opacity: "0.5", 
    	weight: "1.0"
	    },
	    onEachFeature: parqueOnEachFeature
	});
  		
    
   if(parqueLayer != null){
   		parqueLayer.addTo(map);
   		layerControl.addOverlay(parqueLayer, "Parques");
   		//console.log(campusLayer.getBounds());
   }
	
}

function parquePopup(e){
  l = e.target;
  f = l.feature;
  
  var popup = L.responsivePopup({ offset: [10,10] }).setContent(`
    <h6>Parque de estacionamento</h6>
    <table>
      ${!f.properties.name ? ''
        : f.properties.name.length > 0 ? 
        `<tr>
          <th>Designação</th>
          <td>${f.properties.name}</td>
        </tr>` : ''
      }
    
      ${!f.properties.area_m2 ? ''
        : f.properties.area_m2.toString().length > 0 ? 
        `<tr>
          <th>Área</th>
          <td>${f.properties.area_m2} m<sup>2</sup></td>
        </tr>` : ''
      }
    </table>
  `);
  l.bindPopup(popup);
}