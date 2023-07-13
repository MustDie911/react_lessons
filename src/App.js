import './App.css';

import Users from "./components/users/Users";

function App() {
    return (<div>
            <Users/>
        </div>);

}

export default App;

// property drill
//
//Структура:
//Головна компонента App. App робить запит на https://jsonplaceholder.typicode.com/users
//В середині Апп лежить компонента Users яка відображає всіх отриманих в апп юзерів з плейсхолдеру
// Кожен юзер - це компонента User, в якій є інші комоненти, а саме
// UserDetails - яка відображає інформацію id,name,username,email,phone,website,
// UserAddress - яка відображає інформацію street suite city,
// Company - яка відображає name,catchPhrase,bs
