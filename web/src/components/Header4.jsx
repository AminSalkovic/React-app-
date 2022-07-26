import './Header4.css'
import Card from './Card'
const Header4=()=>{
    return(
      <div className="header4">
          <Card  title={`READLY`} price={"6.890 RSD"}/>
          <Card title={"BICIKLI POLAR"} price={"14.990 RSD"} />
          <Card title={' SCOTT'} price ={'13.800 RSD'} />
          <Card title={' CUBE'} price ={'29.300 RSD'}/>
          <Card title={' COLNAGO'} price ={'56.800 RSD'}/>

      </div>
    )
}
export default Header4;