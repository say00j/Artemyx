import React from "react";
import indiaMap from "./assets/india-map.jpeg";

function Country() {
  return (
    <div className="country-page">
      <h1>India Map</h1>

      <img src={indiaMap} alt="India Map" />
    </div>
  );
}

export default Country;