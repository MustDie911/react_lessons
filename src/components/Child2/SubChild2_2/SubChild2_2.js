import {useContext} from "react";
import {Context} from "../../../App";

export default function SubChild2_2() {


    const [child, setChild] = useContext(Context);

    setChild('3')

    return (
        <div>
        </div>
    )
}