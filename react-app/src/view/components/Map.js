import { 
    GeoJSON, 
    Marker, 
    Popup, 
    MapContainer, 
    TileLayer 
} from "react-leaflet"
import L from "leaflet"
import 'leaflet/dist/leaflet.css'
import { Container, Form } from "react-bootstrap"
import React from "react"
import axios from "axios"
import icon from "../../assets/default_map_icon.svg"
import balGeoData from "./yri.json"

const defaultMapIcon = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],
})

export default function Map() {
    const [partners,   setPartners  ]  = React.useState([])
    const [markers,    setMarkers   ]  = React.useState([])
    const [neighs,     setNeighs    ]  = React.useState()
    const [showNeighs, setShowNeighs]  = React.useState(false)

    // create neighborhood outlines after
    // first render
    React.useEffect(() => {
        const setStyle = (feature) => {
            return {
                fillColor: feature.properties.fillColor,
                color: feature.properties.color
            }
        }

        const geoJSON = <GeoJSON data={balGeoData} style={setStyle}/>
        setNeighs(geoJSON)
    }, [])

    // get partner locations after first render
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

    // make map icons after partner locations have been 
    // received
    React.useEffect(() => {
        const makeMarkers = () => {
            console.log(partners)

            var marks = partners.map((partner) => { 
                return (
                    <Marker 
                        key={partner._id}
                        position={[partner.lat, partner.lon]}
                        icon={defaultMapIcon}
                    >
                        <Popup>
                            <div>{partner.name}</div>
                            <div>{partner.address}</div>
                            <div>{partner.description}</div>
                            <div>{partner.links}</div>
                        </Popup>
                        
                    </Marker>
                )
            })
            setMarkers(marks)
        }

        makeMarkers()
    }, [partners])

    const toggleNeighborhoods = () => {
        setShowNeighs(!showNeighs)
    }

    return (
        <Container className="d-flex flex-column">
            <MapContainer center={[39.355, -76.609]} zoom={15}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                { markers }
                { showNeighs && neighs  }
            </MapContainer>

            <Form.Check className="align-self-end"
                type="switch"
                label="Toggle neighborhoods"
                onClick={toggleNeighborhoods}
            />

        </Container>
    )
}



