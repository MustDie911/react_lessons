import './Company.css'
export default function Company({company}){
    return(
        <div className={'company'}>
            <h4>{company.company.name}</h4>
            <p>{company.company.catchPhrase}</p>
            <p>{company.company.bs}</p>
        </div>
    )
}

// Company - яка відображає name,catchPhrase,bs
