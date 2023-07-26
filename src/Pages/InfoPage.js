import {Link, Outlet} from "react-router-dom";

export default function InfoPage(){
    return(
        <div>
            <div className={'sub-menu'}>

                <h3>Choose for get info</h3>
                <ul>
                    <li><Link to={'todos'}>Get todos</Link></li>
                    <li><Link to={'albums'}>Get albums</Link></li>
                    <li><Link to={'comments'}>Get comments</Link></li>
                </ul>
            </div>
            <Outlet/>
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