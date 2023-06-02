import  { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";

const LeafletRoutingMachine = () => {
  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: "/marche.gif",
    iconSize: [90, 90],
  });
  useEffect(() => {
    var marker1 = L.marker([10.856934888483217, 106.59353378002595], { icon: DefaultIcon }).addTo(
      map
    );
    map.on("click", function (e) {
      L.marker([10.855307673880791, 106.629420910715]).addTo(map);
      L.Routing.control({
        waypoints: [
          L.latLng(10.856934888483217, 106.59353378002595),
          L.latLng(10.855307673880791, 106.629420910715)
          // L.latLng(e.latlng.lat, e.latlng.lng),
        ],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: true,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: true,
        draggableWaypoints: true,
        fitSelectedRoutes: false,
        showAlternatives: false,
      })
        .on("routesfound", function (e:any) {
          e.routes[0].coordinates.forEach((c:any, i:any) => {
            setTimeout(() => {
              marker1.setLatLng([c.lat, c.lng]);
            }, 1000 * i);
          });
        })
        .addTo(map);
    });
    // L.Routing.control({
    //   waypoints: [
    //     L.latLng(10.856934888483217, 106.59353378002595),
    //     L.latLng(10.855307673880791, 106.629420910715)
    //   ],
    //   lineOptions: {
    //           styles: [
    //             {
    //               color: "blue",
    //               weight: 4,
    //               opacity: 0.7,
    //             },
    //           ],
    //         },
    // }).addTo(map);
  }, []);
  return null;
};

export default LeafletRoutingMachine;
