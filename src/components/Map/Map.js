import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {useMain} from "../../context/MainContext";
import ChangeMapView from "./ChangeMapView/ChangeMapView";
import * as L from "leaflet";
import Error from "../Error/Error";

const Map = () => {
  const {data, isLoaded, error} = useMain()
  const icon = L.icon({
    iconUrl: "/icon-location.svg",
    iconSize: [36, 46],
    iconAnchor: [18, 46]
  })

  return (
      <section className="map">
        {data &&
            <MapContainer center={[data.location.lat, data.location.lng]} zoom={13} className="map__container">
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[data.location.lat, data.location.lng]} icon={icon}>
                <Popup>
                  You are here!
                </Popup>
              </Marker>
              <ChangeMapView coords={[data.location.lat, data.location.lng]}/>
            </MapContainer>
        }
        {!isLoaded && <img src="./spinner.svg" alt="loading spinner" className="spinner"/>}
        {error && <Error/>}
      </section>
  );
};

export default Map;
