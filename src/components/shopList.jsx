import { List, Form, Input, Card, Button, Flex, Divider, Image, Badge, Typography, message, App, Select } from 'antd';
import { ShoppingCartOutlined, LeftCircleOutlined, CheckCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import {Link, useParams, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';


const {Title, Text, Paragraph} = Typography
const {Meta} = Card

const truncate = (str)=> (str.slice(0, 30) + '...' )
//item.added? prop.setTotal(prop.total - item.price): prop.setTotal(prop.total + item.price)




export function ShopList (prop){
    function add (id, state){ 
    const newList = prop.finalProducts.map((item)=>{
      if (item.id == id){
        return {...item, added: !state}
       
      }else{
        return item
      }
    })
    prop.setFinalProducts(newList)
    if (prop.category == ' '){
      prop.setProducts (newList)
    }else{
      const a = newList.filter((item)=> item.category == prop.category)
      prop.setProducts (a)
    }
    }

    return (<>
      <Form style={{marginBottom: '25px'}} name='search' layout='inline'>
        <Flex wrap='wrap' gap={10} justify='space-around'>
          <Form.Item>
            <Select loading={prop.loading? true: false}  style={{width: '10rem'}} defaultValue=' ' options={prop.categories} onChange={(e)=>prop.setCategorieValue(e)}>
            </Select>
          </Form.Item>
        </Flex>
      </Form>
     <List locale={{emptyText: prop.error?<><Flex gap={10} style={{opacity: '0.5'}} align='center' vertical><Button onClick={()=>{prop.fetchC(); prop.fetchP() }} aria-label='click to reload' type='link' icon={<ReloadOutlined style={{scale: '2'}}></ReloadOutlined>}></Button><Text>Error. Try reload</Text></Flex></>: ''}} loading={prop.productLoading? true: false} className='list' pagination={{pageSize: 10, align: 'center', total: prop.size }} size='small' grid={{column: 2, gutter: 2, lg: 4, md: 4, xl: 4}} itemLayout='vertical'dataSource={prop.products} renderItem={(item)=>{
      return (<Badge.Ribbon style={{marginRight: '5%', display: (item.added && item.visible)? 'block': 'none'}} text='added'  color='#3bb58c'>
        <><Link to={`/shop/${item.id}`}>
      <Card  style={{marginBottom: '15px', height: '280px'}} key={item.id} size='small' className='card' cover={<div style={{overflow: 'hidden', height:'130px', display:'flex', justifyContent: 'center'}}><img loading='lazy'  src={item.image}></img></div>} title={item.title} >
        <Meta  title={`${item.price}$`} description={truncate(item.description)}></Meta>
      </Card>
      
      </Link>
      <Flex justify='center'>
        <Button  style={{backgroundColor: item.added? '#3bb58c': '', }} onClick={()=>{add(item.id, item.added); }} type='primary' icon={item.added? <CheckCircleOutlined></CheckCircleOutlined>: <ShoppingCartOutlined></ShoppingCartOutlined>}>{item.added? 'Added': 'Add'}</Button>
      </Flex>
      </>
      </Badge.Ribbon> )

     }}>
     </List>
    </>)
  }


//<ul>
//{Object.entries(List).map(([slug, {title}])=>(
//  <li key={slug}>
//    <Link to={'/shop/' + slug}>
//      <h3>{title}</h3>
//    </Link>
//  </li>
//))}
//</ul>
  
export function Item (prop){

    const {slug} = useParams();
    const navigate = useNavigate()
    const post = prop.products[slug - 1];
    const {title, description, image, price, added, id } = post

    function add (id, state){ 
      const newList = prop.products.map((item)=>{
        if (item.id == id){
          return {...item, added: !state}
         
        }else{
          return item
        }
      })
      prop.setFinalProducts(newList)
      prop.setProducts(newList)
      }
  
    return (<>
      <Button icon={<LeftCircleOutlined></LeftCircleOutlined>} style={{marginRight: 'auto', marginBottom:'10px', backgroundColor:'transparent'}} type='link' onClick={()=> navigate(-1)}>Back</Button>
      <Flex vertical>
        <Flex justify='center'><Image  style={{backgroundImage: 'radial-gradient(rgb(0, 183, 255, 0.3), rgba(111, 0, 255, 0.3), transparent)', marginBottom: '20px', maxWidth: '500px'}} src={image}></Image></Flex>
        <Flex justify='space-around' align='center'>
          <Title style={{margin: '20px'}} level={3}>{title}</Title>
          <Divider type='vertical'></Divider>
          <Title style={{margin: '20px'}} level={3}>{price}</Title>
        </Flex>
        <Button onClick={()=>add(id, added)}  icon={added? <CheckCircleOutlined></CheckCircleOutlined>: <ShoppingCartOutlined></ShoppingCartOutlined>} style={{backgroundColor: added? '#3bb58c': ''}} type='primary' size='large'>{added? 'Added': 'Add to cart'}</Button>
        
        <Divider orientation='left'><Text type='secondary'>Description</Text></Divider>
        <Paragraph>{description}</Paragraph>
      </Flex>
    </>)
}



