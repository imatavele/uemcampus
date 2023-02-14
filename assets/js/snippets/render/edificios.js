async function load_edificio() {
  	const edificio_url = `/api/edificio/?in_bbox=${map.getBounds().toBBoxString()}`
  	const response = await fetch(edificio_url)
  	const geojson = await response.json()
  	return geojson
}

async function render_edificio() {
	if(map.hasLayer(edificioLayer)){
    	layerControl.removeLayer(edificioLayer);
    }
	if(edificioJson != null){
    	edificioJson = null;
    }
  	edificioJson = await load_edificio();
    console.log(edificioJson);
  	edificioLayer = L.geoJSON(edificioJson,{
  		style: {
    	color: "rgba(136, 0, 21, 0.3)",
    	fillColor: "yellow",
    	fillOpacity: "0.3", 
    	opacity: "0.5", 
    	weight: "1.0"
	    },
	    onEachFeature: edificioOnEachFeature
	});
  		
    
   if(edificioLayer != null){
   		edificioLayer.addTo(map);
   		layerControl.addOverlay(edificioLayer, "Edifícios");
   		//console.log(campusLayer.getBounds());
   }
	
}

function edificioPopup(e){
  l = e.target;
  f = l.feature;
  console.log(f.properties);
  var popup = L.responsivePopup({ offset: [10,10] }).setContent(`
    <h6>Edifício</h6>
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
    <p class="center"><a href="/bdg/edificio/editar/${f.id}">Editar</a></p>
  `);
  l.bindPopup(popup);
}


