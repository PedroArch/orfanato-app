import React from 'react';
import { Link } from 'react-router-dom';

import { FiPlus, FiArrowRight } from 'react-icons/fi';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import markerImg from '../img/logo-marker.svg';

import '../css/pages/orphanages-maps.css';
import 'leaflet/dist/leaflet.css';

import happyMapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage {
  name: string;
  longitude: number;
  latitude: number;
  id: number;
}

function OrphanagesMap() {
  const [orphanages, setOrphanages] = React.useState<Orphanage[]>([]);

  React.useEffect(() => {
    api.get('orphanages').then((res) => {
      setOrphanages(res.data);
    });
  }, []);

  React.useEffect(() => {
    api.get('orphanages').then((res) => {
      setOrphanages(res.data);
    });
  }, [orphanages]);

  console.log(orphanages);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={markerImg} alt="logo marker" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Porto Alegre</strong>
          <span>Rio Grande do Sul</span>
        </footer>
      </aside>
      <Map
        center={[-30.0642248, -51.2108403]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
        {orphanages.map((orphanage) => {
          return (
            <Marker
              position={[orphanage.latitude, orphanage.longitude]}
              icon={happyMapIcon}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={32} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>
      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
