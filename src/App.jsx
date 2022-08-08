import './App.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import CreateEvent from './components/CreateEvent';
import Menu from './components/Menu';
import Event from './components/Event';
import Ticket from './components/Ticket';
import ViewEvents from './components/ViewEvents';
import ViewTickets from './components/ViewTickets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu/>}/> 
          <Route path="/create" element={<CreateEvent/>}/> 
          <Route path="/event/:eventid" element={<Event/>}/> 
          <Route path="/ticket/:ticketid" element={<Ticket/>}/> 
          <Route path="/events" element={<ViewEvents/>}/> 
          <Route path="/tickets" element={<ViewTickets/>}/> 

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
