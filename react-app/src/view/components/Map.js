import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'

export default function Map() {
    return(
        <MapContainer center={[39.355, -76.609]} zoom={15} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}