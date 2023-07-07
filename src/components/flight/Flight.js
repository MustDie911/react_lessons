export default function Flight(props) {
    let {item} = props;
    return (
        <div>
            <h3>№{item.flight_number}. {item.mission_name}.</h3>
            <h4>Year:{item.launch_year}</h4>
            <img src={item.mission_patch_small} alt="launches"/>
        </div>
    )
}