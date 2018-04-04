import React, { Component } from 'react';
import './App.css';

class App extends Component {

  renderDeviceMetrics() {
    let windowWidthDP = window.outerWidth;
    let windowHeightDP = window.outerHeight;
    let windowInnerWidthDP = window.innerWidth;
    let windowInnerHeightDP = window.innerHeight;
    let screenWidthDP = window.screen.width;
    let screenHeightDP = window.screen.height;
    let windowPixelDensity = window.devicePixelRatio;
    let windowWidth = windowWidthDP * windowPixelDensity;
    let windowHeight = windowHeightDP * windowPixelDensity;
    let screenWidth = screenWidthDP * windowPixelDensity;
    let screenHeight = screenHeightDP * windowPixelDensity;
    let pixelDepth = window.screen.pixelDepth;
    let colorDepth = window.screen.colorDepth;
    // let orientation = window.screen.orientation;
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
          Screen Width: {screenWidth}
        </p>
        <p>
          Screen Height: {screenHeight}
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
          Window Inner Width DP: {windowInnerWidthDP}
        </p>
        <p>
          Window Inner Height DP: {windowInnerHeightDP}
        </p>
        <p>
          Screen Width DP: {screenWidthDP}
        </p>
        <p>
          Screen Height DP: {screenHeightDP}
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
