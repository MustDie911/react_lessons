import {Link, Route, Routes} from "react-router-dom";

import HomePage from "./HomePage";

import InfoPage from "./InfoPage";
import Todos from "../Components/TodosComponents/Todos/Todos";
import Albums from "../Components/AlbumComponents/Albums/Albums";
import Comments from "../Components/CommentComponents/Comments/Comments";

export default function RoutesComponent() {
    return (<div>

            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/info'}>Get info</Link></li>
                </ul>
            </div>



            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path={'/info'} element={<InfoPage/>}>
                    <Route path={'todos'} element={<Todos/>}/>
                    <Route path={'albums'} element={<Albums/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>
            </Routes>
        </div>

    )
}


//реалізувати 3 маршрути
//todos - при переході на який тягнуться всі todо з https://jsonplaceholder.typicode.com/todos
//
//albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments

//при натисканні на комментар тягнеться пост, до якого належіить цей коментар.
//приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//id поста взяти з коментаря (postId)