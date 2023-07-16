import {useForm} from "react-hook-form";
import {addComment} from "../../services/api.axios.service";
import './Comment.css'


export default function Comment(){

    let {register, handleSubmit, formState: {errors}} = useForm();

    const submit = (data) => {
        console.log(data)
        addComment(data).then(({data})=>console.log(data))

    }
    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text"{...register('name', {required: true})}/>

                {errors.name && <span>field is empty</span>}

                <input className={'body'} type="text"{...register('body', {required: true})}/>
                {errors.body && <span>field is empty</span>}

                <input type="text"{...register('email', {required: true})}/>

                {errors.email && <span>field is empty</span>}

                <input type="submit"/>
            </form>
        </div>
    )
}