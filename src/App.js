import './App.css';
import Posts from "./components/posts/Posts";

function App() {
  return (
      <div>
      <Posts/>
      </div>
  );

}

// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)

export default App;
