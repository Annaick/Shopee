import Bag from './components/bag'
import Contact from './components/contact'
import Home from './components/home'
import {Item, ShopList} from './components/shopList'
import Shop from './components/shop'
import NoMatch from './components/noMatch'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from 'react-router-dom'
import './App.css'
import {Menu, Badge, Button, ConfigProvider, Dropdown, theme} from 'antd'
import { HomeOutlined, ShopOutlined, ContactsOutlined, MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'



function App() {
  const [total, setTotal]= useState (0)
  const [number, setNumber] = useState(0)
  const [loading, setLoading] = useState (false)
  const [categories, setCategories] = useState ([])


  useEffect (()=>{
    const fetchedCategories = categories.map((item)=>{
      return {label: item, value: item}
    })
    setFinalCategories ([{label: 'all', value: ' '}, ...fetchedCategories])
  }, [categories])
  const [finalCategories, setFinalCategories] = useState ([{label: 'all', value: ' '}])
  const [categorieValue, setCategorieValue] = useState (' ')
  const [productLoading, setProductLoading] = useState(false)
  const [products, setProducts] = useState ([])
  const [finalProducts, setFinalProducts] = useState ([])
  const [size, setSize] = useState (10)

  useEffect (()=>{setSize(finalProducts.length)}, [finalProducts])

  const fetchProducts = async ()=>{
    setProductLoading(true)
    try{
      const url = `https://fakestoreapi.com/products`;
      const answer = await fetch (url)

      if (answer.ok){
        const data = await answer.json()
        setFinalProducts( data.map((item)=>{return {...item, added: false}}))
        setProducts (data.map((item)=>{return {...item, added: false}}))
      }else{
        console.error ("error: " + answer.status)
      }
    }catch(e){
      console.error ("error: " + e)
    }finally{
      setProductLoading (false)
    }
  }

  function filterProducts (){
    if (categorieValue == ' '){
      setProducts (finalProducts)
    }else{
      setProducts (finalProducts.filter((item)=> item.category == categorieValue))
    }
  }
  
  useEffect(()=>{fetchProducts()}, [])
  useEffect (()=>{filterProducts()}, [categorieValue])
  



  async function fetchCategories(){
    setLoading (true)
    try{
      const answer = await fetch ('https://fakestoreapi.com/products/categories');
      if (answer.ok){
        const data = await answer.json()
        setCategories (data);
      }else{
        console.error("errer " + answer.status)
      }
    }
    catch (e){
      console.error(e.message)
    }
    finally{
      setLoading (false)
    }
  }



  useEffect(()=>{fetchCategories()}, [])


  const location = useLocation()
  useEffect(()=> {
    let x = 0
    
    const addedItem = finalProducts.filter((item)=> item.added == true)
    setNumber (addedItem.length)
    for (let i = 0; i < addedItem.length; i++) {
        x += addedItem[i].price
    }
    setTotal (x)
  }, [finalProducts])

  
  useEffect (()=> {
    const array = finalProducts.filter((item)=>item.added == true)
    setNumber(array.length)
  }, [finalProducts])

  const menuItems = [
    {
      key: '/',
      label: <Link to='/' style={{display: 'block', height: '100%', width: '100%'}}><Button type='link' icon={<HomeOutlined></HomeOutlined>}>Home</Button></Link>
    },
    {
      key: '/shop',
      label: <Link to='/shop' style={{display: 'block', height: '100%', width: '100%'}}><Button type='link' icon={<HomeOutlined></HomeOutlined>}>Shop</Button></Link>
    },
    {
      key: '/bag',
      label: <Badge color='#3bb58c' count={number} ><Link style={{display: 'block', height: '100%', width: '100%'}} to='/bag'><Button type='link' icon={<HomeOutlined></HomeOutlined>}>Bag</Button></Link></Badge>
    },
    {
      key: '/contact',
      label: <Link style={{display: 'block', height: '100%', width: '100%'}} to='/contact'><Button type='link' icon={<HomeOutlined></HomeOutlined>}>Contact</Button></Link>
    },
  ]
  return (
    <>
      <ConfigProvider theme={{

      }}>
        <nav>
          <Menu selectable selectedKeys={[location.pathname]} activeKey={location.pathname} overflowedIndicator={<MenuOutlined style={{color: '#3941ff'}}></MenuOutlined>} className='navigation' mode='horizontal' items={menuItems}>
          </Menu>
        </nav>
          <Routes>
            <Route path='/contact' element={<Contact></Contact>} ></Route>
            <Route path='/bag' element={<Bag number = {number} total={total} setCategory={setCategorieValue} list={finalProducts} setList = {setProducts} setFinalList = {setFinalProducts}></Bag>} ></Route>
            <Route path='/shop' element={<Shop></Shop>}>
              <Route index element={<ShopList size={size} categories={finalCategories} category={categorieValue}  setCategorieValue={setCategorieValue} setFinalProducts={setFinalProducts} finalProducts={finalProducts} products={products} setProducts={setProducts}  productLoading={productLoading} loading={loading}></ShopList>}></Route>
              <Route path=':slug' element={<Item total={total} products={finalProducts} setProducts={setProducts} setFinalProducts={setFinalProducts} ></Item>}></Route>
            </Route>
            <Route path='/' element={<Home />}></Route>
            <Route path='*' element={<NoMatch />}></Route>
          </Routes>
      </ConfigProvider> 
    </>
  )
}

export default ()=> (
  <Router>
    <App />
  </Router>
)
