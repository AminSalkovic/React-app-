import './Header.css'


const Header=()=>{
  return(
    <div className="header">
        
        <h1 style={{color:"orangered",marginLeft:"30px"}}>PLANET</h1><h1 style={{color:"#fff"}}>BIKE</h1>
    
    
      <div className="pretraga">
        <input type="text" placeholder='Pretrazite sajt...' />
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
     </div>

     <div className="prijava">
      <ul >
        <li style={{marginLeft:"100px"}}><i class="fa-solid fa-right-to-bracket"></i>REGISTRACIJA</li>
        <li><i class="fa-solid fa-user"></i>PRIJAVITE SE</li>
      </ul>
     </div>
     
    </div>
  )
}

export default Header