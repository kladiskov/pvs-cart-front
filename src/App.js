import React, { Component } from "react";

import Layout from "./components/Layout/Layout";
import LandingView from "./containers/products/LandingView";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <LandingView />
        </Layout>
      </div>
    );
  }
}

export default App;
