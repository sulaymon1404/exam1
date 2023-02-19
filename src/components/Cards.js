
import './Cards.css'
export default function Cards(props) {
  return (
    <div className='card'>
        <div className='size'>
            <img src={props.img} />
            <h3>{props.h3}</h3>
            <p>{props.p}</p>
        </div>
    </div>
  )
}



