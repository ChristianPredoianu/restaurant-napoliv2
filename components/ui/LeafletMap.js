'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

const defaults = {
  zoom: 19,
};

export default function Map(Map) {
  const { zoom = defaults.zoom, posix } = Map;

  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={posix} draggable={false}>
        <Popup>Restaurang Napoli, Östra Storgatan 5, Olofström.</Popup>
      </Marker>
    </MapContainer>
  );
}
