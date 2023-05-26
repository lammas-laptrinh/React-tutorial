import  { useEffect } from "react";
import L from "leaflet";
import { useMap } from "react-leaflet";
const LeafletGeocoder = () => {
  const map = useMap();
  useEffect(() => {
    L.Control.geocoder({
      defaultMarkGeocode: true,
    })
      .on("markgeocode", function (e:any) {
        var latlng = e.geocode.center;
        L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
        map.fitBounds(e.geocode.bbox);
      })
      .addTo(map);
  }, []);
  return null;
};

export default LeafletGeocoder;
