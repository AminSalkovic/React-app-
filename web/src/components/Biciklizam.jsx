import './Biciklizam.css'
const Biciklizam=() => { 
  return (
    <div className="biciklizam">
         <div className="bicikli">
            <h1>BICIKLI</h1>
            <ul>
                <li style={{marginTop:"20px"}}>Deciji bicikli</li>
                <li>Zenski bicikli</li>
                <li>Muski bicikli</li>
                <li>MTB bicikli</li>
                <li>Gradski bicikli</li>
                <li>E-bike</li>
                <li>Sklopivi bicikli</li>
                <li>Drumski bicikli</li>
                <li>Gravel cyclocross</li>
            </ul>
         </div>
         <div className="oprema">
            <h1>OPREMA</h1>
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
         <div className="delovi">
            <h1>DELOVI</h1>
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
         <div className="odeca-i-obuca" style={{width:"15%"}}>
            <h1>ODECA I OBUCA</h1>
            <ul style={{marginTop:"20px"}}>
                <li>Dresovi</li>
                <li>Rukavica</li>
                <li>Biciklisticka obuca</li>
                <li>Kape</li>
                <li>Carape</li>
                <li>Jakne</li>
                <li>Prsluci</li>
                <li>Kamasne</li>
            </ul>
            <h1 style={{marginTop:"20px"}}>ALATI I <br /> ODRZAVANJE</h1>
            <ul style={{marginTop:"30px"}}>
                <li>Alati</li>
                <li>Ciscenje</li>
            </ul>
         </div>
         <div className="div-slike">
            <div className="div-slike-slika1"></div>
            <div className="div-slike-slika2"></div>
            
         </div>
            
    </div>
  )
}
export default Biciklizam