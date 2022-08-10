import { useMemo } from "react";
import './googleMap.css'

import {GoogleMap, useLoadScript, Marker} from "@react-google-maps/api";

export default function GoogleMapComponent (props){
 // console.log(props.googleMark);
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyBsfGGC20xnNaQtDpwrlre1iU6iw8A7qLU"
  })
if (!isLoaded) {return <div>Loading...</div>}


if (props.googleMark){
  const [lat, lng] = props.googleMark.split(", ")
const currentLocation = {lat: Number(lat), lng: Number(lng)} 
const markers = [currentLocation]
//console.log(props.googleMark);
return <Map markers={markers}/>

}else if(props.aboutMarks){ 
  const varna = {lat:43.221850, lng: 27.876106} 
  const devnja = {lat:43.222893, lng: 27.569000}
  const markers = [varna, devnja]
  return <Map markers={markers}/>
}else {
  return <p>No map</p>
}
}


function Map({markers}) {  
console.log(markers);
  return  <GoogleMap mark={markers} zoom={10} center={{lat:43.221850, lng: 27.876106}} mapContainerClassName='map-container'>
    
   {/* // <Marker position={{lat:43.221850, lng: 27.876106}}/> */}
  {markers ? markers.map((x, index) => <Marker key={index} position={x}/>) : 
  <p>No map for this property</p>}
  </GoogleMap>    
  
}

// const AboutComponent = () => {

//   return (
//     <>
//     <p>test</p>
//      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11628.632394266062!2d27.8660345624878!3d43.22714481769342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a454a5c04db735%3A0x89b7922386201dbc!2z0JHQuNC30L3QtdGBINC_0LDRgNC6INCS0LDRgNC90LAg0JXQntCe0JQ!5e0!3m2!1sbg!2sbg!4v1660123765225!5m2!1sbg!2sbg" width="800" height="600" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//     </>
   
//   )
// }

// export default AboutComponent