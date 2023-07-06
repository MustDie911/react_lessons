export default function Post({item, select}) {
    return (
        <div>
            <h2>{item.id}. {item.title}</h2>
            <button onClick={() => {
                select(item)
            }}>more
            </button>

        </div>
    )
}