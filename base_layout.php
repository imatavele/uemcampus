{% load static %}
<!DOCTYPE html>
<html>

<head>
	<title>Geocampus</title>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="Mapa Digital do Campus da UEM"/>
  	<meta name="keywords" content="SIG, Cartografia, Teledetecção, Geodesia, Fotogrametria, Moçambique">
    <meta name="author" content="Israel Marcos Matavele">
    <meta name="robots" content="index, follow">

	<link href="{% static 'fonts/materialicons.css' %}" rel="stylesheet">
    <link type="text/css" href="{% static 'css/materialize.min.css' %}" rel="stylesheet" media="screen,projection"/>
    <link rel="icon" type="image/png" href="{% static 'img/uem-logo.png' %}">
    <link rel="stylesheet" type="text/css" href="{% static 'leaflet/leaflet.css' %}">
    <link rel="stylesheet" type="text/css" href="{% static 'leaflet/lib/routing-machine/leaflet-routing-machine.css' %}">
    <link rel="stylesheet" type="text/css" href="{% static 'leaflet/lib/sidebar/leaflet-sidebar.min.css' %}">
   
    <link rel="stylesheet" type="text/css" href="{% static 'leaflet/MarkerCluster.css' %}">
   
	<link rel="stylesheet" type="text/css" href="{% static 'leaflet/MarkerCluster.Default.css' %}">
	<link rel="stylesheet" type="text/css" href="{% static 'leaflet/locate/L.Control.Locate.min.css' %}">
	<link rel="stylesheet" type="text/css" href="{% static 'leaflet/lib/popup/leaflet.responsive.popup.css' %}">
	
	<link rel="stylesheet" href="{% static 'css/styles.css' %}">


</head>
<body>
	{% include 'includes/header.html' %}
    <main>
    	{% block content %}
    	{% endblock %}
	</main>
	{% include 'includes/footer.html' %}
<script type="text/javascript" src="{% static 'js/materialize.min.js' %}"></script>
<script type="text/javascript" src="{% static 'js/MaterilizeSelect.js' %}"></script>
<script type="text/javascript" src="{% static 'js/jquery.min.js' %}"></script>
<script src="{% static 'leaflet/leaflet.js' %}"></script>
<script src="{% static 'leaflet/lib/sidebar/leaflet-sidebar.min.js' %}"></script>
<script src="{% static 'leaflet/lib/routing-machine/leaflet-routing-machine.min.js' %}"></script>
<script type="text/javascript" src="{% static 'leaflet/lib/popup/leaflet.responsive.popup.js' %}"></script>
<script type="text/javascript" src="{% static 'js/turf.min.js' %}"></script>
<script src="{% static 'leaflet/leaflet.markercluster.js' %}"></script>
<script src="{% static 'leaflet/locate/L.Control.Locate.min.js' %}"></script>
<script type="text/javascript" src="{% static 'js/custom.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/initvars.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/functions.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/render/rotapontos.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/render/edificios.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/render/parques.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/render/campus.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/render/salas.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/render/allfeatures.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/render/initmap.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/sidebar/parking.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/sidebar/buildings.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/sidebar/waypoints.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/sidebar/rooms.js' %}"></script>
<script type="text/javascript" src="{% static 'js/snippets/sidebar/directions.js' %}"></script>
</body>
</html>