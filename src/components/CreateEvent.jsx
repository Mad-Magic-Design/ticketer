import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import $ from "jquery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateEvent(){

    const [formInfo, setFormInfo] = useState({
        name: '',
        date:'',
        venue:'',
        details:'',
        capacity:'',
        
    })

    const [result, setResult] = useState("");

    const handleChange = (e) =>{
        setFormInfo(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    let navigate = useNavigate();


    const handleSubmit = (e) =>{
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
                navigate('/menu')
            },
        })
    }

    return(
        <div className="container">
            <form
                action="http://localhost/Ticketer/server.php"
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
               
                    <div className="">
                        <label htmlFor=' name'>Event Name</label>
                        <input id='name' name='name' type='text' className='name-input' onChange={handleChange} value={formInfo.name} />
                        <label htmlFor='date'> Date</label>
                        <input type='date' id='date' name='date' className='date-input' onChange={handleChange} value={formInfo.date} />
                        <label htmlFor='venue'>Venue</label>
                        <input id='venue' name='venue' className='venue-input' onChange={handleChange} value={formInfo.venue} />
                        <label htmlFor='details'> More Info </label>
                        <textarea id='details' name='details' className='date-input' rows='3' onChange={handleChange} value={formInfo.details}></textarea>
                        <label htmlFor='capacity'> Number of Online Tickets Available </label>
                        <input id='capacity' name='capacity' className='capacity-input' onChange={handleChange} value={formInfo.capacity}/>
                        <input type='submit' name='submit' value='Submit' />
                    </div>
             
            </form>
            <h1>{result}</h1>
        </div>
    );
}