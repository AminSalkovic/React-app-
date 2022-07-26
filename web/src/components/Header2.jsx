import { useState } from 'react'
import './Header2.css'
import Biciklizam from './Biciklizam';
import Outdooro from './Outdooro';
import Roleri from './Roleri';
import Fitnes from './Fitnes';
import Zimskisportovi from './Zimskisportovi';


const Header2=()=>{
  const[clickbiciklizam,setClickbiciklizam]=useState(false)
  const[outdooro,setOutdooro]=useState(false)
  const[roleri,setRoleri]=useState(false)
  const[fitnes,setFitnes]=useState(false)
  const[zimskisportovi,setZimskisportovi]=useState(false)
  return(
    <div className="header2">
   
    
        <div className="navbar">
          <ul>
            <li onClick={()=>setClickbiciklizam(!clickbiciklizam)}>BICIKLIZAM</li>
            <li onClick={()=>setOutdooro(!outdooro)}>OUTDOOR</li>
            <li onClick={()=>setRoleri(!roleri)} >ROLERI</li>
            <li onClick={()=>setFitnes(!fitnes)}>FITNES</li>
            <li onClick={()=>setZimskisportovi(!zimskisportovi)}>ZIMSKI SPORTOVI</li>
            <li>OSTALO</li>
          </ul>
          <ul style={{marginLeft:"350px"}}>
            <li>SERVIS</li>
            <li>RENTA</li>
            <li>PRODAJA</li>
          </ul>
        </div>
  
        {clickbiciklizam && <Biciklizam/>}
        {outdooro && <Outdooro/>}
        {roleri && <Roleri/>}
        {fitnes && <Fitnes/>}
        {zimskisportovi && <Zimskisportovi/>}
    </div>
  )
}
export default Header2;