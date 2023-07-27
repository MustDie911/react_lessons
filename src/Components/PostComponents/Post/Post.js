
export default function Post({value}) {

    return (
        <div>
            <div>
                <hr/>
                <h3>UserID: {value.userId}</h3>
                <h3>ID: {value.id}</h3>
                <h3>Title: {value.title}</h3>
                <i>{value.body}</i>
                <hr/>
            </div>
        </div>)
}