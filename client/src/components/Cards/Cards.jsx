export default function Cards({name, amount, price, description, img, type}){


    return(
        <div>
            <h1>{name}</h1>
            <img src={img} alt="img not found" width="200px" height="200px"/>
            <h3>{description}</h3>
            <h3>{type.map(e => e)}</h3>
        </div>

    )
}