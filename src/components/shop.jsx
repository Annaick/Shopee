import { Typography } from 'antd'
import {Outlet} from 'react-router-dom'
import './shop.css'

const {Title, Text} = Typography
export default function Shop (){
    return(<>
      <div className='shop'>
        <Title style={{fontSize: '1.5rem'}} type='secondary'>SHOP</Title>
        
        <Outlet></Outlet>
      </div>
    </>)
  }

