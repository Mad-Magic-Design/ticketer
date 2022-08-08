import { useEffect, useState } from "react"
import axios from "axios";
import EventCard from "./EventCard";
import { Link } from "react-router-dom";


export default function ViewEvents(){
    const [data, setData] = useState([{name:'loading', id:'loading'}]);
    useEffect (()=>{
        axios.get("http://localhost/Ticketer/fetchEvents.php").then((response) => {
            setData(response.data);
            console.log(response.data);
          });
    }, [])
    return(
        <div className="container">
            <h1>EVENTS</h1>
            {data.map((event) => (
               <Link key={event.id} to={`/event/${event.id}`} state={{eventInfo:event}}> 
                <EventCard key={event.id} event={event}/>
               </Link>
            ))}
        </div>


    )
}
