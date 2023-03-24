import { MapContainer, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import React from "react"
import axios from "axios"

export default function Map() {
    const [partners, setPartners] = React.useState(null)

    const getPartners = async() => {
        axios.get("/partner")
        .then((response) => {
            setPartners(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    if(partners === null) {
        getPartners()
    }

    console.log(partners)

    return(
        <MapContainer center={[39.355, -76.609]} zoom={15} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}