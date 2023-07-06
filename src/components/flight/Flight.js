import './Flight.css'
export  default  function Flight({item}) {

    return(
        <div className={'SpaceX'}>
            {item.flight_number}.   {item.mission_name} —   {item.launch_year} year
            <img src={item.links.mission_patch_small} alt="link"/>
        </div>
    )
}