import React, { useState } from "react";
import L from "leaflet";
import MQ from "mapquest";
import "leaflet/dist/leaflet.css";

function Map() {
  const [map, setMap] = useState(null);

  function runDirection(start, end) {
    // delete current map layer
    if (map) {
      map.eachLayer((layer) => {
        map.removeLayer(layer);
      });
    }

    // creating new map layer
    const newMap = L.map("map").setView([10.8119, 106.834873], 12);
    setMap(newMap);

    const mqLayer = MQ.mapLayer();
    mqLayer.addTo(newMap);

    var dir = MQ.routing.directions();

    dir.route({
      locations: [start, end],
    });

    const CustomRouteLayer = MQ.Routing.RouteLayer.extend({
      createStartMarker: (location) => {
        var custom_icon;
        var marker;

        custom_icon = L.icon({
          iconUrl: "img/red.png",
          iconSize: [20, 29],
          iconAnchor: [10, 29],
          popupAnchor: [0, -29],
        });

        marker = L.marker(location.latLng, { icon: custom_icon }).addTo(newMap);

        return marker;
      },

      createEndMarker: (location) => {
        var custom_icon;
        var marker;

        custom_icon = L.icon({
          iconUrl: "img/blue.png",
          iconSize: [20, 29],
          iconAnchor: [10, 29],
          popupAnchor: [0, -29],
        });

        marker = L.marker(location.latLng, { icon: custom_icon }).addTo(newMap);

        return marker;
      },
    });

    new CustomRouteLayer({
      directions: dir,
      fitBounds: true,
    }).addTo(newMap);
  }

  function submitForm(event) {
    event.preventDefault();

    // getting form data
    const start = document.getElementById("start").value;
    const end = document.getElementById("destination").value;

    // run directions function
    runDirection(start, end);

    // reset form
    document.getElementById("form").reset();
  }

  return (
    <>
      <div
        id="map"
        style={{ height: "100vh", width: "100%", position: "relative" }}
      ></div>
      <div className="formBlock">
        <form id="form" onSubmit={submitForm}>
          <input
            type="text"
            name="start"
            className="input"
            id="start"
            placeholder="Choose starting point"
          />
          <input
            type="text"
            name="end"
            className="input"
            id="destination"
            placeholder="Choose destination"
          />
          <button type="submit">Get Directions</button>
        </form>
      </div>
    </>
  );
}
export default Map;
