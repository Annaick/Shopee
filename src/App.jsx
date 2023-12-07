import Bag from './components/bag'
import Contact from './components/contact'
import Home from './components/home'
import {Item, ShopList} from './components/shopList'
import Shop from './components/shop'
import NoMatch from './components/noMatch'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import {Menu, Button, ConfigProvider, Dropdown, theme} from 'antd'
import { HomeOutlined, ShopOutlined, ContactsOutlined, MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'


const menuItems = [
  {
    key: 'home',
    label: <Button type='link' icon={<HomeOutlined></HomeOutlined>}><Link to='/'>Home</Link></Button>
  },
  {
    key: 'shop',
    label: <Button type='link' icon={<ShopOutlined></ShopOutlined>}><Link to='/shop'>Shop</Link></Button>
  },
  {
    key: 'bag',
    label: <Button type='link' icon={<ShoppingCartOutlined></ShoppingCartOutlined>}><Link to='/bag'>Bag</Link></Button>
  },
  {
    key: 'contact',
    label: <Button type='link' icon={<ContactsOutlined></ContactsOutlined>}><Link to='/contact'>Contact</Link></Button>
  },
]


function App() {
  return (
    <>
      <ConfigProvider theme={{

      }}>
        <Router>
        <nav>
          <Menu defaultSelectedKeys="home" overflowedIndicator={<MenuOutlined style={{color: '#3941ff'}}></MenuOutlined>} className='navigation' mode='horizontal' items={menuItems}>
          </Menu>
        </nav>
          <Routes>
            <Route path='/contact' element={<Contact></Contact>} ></Route>
            <Route path='/bag' element={<Bag></Bag>} ></Route>
            <Route path='/shop' element={<Shop></Shop>}>
              <Route index element={<ShopList></ShopList>}></Route>
              <Route path=':slug' element={<Item></Item>}></Route>
            </Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='*' element={<NoMatch />}></Route>
          </Routes>
        </Router>
      </ConfigProvider>
    </>
  )
}

export default App
