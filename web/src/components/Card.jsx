  import './Card.css'

const Card=(props) => { 
    return(
        <div className="card">
            <div className="card-slika">{props.slika}</div>
            <h2>{props.title}</h2>
             <h1>{props.price}</h1>
             <button>DETALJI</button>
        </div>
    )
 }
 export default Card;