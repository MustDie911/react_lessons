import {useContext} from "react";

import {Context} from "../../../App";

export default function SubChild1_1() {
    const [child, setChild] = useContext(Context);

    return (<div>
        <h2>SubChild1_1 {child}</h2>
    </div>)
}