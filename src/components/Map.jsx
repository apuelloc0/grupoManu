import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
// import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import icon from "leaflet/dist/images/marker-icon.png";
// import iconShadow from "leaflet/dist/images/marker-icon.png";
import "./Map.css";

const Map = () => {

    const limeOptions = { color: 'lime' }

    return (
        <div >
            <MapContainer center={[17.99702, -76.79358]} zoom={4} scrollWheelZoom={false} className='Map-container'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker pathOptions={limeOptions} position={[29.76328, -95.36327]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[17.98689, -92.93028]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[25.77427, -80.19366]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[10.66663, -71.61245]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <Marker position={[10.13625, -64.68618]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>

            </MapContainer>
        </div>
    )
}

export default Map
