import {useEffect, useState} from "react";
import Flight from "../flight/Flight";


export default function Flights() {

    let [flights,setFlights] = useState([])

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setFlights(value.filter(flight => flight.launch_year !=='2020'));
            })
    },[])

    return(
        <div>
            <h1>SpaceX</h1>
            {flights.map((flight,flight_number) => <Flight
                key ={flight_number}
                item={flight}
            />)}
        </div>
    )
}

