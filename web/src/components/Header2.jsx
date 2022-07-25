import { useState } from 'react'
import './Header2.css'
import Biciklizam from './Biciklizam';
import Outdooro from './Outdooro';
import Roleri from './Roleri';


const Header2=()=>{
  const[clickbiciklizam,setClickbiciklizam]=useState(false)
  const[outdooro,setOutdooro]=useState(false)
  const[roleri,setRoleri]=useState(false)
  return(
    <div className="header2">
   
    
        <div className="navbar">
          <ul>
            <li onClick={()=>setClickbiciklizam(!clickbiciklizam)}>BICIKLIZAM</li>
            <li onClick={()=>setOutdooro(!outdooro)}>OUTDOOR</li>
            <li onClick={()=>setRoleri(!roleri)} >ROLERI</li>
            <li>FITNES</li>
            <li>ZIMSKI SPORTOVI</li>
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
    </div>
  )
}
export default Header2;