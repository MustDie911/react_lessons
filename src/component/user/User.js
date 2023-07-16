import {useForm} from "react-hook-form";
import {saveUser} from "../../services/api.axios.service";

export default function User() {

    let {register, handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        saveUser(data).then(({data}) => console.log(data))
    }

    return (<div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name', {required: true})}/>
                <input {...register('username', {required: true})}/>
                <input type="submit" value={'save new user'}/>
            </form>
        </div>)
}