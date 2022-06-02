import React, { Component } from "react";
import Loader from "./Loader/Loader";

class App extends Component {
  state = {
    gallery: [],
    filter: '',
    showLoader: false
  };



  render() {
    return (
      <>
        <Loader />
      </>)
  }
}
  
export default App;