import './UserAddress.css'

export default function UserAddress({address}) {
    return (<div className={'userAddress'}>
            <h4>{address.address.street}</h4>
            <p>{address.address.suite}</p>
            <p>{address.address.city}</p>
        </div>)
}

// UserAddress - яка відображає інформацію street suite city,
