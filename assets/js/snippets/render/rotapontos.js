async function load_rotaponto() {
  	const rotaponto_url = `/api/rotaponto/?in_bbox=${map.getBounds().toBBoxString()}`
  	const response = await fetch(rotaponto_url)
  	const geojson = await response.json()
  	return geojson
}

async function render_rotaponto() {
	//if(map.hasLayer(rotaPontoCluster)){
	if(map.hasLayer(rotaPontoLayer)){
		/*rotaPontoCluster.removeLayer(rotaPontoLayer);
    	layerControl.removeLayer(rotaPontoCluster);*/
    	layerControl.removeLayer(rotaPontoLayer);
    	map.removeLayer(rotaPontoLayer);
    }
	if(rotaPontoJson != null){
    	rotaPontoJson = null;
    }
  	rotaPontoJson = await load_rotaponto();

  	rotaPontoLayer = L.geoJSON(rotaPontoJson,{
	    onEachFeature: rotaPontoOnEachFeature,
	    pointToLayer: function (feature, latlng) {
        	var test = feature.properties.highway == 'bus_stop' || feature.properties.highway == 'traffic_signals';
        	
        	return test ? L.marker(latlng, iconOption(feature.properties.highway)) : L.circleMarker(latlng, nonSpecificPointStyle);
    	}
	});
  		
    
   if(rotaPontoLayer != null){
   		/*rotaPontoCluster.addLayer(rotaPontoLayer);
   		rotaPontoCluster.addTo(map);*/
   		rotaPontoLayer.addTo(map);
   		//layerControl.addOverlay(rotaPontoCluster, "Pontos de rota");
   		layerControl.addOverlay(rotaPontoLayer, "Pontos de rota");
   		//console.log(campusLayer.getBounds());
   		//console.log(rotaPontoJson.properties)
   }else{
   	console.log('rotaponto == null')
   }
	
}

function rotaPontoPopup(e){
  l = e.target;
  f = l.feature;
  
  var popup = L.responsivePopup({ offset: [10,10] }).setContent(`
    <h6>Pontos de rota</h6>
    <table>
      <tr>
        <th></th>
        <td>${!f.properties.highway ? 'Ponto não classificado'
        : f.properties.highway == 'bus_stop' ? 'Paragem de transporte público' 
        : 'Semáforo'}</td>
      </tr>
      ${!f.properties.name ? ''
        : f.properties.name.length > 0 ? 
        `<tr>
          <th>Nome</th>
          <td>${f.properties.name}</td>
        </tr>` : ''
      }
      ${!f.properties.addr_stree ? ''
        : f.properties.addr_stree.length > 0 ? 
        `<tr>
          <th>Via</th>
          <td>${f.properties.addr_stree}</td>
        </tr>` : ''
      }
      ${!f.properties.addr_distr ? ''
        : f.properties.addr_distr.length > 0 ? 
        `<tr>
          <th>Distrito</th>
          <td>${f.properties.addr_distr}</td>
        </tr>` : ''
      }
      ${!f.properties.addr_subdi ? ''
        : f.properties.addr_subdi.length > 0 ? 
        `<tr>
          <th>Bairro</th>
          <td>${f.properties.addr_subdi}</td>
        </tr>` : ''
      }
      <tr>
        <th>Sombra</th>
        <td>${f.properties.shelter == 'yes' ? 'Sim' : 'Não'}</td>
      </tr>
      <tr>
        <th>Banco</th>
        <td>${f.properties.bench == 'yes' ? 'Sim' : 'Não'}</td>
      </tr>
      
      
    </table>
  `);
  l.bindPopup(popup);
}