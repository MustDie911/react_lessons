import './CharacterComponent.css'
export default function CharacterComponent(props) {
    const {id, name, status, species, gender, img} = props;
    return (
        <div className='characterCard'>
            <h2>ID: {id}</h2>
            <h2>Ім'я: {name}</h2>
            <h2>Статус: {status}</h2>
            <h3>Species: {species}</h3>
            <h3>Gender: {gender}</h3>
            <img src={img} alt="img"/>
        </div>
    )
}