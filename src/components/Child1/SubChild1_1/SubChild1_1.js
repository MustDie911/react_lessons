import {useContext, useEffect, useState} from "react";
import {Context} from "../../../App";

export default function SubChild1_1() {
    const [child, setChild] = useContext(Context);



    return (<div>
        <h1>{child}</h1>
        </div>)
}