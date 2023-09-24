import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import dotenv from 'dotenv'
dotenv.config()
const AnyReactComponent = ({ text }) => <div>{text}</div>

export function About() {
  const [coordinates, setCoordinates] = useState({ lat: 32.0853, lng: 34.7818 })
  const zoom = 11

  function handleClick({ lat, lng }) {
    setCoordinates({ lat, lng })
  }

  return (
    // Important! Always set the container height explicitly
    <main>
      <button onClick={() => handleClick({ lat: 90, lng: 135 })}>
        The North Pole
      </button>
      <button onClick={() => handleClick({ lat: 31.7767, lng: 35.2345 })}>
        The West Wall, Jerusalem
      </button>
      <button onClick={() => handleClick({ lat: 40.7826, lng: 73.9656 })}>
        Central Park, NYC, US
      </button>
      <div style={{ height: '500px', width: '500px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.API_KEY }}
          center={coordinates}
          defaultZoom={zoom}
          onClick={handleClick}
        >
          <AnyReactComponent {...coordinates} text="🍎" />
        </GoogleMapReact>
      </div>
    </main>
  )
}
