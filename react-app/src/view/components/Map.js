import { Marker, MapContainer, TileLayer } from "react-leaflet"
import L from "leaflet"
import 'leaflet/dist/leaflet.css'
import React from "react"
import axios from "axios"
import icon from "../../assets/default_map_icon.svg"
import Geocode from "react-geocode";

var gMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

Geocode.setApiKey(gMapsApiKey);
Geocode.setLanguage("en");
Geocode.setRegion("us");
Geocode.setLocationType("ROOFTOP");
Geocode.enableDebug();

const defaultMapIcon = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],
})

export default function Map() {
    const [partners, setPartners] = React.useState([])
    const [markers, setMarkers] = React.useState([])

    React.useEffect(() => {
        const getPartners = async() => {
            axios.get("/partner")
            .then((res) => {
                setPartners(res.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }

        getPartners()
    }, []) 

    const getMarkers = async() => {
        var arr = []
        console.log(partners.length )
        for (var i = 0; i < partners.length; i++) {
            let lat, lon
            [ lat, lon ] = await getLatLon(partners[i].address)
            console.log("made it through once")
            const marker = 
                <Marker 
                    key={partners[i]._id}
                    position={[lat, lon]}
                    icon={defaultMapIcon}
                />
            arr.push(marker)
        }
        console.log(arr)
        setMarkers(arr)
    }
    
    if (partners !== [] && markers.length === 0) {
        getMarkers()
    }

    console.log("PARTNERS", partners)
    console.log("MARKERS", markers)

    return(
        <MapContainer center={[39.355, -76.609]} zoom={15} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            { markers !== null && 
                markers
            }
        </MapContainer>
    )
}

const getLatLon = async(address) => {
    Geocode.fromAddress(address)
    .then(
        (response) => {
          return response.results[0].geometry.location;
        },
        (error) => {
          console.error(error);
        }
    )
}

