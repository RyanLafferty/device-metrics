import React, { Component } from 'react';
import './App.css';

class App extends Component {

  renderDeviceMetrics() {
    let windowWidthDP = window.outerWidth;
    let windowHeightDP = window.outerHeight;
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;
    let windowPixelDensity = window.devicePixelRatio;
    let windowWidth = windowWidthDP * windowPixelDensity;
    let windowHeight = windowHeightDP * windowPixelDensity;
    let pixelDepth = window.screen.pixelDepth;
    let colorDepth = window.screen.colorDepth;
    let orientation = window.screen.orientation;
    let userAgent = navigator.userAgent;

    return (
      <div>
        <p>
          Window Width: {windowWidth}
        </p>
        <p>
          Window Height: {windowHeight}
        </p>
        <p>
          Window Pixel Density: {windowPixelDensity}
        </p>
        <p>
          Window Width DP: {windowWidthDP}
        </p>
        <p>
          Window Height DP: {windowHeightDP}
        </p>
        <p>
          Screen Width: {screenWidth}
        </p>
        <p>
          Screen Width: {screenHeight}
        </p>
        <p>
          Window Width: {windowWidth}
        </p>
        <p>
          Orientation: {orientation}
        </p>
        <p>
          Color Depth: {colorDepth}
        </p>
        <p>
          Pixel Depth: {pixelDepth}
        </p>
        <p>
          User Agent: {userAgent}
        </p>
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Device Metrics</h1>
        </header>
        <div className="App-intro">
          {this.renderDeviceMetrics()}
        </div>
      </div>
    );
  }
}

export default App;
