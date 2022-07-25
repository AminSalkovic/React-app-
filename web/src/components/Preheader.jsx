import './Preheader.css'


const Preheader=()=>{
    return(
      <div className="pre-header">
        <div style={{width:"60%"}}>
          <ul className='first-section'>
            <li>NOVOSTI</li>
            <li>KONTAKT</li>
            <li>O NAMA</li>
          </ul>
        </div>
        <div style={{width:"40%"}}>
          <ul className='second-section'>
            <li ><i class="fa-solid fa-phone"></i>065-635-1689</li>
            <li><i class="fa-solid fa-location-dot"></i>PRONADJI PRODAVNICU</li>
          </ul>    
        </div>
      </div>
    )
}
export default Preheader;