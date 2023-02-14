async function load_sala() {
  	const sala_url = `/poiapi/sala/?in_bbox=${map.getBounds().toBBoxString()}`
  	const response = await fetch(sala_url)
  	const geojson = await response.json()
  	return geojson
}

async function render_sala() {
	if(map.hasLayer(salaLayer)){
    	layerControl.removeLayer(salaLayer);
    	map.removeLayer(salaLayer);
    }
	if(salaJson != null){
    	salaJson = null;
    }
  	salaJson = await load_sala();
  	salaLayer = L.geoJSON(salaJson,{
  		pointToLayer: function (feature, latlng) {
        	
        	return L.circleMarker(latlng, nonSpecificPointStyle);
    	},
	    onEachFeature: salaOnEachFeature
	});
  		
    
   if(salaLayer != null){
   		salaLayer.addTo(map);
   		layerControl.addOverlay(salaLayer, "Salas");
   }
	
}

function salaPopup(e){
  l = e.target;
  f = l.feature;
  
  var popup = L.responsivePopup({ offset: [10,10] }).setContent(`
    <h6>Salas</h6>
    <table>
      ${!f.properties.tipo ? ''
        : f.properties.tipo.length > 0 ? 
        `<tr>
          <th>Tipo</th>
          <td>${f.properties.tipo}</td>
        </tr>` : ''
      }
      ${!f.properties.nome ? ''
        : f.properties.nome.length > 0 ? 
        `<tr>
          <th>Nome</th>
          <td>${f.properties.nome}</td>
        </tr>` : ''
      }
      ${!f.properties.edificio ? ''
        : edificioNome(f.properties.edificio).length > 0 ? 
        `<tr>
          <th>Edifício</th>
          <td>${edificioNome(f.properties.edificio)}</td>
        </tr>` : ''
      }
      ${!f.properties.piso ? ''
        : f.properties.piso.length > 0 ? 
        `<tr>
          <th>Piso</th>
          <td>${f.properties.piso}</td>
        </tr>` : ''
      }
      ${!f.properties.abertura ? ''
        : f.properties.abertura.length > 0 ? 
        `<tr>
          <th>Abertura</th>
          <td>${f.properties.abertura}</td>
        </tr>` : ''
      }
      
    </table>
  `);
  l.bindPopup(popup);
}