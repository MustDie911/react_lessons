import {useNavigate} from "react-router-dom";

export default function Comment({value}){
    let navigate = useNavigate();

    return(
        <div>
            <div onClick={() => navigate(`/posts/${value.id}`)}>
                <hr/>
                <h3>PostId: {value.postId}</h3>
                <h3>ID: {value.id}</h3>
                <h3>Name: {value.name}</h3>
                <h3>Email: {value.email}</h3>
                <i>{value.body}</i>
                <hr/>
            </div>
        </div>
    )
}