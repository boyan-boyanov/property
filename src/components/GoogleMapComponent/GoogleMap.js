import { useMemo } from "react";
import './googleMap.css'

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function GoogleMapComponent(props) {
  // console.log(props.googleMark);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBsfGGC20xnNaQtDpwrlre1iU6iw8A7qLU"
  })
  if (!isLoaded) { return <div>Loading...</div> }


  if (props.googleMark) {
    const [lat, lng] = props.googleMark.split(", ")
    const currentLocation = { lat: Number(lat), lng: Number(lng) }
    const markers = [currentLocation]

    return <Map markers={markers} />

  } else if (props.aboutMarks) {
    const markers = props.aboutMarks
    return <Map markers={markers} fullScreen={'fullScreenMap'}/>
  } else {
    return <p>No map</p>
  }
}


function Map({ markers, fullScreen }) {

  return <GoogleMap mark={markers} zoom={12} center={markers[0]} mapContainerClassName={`map-container ${fullScreen}`}>

    {/* // <Marker position={{lat:43.221850, lng: 27.876106}}/> */}
    {markers ? markers.map((x, index) => <Marker key={index} position={x} />) :
      <p>No map for this property</p>}
  </GoogleMap>

}

