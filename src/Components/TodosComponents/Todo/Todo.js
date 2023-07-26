export default function Todo({value}) {
    return (<div>
        <div>
            <hr/>
            <h3>User: {value.userId}</h3>
            <h3>TodoID: {value.id}</h3>
            <i>{value.title}</i>
            <h4>Status: {value.completed.toString()}</h4>
            <hr/>
        </div>
    </div>)
}