import {useEffect, useState} from "react";
import {getFlights} from "../../services/SpaceX.api.service";
import Flight from "../flight/Flight";

export default function Flights() {
    let [flights, setFlights] = useState([]);

    useEffect(() => {
        getFlights().then(value => setFlights(value))
    }, [])

    return (
        <div>
            {flights.map((flight, flight_number) => <Flight
                key={flight_number}
                item={flight}
            />)}
        </div>
    )
}