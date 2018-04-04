import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    windowWidthDP: -1,
    windowHeightDP: -1,
    windowInnerWidthDP: -1,
    windowInnerHeightDP: -1,
    screenWidthDP: -1,
    screenHeightDP: -1,
    windowPixelDensity: -1,
    windowWidth: -1,
    windowHeight: -1,
    screenWidth: -1,
    screenHeight: -1,
    pixelDepth: -1,
    colorDepth: -1,
  }

  constructor(props){
    super(props);

    this.updateDisplayMetrics = this.updateDisplayMetrics.bind(this);
  }

  componentDidMount() {
    this.updateDisplayMetrics();
    window.addEventListener('resize', this.updateDisplayMetrics);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDisplayMetrics);
  }

  updateDisplayMetrics() {
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

    this.setState({
      windowWidthDP: windowWidthDP,
      windowHeightDP: windowHeightDP,
      windowInnerWidthDP: windowInnerWidthDP,
      windowInnerHeightDP: windowInnerHeightDP,
      screenWidthDP: screenWidthDP,
      screenHeightDP: screenHeightDP,
      windowPixelDensity: windowPixelDensity,
      windowWidth: windowWidth,
      windowHeight: windowHeight,
      screenWidth: screenWidth,
      screenHeight: screenHeight,
      pixelDepth: pixelDepth,
      colorDepth: colorDepth,
    });
  }

  renderDeviceMetrics() {
    let userAgent = navigator.userAgent;

    return (
      <div>
        <p>
          Window Width (window.outerWidth * window.devicePixelRatio): {this.state.windowWidth}
        </p>
        <p>
          Window Height (window.outerHeight * window.devicePixelRatio): {this.state.windowHeight}
        </p>
        <p>
          Screen Width (window.screen.width * window.devicePixelRatio): {this.state.screenWidth}
        </p>
        <p>
          Screen Height (window.screen.height * window.devicePixelRatio): {this.state.screenHeight}
        </p>
        <p>
          Window Pixel Density (window.devicePixelRatio): {this.state.windowPixelDensity}
        </p>
        <p>
          Window Width DP (window.outerWidth): {this.state.windowWidthDP}
        </p>
        <p>
          Window Height DP (window.outerHeight): {this.state.windowHeightDP}
        </p>
        <p>
          Window Inner Width DP (window.innerWidth): {this.state.windowInnerWidthDP}
        </p>
        <p>
          Window Inner Height DP (window.innerHeight): {this.state.windowInnerHeightDP}
        </p>
        <p>
          Screen Width DP (window.screen.width): {this.state.screenWidthDP}
        </p>
        <p>
          Screen Height DP (window.screen.height): {this.state.screenHeightDP}
        </p>
        <p>
          Color Depth (window.screen.colorDepth): {this.state.colorDepth}
        </p>
        <p>
          Pixel Depth (window.screen.pixelDepth): {this.state.pixelDepth}
        </p>
        <p>
          User Agent (navigator.userAgent): {userAgent}
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
