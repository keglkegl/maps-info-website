import React, { Component } from 'react';
import ol from 'openlayers';
import MenuRight from './MenuRight';

const MapComponent = {
  position: "relative",
  height: "980px",
  verticalAlign: "middle",
  overflow: "hidden",
}

class Map extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    var map = new ol.Map({
      view: this.props.view,
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      controls: [],
      loadTilesWhileAnimating: true,
      target: 'map'
    });
  }

  render() {
    return (
      <div style={MapComponent} classname="map" id="map">
      </div>
    );
  }
}

export default Map;