import './App.css';

import Child1 from "./components/Child1/Child1";

import Child2 from "./components/Child2/Child2";

import {createContext, useState} from "react";



export const Context = createContext(null);

function App() {
    let [child,setChild] = useState("1");

    return (

        <Context.Provider value={[child,setChild]}>
            <div>
                <Child1/>
                <Child2/>
            </div>
        </Context.Provider>

    );

}


// context
// Зробити структуру компонентів -
// App
//           Child1                              Child2
// SubChild1_1    SubChild1_2          SubChild2_1    SubChild2_2
//
// Тепер завдання:
//     З SubChild2_2 передати данні (будь-які) в SubChild1_1


export default App;
