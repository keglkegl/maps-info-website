import React, { Component } from 'react';
import ol from 'openlayers';
import Map from './Map';
import MenuRight from './MenuRight';

class App extends Component {
	constructor(props){
		super(props);
		var ljubljana = ol.proj.fromLonLat([14.5057515, 46.0569465]);
		this.state = {
		}
		this.newPosition = null;
		this.view = new ol.View({
      		center: ljubljana,
     		zoom: 14
    	})

	}

	changePosition(coordinates){
		this.newPosition = ol.proj.fromLonLat(coordinates);
		this.view.animate({
			center: this.newPosition,
			zoom: 19,
			duration: 2000
		});
		return;
	}

  	render() {
    	return (
      		<div>
        		<Map 
        			view={this.view}
        		/> 
        		<MenuRight changePosition={(coordinates) => this.changePosition(coordinates)}/>      
      		</div>
    	);
  	}
}

export default App;