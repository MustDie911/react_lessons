import './userDetails.css'
export default function UserDetails({info}) {
    return (
        <div className={'userCard'}>
            <h2>{info.id}. {info.name}</h2>
            <h3>{info.username}, {info.email}</h3>
            <p>{info.phone}</p>
            <p>{info.website}</p>
        </div>
    )
}

// UserDetails - яка відображає інформацію id,name,username,email,phone,website,
