import './SimpsonComponent.css'
export default function SimpsonComponent(props) {
    const {name, surname, age, gender, img} = props;

    return (
        <div className='simpsonCard'>
            <h2>Ім'я: {name}</h2>
            <h2>Прізвище: {surname}</h2>
            <h3>Вік: {age}</h3>
            <h3>Стать: {gender}</h3>
            <img src={img} alt="img"/>
        </div>
    )
}