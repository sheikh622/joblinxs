import { Icon } from "@iconify/react";
import { Button } from "@themesberg/react-bootstrap";
import GoogleMapReact from "google-map-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import pin from "../../assets/img/pin.svg";
import placeholder from "../../assets/img/placeholder.svg";
import { getProfile } from "../../Redux/profile/actions";
import "./map.css";
const AnyReactComponent = (item) => (
  <div>
    <img
      src={item.text == "hi" ? placeholder : pin}
      width="60px"
      height="60px"
    />
  </div>
);
// const defaultProps = {
//   center: {
//     lat: 31.48597,
//     lng: 74.3470055,
//   },
//   zoom: 11,
// };
const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon className="pin-icon"></Icon>
    {/* <p className="pin-text">eeeeeeeeeeeeeeeeeeeee</p> */}
  </div>
);

const Map = ({ location, zoomLevel, profileId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useLocation();
  const SingleId = useSelector((state) => state?.addJob?.jobById);
  const getById = useSelector((state) => state.ProfileReducer.profile);
  const [count, setCount] = useState(0);
  const [providerLocation, SetProviderLocation] = useState({
    lat: getById?.latitude,
    lng: getById?.longitude,
  });
  const [mapLocation, SetMapLocation] = useState({
    lat: SingleId?.latitude,
    lng: SingleId?.longitude,
  });
  const [centerLocation, setCenterLocation] = useState({
    lat: 31.48597,
    lng: 74.3470055,
  });
  useEffect(() => {
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      dispatch(
        getProfile({
          profileId: profileId?.users?.id,
          id: profileId?.jobs?.id,
        })
      );
    }, 10000);
  }, []);

  useEffect(() => {
    dispatch(
      getProfile({
        profileId: profileId?.users?.id,
        id: profileId?.jobs?.id,
      })
    );
  }, []);
  return (
    <div className="map">
      <h2 className="map-h2">Live Location</h2>
      <div
        onClick={() => {
          SetProviderLocation({
            lat: getById?.latitude,
            lng: getById?.longitude,
          });
          setCenterLocation({
            lat: getById?.latitude,
            lng: getById?.longitude,
          });
        }}
      >
        <div className="display-block">
          <Button className="mt-2 mb-2">Provider Location</Button>
          <Button
            className="mb-2 mt-2"
            style={{
              width: "27%",
              marginLeft:"43%"
            }}
          >
            Job Location
          </Button>
        </div>
      </div>
      <div
        onClick={() => {
          SetMapLocation({
            lat: SingleId?.latitude,
            lng: SingleId?.longitude,
          });
          setCenterLocation({
            lat: SingleId?.latitude,
            lng: SingleId?.longitude,
          });
        }}
      ></div>
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCUa_Y2wBjW8vT699pfTGG3k28ks9O17mA" }}
          // defaultCenter={providerLocation}
          center={centerLocation}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={providerLocation.lat}
            lng={providerLocation.lng}
            text={providerLocation.text}
          />
          <AnyReactComponent
            lat={mapLocation.lat}
            lng={mapLocation.lng}
            text="hi"
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
