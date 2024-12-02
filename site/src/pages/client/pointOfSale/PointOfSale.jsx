import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './PointOfSale.scss'
import { MapsBrancs } from '../../../MyDatas/MyDatas';

const PointOfSale = () => {
  const [location , setLocation] = useState([40.4093, 49.8671])
  const [activeBranchIndex, setActiveBranchIndex] = useState(0);
  const [map, setMap] = useState(null);
  // const position = [40.4093, 49.8671];
  const options = {

      scrollwheel: false, 
      zoomControl: true, 
  };

  const onClickMarketAddress = (item, index) => {
    setActiveBranchIndex(index);
    const coordinates = item.coordinates.split(",");
    setLocation([coordinates[0], coordinates[1]]);
    map.setView([coordinates[0], coordinates[1]], map.getZoom(), {
      animate: true,
      duration: 1,
    });
  };
  return (
    <main>

      <section id='pointOfSale'>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 p-0">
              <div className="googleMap">
              <MapContainer 
              center={location} 
              // options={options} 
              zoom={12}
              scrollWheelZoom={true}
              ref={setMap}
               style={{ height: '100%', width: '100%' }}>
      <TileLayer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        />
        <Marker position={location}>
          <Popup>
          Bakü  Merkezi
          </Popup>
        </Marker>
      </MapContainer>
              </div>
            </div>
            <div className="col-lg-5 col-sm-12 p-0">
                <div className="marketLocations">
                  <div className="marketTitle">
                    <h3>Our Locations</h3>
                  </div>
                <div className="margetInfoWrapper">
              {MapsBrancs.map((item, index) => (
                <div
                  key={item.id}
                  className={`locationAddressCart ${
                    index === activeBranchIndex ? "activeElement" : ""
                  }`}
                >
                  <div className="marketNameAndMarketAddress">
                    <h5 className="marketName">{item.title}</h5>
                    <p className="address">{item.address}</p>
                  </div>
                  <button
                    onClick={() => {
                      onClickMarketAddress(item, index);
                    }}
                    className="WebShowOnMapBtn"
                  >
                    SHOW ON MAP
                  </button>
                  <a
                    onClick={() => {
                      onClickMarketAddress(item, index);
                    }}
                    href={item.url}
                    target="_blank"
                    className="MobileShowOnMapBtn"
                  >
                    SHOW ON MAP
                  </a>
                </div>
              ))}
            </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PointOfSale