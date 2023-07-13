import './PostComponent.css'
export default function PostComponent({value}) {
    return (
        <div className={'postComponent'}>
            <h3>{value.id}. {value.title}</h3>
            <p>{value.body}</p>
        </div>
    )
}
