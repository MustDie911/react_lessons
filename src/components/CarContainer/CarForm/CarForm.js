import React, {useEffect} from 'react';

import {useForm} from 'react-hook-form';

import Joi from 'joi';

import {saveCar} from "../../../service/api.service";

const CarForm = ({setSave, innit, setInnit}) => {
    const {brand, price, year} = innit;

    const form = useForm();

    const {
        register, handleSubmit, setValue, formState: {errors},
    } = form;

    useEffect(() => {
        setValue('brand', brand);
        setValue('price', price);
        setValue('year', year);
    }, [brand, price, year]);

    const onSubmit = async (data) => {

        const schema = Joi.object({
            brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).required(),
            price: Joi.string().pattern(/^[0-9]{1,20}$/).required(),
            year: Joi.string().pattern(/^[0-9]{1,20}$/).required(),
        });

        try {
            await schema.validateAsync(data);
            const response = await saveCar(data);
            console.log(response);
        } catch (error) {
            console.error('Помилка валідації:', error.message);
        }

        setSave((prev) => !prev);
        setInnit({id: '', brand: '', year: ''});
    };

    return (<div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="Brand">
                Brand: <br/>
                <input type="text" {...register('brand')} />
            </label>
            <p style={{color: 'red'}}>{errors.brand?.message}</p>
            <label htmlFor="price">
                Price: <br/>
                <input type="text" {...register('price')} />
            </label>
            <p style={{color: 'red'}}>{errors.price?.message}</p>
            <label htmlFor="year">
                Year: <br/>
                <input type="text" {...register('year')} />
            </label>
            <button type="submit">Save</button>
        </form>
    </div>);
};

export default CarForm;
