{% extends 'base_layout.html' %}
{% load static %}

{% block content %}
<section>
	
	<div id="campus_imap">
		<div id="sidebar" class="sidebar collapsed">
			<!-- Nav tabs -->
	        <div class="sidebar-tabs">
	            <ul role="tablist">
	                <li id="buildings_tab"><a href="#buildings" role="tab"><i class="material-icons">home</i></a></li>
	                <li id="waypoints_tab"><a href="#waypoints" role="tab"><i class="material-icons">place</i></a></li>
	                <li id="parking_tab"><a href="#parking" role="tab"><i class="material-icons">local_parking</i></a></li>
	                <li id="rooms_tab"><a href="#rooms" role="tab"><i class="material-icons">event_seat</i></a></li>
	                <li id="directions_tab"><a href="#directions" role="tab"><i class="material-icons">directions</i></a></li>
	            </ul>
	        </div>
	         <!-- Tab panes -->
	        <div class="sidebar-content">
	            <div class="sidebar-pane" id="buildings">
	                <h1 class="sidebar-header">
	                    Edifícios
	                    <span class="sidebar-close"><i class="material-icons">chevron_left</i></span>
	                </h1><br>
	                <div class="input-field col s12">
		                <i class="material-icons prefix">search</i>
		                <input type="text" name="pesquisar_edificios" id="pesquisar_edificios" autocomplete="off" class="autocomplete">
		                <label for="pesquisar_edificios">Pesquisar edifícios... </label> 
		            </div>
		            <div class="input-field col s12 center">
		                <button class="btn waves-effect waves-light" id="find_building">Pesquisar</button>
		            </div>
	                
	            </div>
	            <div class="sidebar-pane" id="waypoints">
	                <h1 class="sidebar-header">
	                    Pontos de rota
	                    <span class="sidebar-close"><i class="material-icons">chevron_left</i></span>
	                </h1>
	                 <div class="input-field col s12">
		                <i class="material-icons prefix">search</i>
		                <input type="text" name="pesquisar_rotapontos" id="pesquisar_rotapontos" class="autocomplete" autocomplete="off">
		                <label for="pesquisar_rotapontos">Pesquisar pontos de rota... </label> 
		            </div>
		            <div class="input-field col s12 center">
		                <button class="btn waves-effect waves-light" id="find_waypoint">Pesquisar</button>
		            </div>
	                
	            </div>
	            <div class="sidebar-pane" id="parking">
	                <h1 class="sidebar-header">
	                    Parques de estacionamento
	                    <span class="sidebar-close"><i class="material-icons">chevron_left</i></span>
	                </h1>
	                 <div class="input-field col s12">
		                <i class="material-icons prefix">search</i>
		                <input type="text" name="pesquisar_parques" id="pesquisar_parques" class="autocomplete" autocomplete="off">
		                <label for="pesquisar_parques">Pesquisar parques... </label> 
		            </div>
		            <div class="input-field col s12 center">
		                <button class="btn waves-effect waves-light" id="find_park">Pesquisar</button>
		            </div>
	                
	            </div>
	            <div class="sidebar-pane" id="rooms">
	                <h1 class="sidebar-header">
	                    Salas
	                    <span class="sidebar-close"><i class="material-icons">chevron_left</i></span>
	                </h1><br>
	                <div class="input-field col s12">
		                <i class="material-icons prefix">search</i>
		                <input type="text" name="pesquisar_salas" id="pesquisar_salas" autocomplete="off" class="autocomplete">
		                <label for="pesquisar_salas">Pesquisar salas... </label> 
		            </div>
		            <div class="input-field col s12 center">
		                <button class="btn waves-effect waves-light" id="find_room">Pesquisar</button>
		            </div>
	                
	            </div>
	            <div class="sidebar-pane" id="directions">
	                <h1 class="sidebar-header">
	                    Direcções
	                    <span class="sidebar-close"><i class="material-icons">chevron_left</i></span>
	                </h1>
	                
	                <div class="input-field col s12">
                        <i class="material-icons prefix">place</i>
                        <select name="start_point" id="start_point" searchable="Pesquisar">
                            {% for paragem in paragens %}
                            <option value="{{ paragem }}">{{ paragem }}</option>
                            {% endfor %}
                        </select>
                        <label for="start_point">Paragem</label> 
                    </div>
                    <br>
		           <div class="input-field col s12">
                        <i class="material-icons prefix">place</i>
                        <select name="end_point" id="end_point" searchable="Pesquisar">
                            {% for destino in destinos %}
                            <option value="{{ destino }}">{{ destino }}</option>
                            {% endfor %}
                        </select>
                        <label for="end_point">Destino</label> 
                    </div>
		            <div class="input-field col s12 center">
		                <button class="btn waves-effect waves-light" id="check_directions">Ver</button>
		            </div>
	                
	            </div>
	        </div>
		</div>
	</div>
</section>
{% endblock %}
