import React from 'react'

export default function CarComponent({car}) {
    return (
        <div>
            <h3>Id: {car.id}</h3>
            <h3>Brand: {car.brand}</h3>
            <h3>Price: {car.price}</h3>
            <h3>Year: {car.year}</h3>
        </div>
    )
}

