import GoogleMaps from "simple-react-google-maps";

export function Map({ location }) {

    return (
        <GoogleMaps
            apiKey={"AIzaSyBTbs_4XqtReMxjVlNngH8ZTErM2rgu8w4"}
            style={{ height: "480px", width: "720px" }}
            zoom={10}
            center={{ lat: location.latitude, lng: location.longitude }}

            markers={{ lat: location.latitude, lng: location.longitude }}
        />
    )
}