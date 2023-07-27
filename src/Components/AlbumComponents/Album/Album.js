export default function Album({value}){
    return(
        <div>
            <div>
                <hr/>
                <h3>User: {value.userId}</h3>
                <h3>ID: {value.id}</h3>
                <h3>Title: {value.title}</h3>
                <hr/>
            </div>
        </div>
    )
}