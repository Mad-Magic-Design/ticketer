import { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';



export default function Event(){
    const location = useLocation()
    const {eventInfo} = location.state;
    return(
        <div className="card" >
        <div className="card-body">
          <h5 className="card-title">{eventInfo.name}</h5>
          <h6 className="card-subtitle mb-2">{eventInfo.date}</h6>
          <p className="card-text">{eventInfo.venue}</p>
          <a href="">BUY TICKET NOW</a>
        </div>
      </div>

    )
}