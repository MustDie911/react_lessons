import './App.css';
import Comment from "./components/comment/Comment";

function App() {
    return (
        <div>
            <Comment/>
        </div>
    );

}

export default App;

// Зробити компонент, в якому буде форма,
// за допомоги якої можливо створити новий комментар постовим запитом на
// http://jsonplaceholder.typicode.com/comments
