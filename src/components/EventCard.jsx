

export default function EventCard(props){
    return(
        <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{props.event.name}</h5>
          <h6 className="card-subtitle mb-2">{props.event.date}</h6>
          <p className="card-text">{props.event.venue}</p>
        </div>
      </div>
    )
}