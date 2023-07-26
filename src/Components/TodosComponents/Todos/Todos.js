import {useEffect, useState} from "react"

import {getTodos} from "../../../Services/axios.api.service";

import Todo from "../Todo/Todo";

export default function Todos() {

    let [todos, setTodos] = useState([]);

    useEffect(() => {
        getTodos().then(value => setTodos(value.data))
    }, [])

    return (
        <div>
            {
                todos.map(value=><Todo key={value.id} value={value}/>)
            }
        </div>
    )
}