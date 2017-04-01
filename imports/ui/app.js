import React, { Component } from 'react';

import MapContainer from './map.js';

// App component - represents the whole app
export default class App extends Component {
  renderMap() {
    return <MapContainer/>
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Queer Happiness Map</h1>
        </header>

        <div>
          {this.renderMap()}
        </div>
      </div>
    );
  }
}
