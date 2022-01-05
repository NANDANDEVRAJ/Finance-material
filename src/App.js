import './App.css';
import Sidebar from './ProjectComp/Sidebar';
import {Routes, Route} from "react-router-dom";
import  Dashboard  from './Pages/Dashboard';
import Report from "./Pages/Report"
import Transaction from "./Pages/Transaction"
import Header from './ProjectComp/Header';
import Sales from "./Pages/Sales"
import Refund from "./Pages/Refund"
import Billing from './Pages/Billing';


function App() {
  return (
    <>
    <div className = "App">
      <div className='stack'>
      <Sidebar/>
      <Header/>
      </div>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/Transaction" element={<Transaction/>}/>
      <Route path="/Sales" element={<Sales/>}/>
      <Route path="/Refund" element={<Refund/>}/>
      <Route path="/Billing" element={<Billing/>}/>
      <Route path="/Report" element={<Report/>}/>
      </Routes>
    </div>
    </>
  );
}
export default App;

