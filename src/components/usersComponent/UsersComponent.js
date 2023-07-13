import {useEffect, useState} from "react";

import {getPosts, getUsers} from "../../services/api.axios.service";

import UserComponent from "../userComponent/UserComponent";

import PostComponent from "../postComponent/PostComponent";

import './UsersComponent.css'


export default function UsersComponent() {

    let [users, setUsers] = useState([]);
    let [posts, setPosts] = useState(null);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    }, [])


    const postsOfUser = (id) => {
        getPosts(id).then(value => setPosts(value.data))
    }


    return (
        <div className={'userCards'}>
            <div>
                {users.map(value => <UserComponent key={value.id}
                                                   value={value}
                                                   postsOfUser={postsOfUser}
                />)}
            </div>
            <div>
                {posts && posts.map(value => <PostComponent key={value.id}
                                                            value={value}

                />)}
            </div>
        </div>
    )
}


// state lifting
// Є компонента Арр. В середині неї є UsersComponent, який отримує наданні з https://jsonplaceholder.typicode.com/users
// Кожен юзер - окрема компонента UserComponent,в якій є кнопка show posts, при натисканні на яку робиться state lifting,
// а саме - в компоненті App відображаються пости того юзера, на кнопку якого клікнули.