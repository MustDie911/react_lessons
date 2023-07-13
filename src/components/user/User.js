import {useEffect, useState} from "react";

import {getUsers} from "../../services/api.axios.service";

import UserDetails from "../userDetails/UserDetails";

import UserAddress from "../userAddress/UserAddress";

import './User.css'

import Company from "../company/Company";

export default function User() {

    let [user, setUser] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUser(value.data))
    }, [])

    return (<div className={'userCards'}>
        <div>
            <h1>USER</h1>
            {user.map((value) => <UserDetails key={value.id} info={value}/>)}
        </div>
        <div>
            <h1>ADDRESS</h1>
            {user.map((value) => <UserAddress key={value.id} address={value}/>)}
        </div>
        <div>
            <h1>COMPANY</h1>
            {user.map((value) => <Company key={value.id} company={value}/>)}
        </div>
    </div>)
}