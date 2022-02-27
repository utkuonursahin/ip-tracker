import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import {useIPData} from "../../context/IPDataContext/IPDataContext";
import ChangeMapView from "./ChangeMapView/ChangeMapView";
import * as L from "leaflet";

const Map = () => {
  const {data} = useIPData()
  const LeafIcon = L.Icon.extend({options: {}})
  const icon = new LeafIcon({iconUrl: "/icon-location.svg"})

  return (
      <section className="map">
        {data &&
            <MapContainer center={[data.location.lat, data.location.lng]} zoom={12} className="map__container">
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
      </section>
  );
};

export default Map;
