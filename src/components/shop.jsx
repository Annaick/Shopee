import {Outlet} from 'react-router-dom'
import './shop.css'
export default function Shop (){
    return(<>
      <div className='shop'>
        <h2>SHOP</h2>
        <Outlet></Outlet>
      </div>
    </>)
  }

