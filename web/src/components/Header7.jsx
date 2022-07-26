import './Header7.css'


const Header7=() => { 
   return(
    <div className="header7">
         <div className="header7-div1">
            <h1>PRIJAVITE SE </h1>
            <div style={{display:"flex",marginLeft:"-150px",marginTop:"10px"}}>
            <form>
                <input type="text" placeholder='E-mail'/>
            </form>
            <button type='button'>PTIJAVI SE</button>
            </div>
         </div>
         <div className="header7-div2">
            <h2>CALL CENTER</h2>
            <h1>065-635-1689</h1>
         </div>
         <div className="header7-div3">
    
            <form >
                <input type="text" placeholder='GDE KUPITI' />
            </form>
         </div>
    </div>
   )
 }

 export default Header7;