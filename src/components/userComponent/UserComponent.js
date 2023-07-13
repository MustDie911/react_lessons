import './UserComponent.css'
export default function UserComponent({value, postsOfUser}) {
    return (<div className={'userComponent'}>
            <h3>{value.id}. {value.name}</h3>
            <h4>{value.email}</h4>
            <button onClick={() => {
                postsOfUser(value.id)
            }}>Show posts
            </button>
        </div>)
}