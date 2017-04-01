import React, { Component } from 'react';

import MapContainer from './map.js';
import Sidebar from './sidebar.js';

// App component - represents the whole app
export default class App extends Component {
  renderMap() {
    return <MapContainer/>
  }

  render() {
    return (
      <div>
        <header className="l-topbar">
          <h1>Queer Happiness Map</h1>
        </header>
        <div>
          <main role="main">
            {this.renderMap()}
          </main>
          <Sidebar />
        </div>
      </div>
    );
  }
}
