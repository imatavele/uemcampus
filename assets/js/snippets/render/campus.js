async function load_campus() {
  	const campus_url = `/api/campus/?in_bbox=${map.getBounds().toBBoxString()}`
  	const response = await fetch(campus_url)
  	const geojson = await response.json()
  	return geojson
}
async function render_campus() {
    if(map.hasLayer(campusLayer)){
    	layerControl.removeLayer(campusLayer);
    }
    if(campusJson != null){
    	campusJson = null;
    }
  	campusJson = await load_campus();
  	//console.log(campusJson);
  	campusLayer = L.geoJSON(campusJson,{
  		  style: {
      	color: "black",
      	fillColor: "rgba(0, 255, 0, 0.01)",
      	fillOpacity: "0", 
      	opacity: "1.0", 
      	weight: "1.5"
  	    },
  	    onEachFeature: campusOnEachFeature
    });
  		//onEachFeature: equipamentoOnEachFeature,
  		/*pointToLayer: function (feature, latlng) {
        	//return L.circleMarker(latlng, geojsonMarkerOptions(feature));
        	return L.marker(latlng, iconOption(feature.properties.classe));
        	/*return L.marker(latlng, {
	        		icon: L.icon({
					iconUrl: "{% static 'icons/osm-carto/symbols/tourism/map.svg' %}",
					iconSize: [70, 70]
				})
        	});*/
    	//}*/
  	//});

  	//console.log(campusLayer==null);
    
    if(campusLayer != null){
   		//map.fitBounds(campusLayer.getBounds());
   		campusLayer.addTo(map);
   		layerControl.addOverlay(campusLayer, "Campus");
   		//console.log(campusLayer.getBounds());
    }	
}

function campusPopup(e){
  l = e.target;
  f = l.feature;
  
  var popup = L.responsivePopup({ offset: [10,10] }).setContent(`
    <h6>Campus</h6>
    <table>
      ${!f.properties.name ? ''
        : f.properties.name.length > 0 ? 
        `<tr>
          <th>Designação</th>
          <td>${f.properties.name}</td>
        </tr>` : ''
      }
      ${!f.properties.addr_city ? ''
        : f.properties.addr_city.length > 0 ? 
        `<tr>
          <th>Cidade</th>
          <td>${f.properties.addr_city}</td>
        </tr>` : ''
      }
      
      ${!f.properties.addr_stree ? ''
        : f.properties.addr_stree.length > 0 ? 
        `<tr>
          <th>Endereço</th>
          <td>${f.properties.addr_stree}</td>
        </tr>` : ''
      }
      
      ${!f.properties.website ? ''
        : f.properties.website.length > 0 ? 
        `<tr>
          <th>Website</th>
          <td><a href="${f.properties.website}" target="_blank">${f.properties.website}</a></td>
        </tr>` : ''
      }
      
      ${!f.properties.area_ha ? ''
        : f.properties.area_ha.toString().length > 0 ? 
        `<tr>
          <th>Área</th>
          <td>${f.properties.area_ha} ha</td>
        </tr>` : ''
      }
    </table>
  `);
  l.bindPopup(popup);
}