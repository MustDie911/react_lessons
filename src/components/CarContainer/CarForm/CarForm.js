import axios from 'axios'

import {useEffect} from 'react'

import {useForm} from "react-hook-form";


export default function CarForm({setSave, innit, setInnit}) {
    const {id, brand, price, year} = innit

    const form = useForm()

    const {
        register, handleSubmit, setValue, formState: {errors},
    } = form
    useEffect(() => {
        setValue('brand', brand)
        setValue('price', price)
        setValue('year', year)
    }, [brand, price, year])

    const onSubmit = data => {
        if (id) {
            axios.put(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, data).then(response => {
                console.log(response.data)
            })
        } else {
            axios.post(`http://owu.linkpc.net/carsAPI/v1/cars`, data).then(res => {
                console.log(res)
                console.log(res.data)
            })
        }
        setSave(prev => !prev)
        setInnit({id: '', brand: '', year: ''})
    }

    return (<div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="Brand">Brand: <br/>
                    <input
                        type="text"
                        {...register('brand', {
                            required: 'Required form', pattern: {
                                value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message: 'Invalid Form',
                            },
                        })}
                    />
                </label>
                <p style={{color: 'red'}}>{errors.brand?.message}</p>
                <label htmlFor="price">Price: <br/>
                    <input
                        type="text"
                        {...register('price', {
                            required: 'Required form', pattern: {
                                value: /^[0-9]{1,20}$/, message: 'Invalid Form',
                            },
                        })}
                    />
                </label>
                <p style={{color: 'red'}}>{errors.price?.message}</p>
                <label htmlFor="year">Year: <br/>
                    <input
                        type="text"
                        {...register('year', {
                            required: 'Required form', pattern: {
                                value: /^[0-9]{1,20}$/, message: 'Invalid Form',
                            },
                        })}
                    />
                </label>
                <button type="submit">Save</button>
            </form>
        </div>)
}