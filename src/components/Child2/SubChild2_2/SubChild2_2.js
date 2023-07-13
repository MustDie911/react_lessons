import {useContext} from "react";

import {Context} from "../../../App";

export default function SubChild2_2() {

    const [child, setChild] = useContext(Context);

    setChild('value2')

    return (<div>
            <h2>SubChild2_2 {child}</h2>
        </div>)
}