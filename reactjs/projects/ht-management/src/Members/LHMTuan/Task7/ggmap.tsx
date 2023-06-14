import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";

const createRoutingMachineLayer = () => {
  const routeControl = L.Routing.control({
    waypoints: [
      L.latLng(10.759511845731911, 106.7098104198916),
      L.latLng(10.855156642217352, 106.62940789533218),
    ],
    lineOptions: {
      styles: [{ color: "blue", opacity: 1, weight: 4 }],
      extendToWaypoints: false,
      missingRouteTolerance: 10,
      addWaypoints: true,
    },
  });

  routeControl.on("waypointset", (event) => {
    event.waypoint.Marker.setWaypointDraggable(false);
  });
  return routeControl;
};

const ggmap = createControlComponent(createRoutingMachineLayer);

export default ggmap;
