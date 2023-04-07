import { Marker, Tooltip, MapContainer, TileLayer } from "react-leaflet"
import L from "leaflet"
import 'leaflet/dist/leaflet.css'
import React from "react"
import axios from "axios"
import icon from "../../assets/default_map_icon.svg"

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

        const makeMarkers = () => {
            var marks = []
            for (var i = 0; i < partners.length; i++) {
                const marker = 
                    <Marker 
                        key={partners[i]._id}
                        position={[partners[i].lat, partners[i].lon]}
                        icon={defaultMapIcon}
                    >
                        <Tooltip 
                            direction="right" 
                            offset={[0, 0]} 
                            opacity={1} 
                            permanent>{partners[i].name}
                        </Tooltip>
                    </Marker>
                marks.push(marker)
            }
            setMarkers(marks)
        }

        getPartners().then( () => {
            makeMarkers()
        })
    }, []) 

    console.log("PARTNERS", partners)
    console.log("MARKERS", markers)

    return(
        <MapContainer center={[39.355, -76.609]} zoom={15} >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            { markers }
        </MapContainer>
    )
}



