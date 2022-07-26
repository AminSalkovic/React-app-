
import './Zimskisportovi.css'

const Zimskisportovi=() => { 
    return(
        <div className="zimskisportovi">
                <div className="ski-oprema">
            <h1>SKI OPREMA</h1>
            <ul>
                <li style={{marginTop:"20px"}}>Deciji bicikli</li>
                <li>Ski cipele</li>
                <li>Skije</li>
                <li>Ski vezovi</li>
                <li>Ski kacige</li>
                <li>Ski naocare</li>
            </ul>
         </div>
         <div className="ski-odeca">
            <h1>SKI ODECA</h1>
            <ul style={{marginTop:"20px"}}>
            <li>Kacige</li>
            <li>Rasveta</li>
            <li>Brave za zakljucavanje</li>
            <li>Pumpe</li>
            <li>Naocare</li>
            <li>Torbice i rancevi</li>
            <li>Boce i nosaci</li>
            <li>Briznomeri i pulsmetri</li>
            <li>Korpe za decu</li>
            <li>Nosaci bicikala za auto</li>
            <li>Blatobrani</li>
            <li>Trenazeri</li>
            </ul>
         </div>
         <div className="snowboard">
            <h1>SNOWBOARD</h1>
            <ul style={{marginTop:"20px"}}>
                <li>Gume spoljasnje</li>
                <li>Gume unutrasnje</li>
                <li>Sedista</li>
                <li>Pedale</li>
                <li>Kocnice</li>
                <li>Rucke volana</li>
                <li>Menjaci zadnji</li>
                <li>Menjaci prednji</li>
                <li>Rucice menjaca</li>
                <li>Tockovi</li>
                <li>Felne i zice</li>
                <li>Volani</li>
                <li>Pogoni</li>
                <li>Ramovi i delovi za ram</li>
            </ul>
         </div>
            <div className="klizaljke">
                <ul>
                    <li style={{marginTop:"100px"}}>KLIZALJKE</li>
                    <li>SANKE</li>
                    <li>ZIMSKA ODECA</li>
                </ul>
            </div>
         <div className="skisportovi-slike">
            <div className="skisportovi-slika1"></div>
            <div className="skisportovi-slika2"></div>
            
         </div>
        
     </div>
    )
 }
 export default Zimskisportovi;