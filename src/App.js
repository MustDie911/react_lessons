import './App.css';

import UsersComponent from "./components/usersComponent/UsersComponent";

function App() {
  return (
      <div>
          <UsersComponent/>
      </div>
  );

}

export default App;

// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує наданні з https://jsonplaceholder.typicode.com/users
// Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state lifting,
// а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.
