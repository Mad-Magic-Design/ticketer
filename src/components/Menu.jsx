import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <div className="container">
            <div className="menu">
            <Link to='/create'><button>New Event</button></Link>
            <Link to='/events'><button>View Events</button></Link>
            <Link to='/tickets'><button>See Your Tickets</button></Link>
            </div>
        </div>
    );
}