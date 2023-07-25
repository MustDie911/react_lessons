import {useEffect, useState} from "react";

import CarForm from "../CarForm/CarForm";

import Cars from "../CarComponent/CarComponent";

import {deleteCar, getCars} from "../../../service/api.service";

export default function CarsComponent() {
    const [car, setCar] = useState([])
    const [save, setSave] = useState(null)
    const [innit, setInnit] = useState({id: '', brand: '', price: '', year: ''})

    useEffect(() => {
        getCars().then((data) => {
            setCar(data)
        })
    }, [save])

    const carDelete = id => {
        deleteCar(id)
            .then(() => {
                setSave((prev) => !prev)
            })
    }

    const carUpdate = (id, brand, price, year) => {
        setInnit({id: id, brand: brand, price: price, year: year})
    }
    return (<div>
        <CarForm setSave={setSave} innit={innit} setInnit={setInnit}/>
        {car?.map(value => (<div key={value.id}>
            <Cars car={value}/>
            <button onClick={() => carDelete(value.id)}>Delete</button>
            <button
                onClick={() => carUpdate(value.id, value.brand, value.price, value.year)}
            >
                Update
            </button>
        </div>))}
    </div>)
}

