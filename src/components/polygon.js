import React from 'react';

let Polygon = React.createClass({
  componentDidMount() {
    let coordinates = this.props.coordinates.map((coordinate) => {
      return new google.maps.LatLng(coordinate[0], coordinate[1]);
    });

    let polygon = new google.maps.Polygon({
      map: this.props.map,
      paths: coordinates,
      strokeColor: this.props.strokeColor || '#BBD8E9',
      strokeOpacity: this.props.strokeOpactiy || 0.8,
      strokeWeight: this.props.strokeWeight || 3,
      fillColor: this.props.fillColor || '#BBD8E9',
      fillOpacity: this.props.fillOpacity || 0.35
    });
  }

  render() {
    return null
  }
});

export default Polygon;
