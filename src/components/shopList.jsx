import { List, Card, Button, Flex, Divider, Image, Badge, Typography, message } from 'antd';
import { ShoppingCartOutlined, LeftCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import {Link, useParams, Navigate} from 'react-router-dom'
import { useState } from 'react';

const {Title, Text} = Typography
const {Meta} = Card
let data = [
  {
    id: '1',
    price: '50',
    title: 'data1',
    description: 'bfkdssjqdfqsqjdkjsqdkjflqsldjskqlsq',
    image: '/msi.png'
  },
  {
    id: '2',
    price: '50',
    title: 'data2',
    description: 'djfsqdmkjqmdfjqsmdfjsmqdfjqmdjqlmjlm',
    image: '/rog.png'
  },
  {
    id: '3',
    price: '50',
    title: 'data3',
    description: 'ddmsldjfsqlmdjqsldfjmqs',
    image: '/alienware.png'

  },
]
let dataFinal = data.map((item)=>{return {...item, added: false}})




export function ShopList (){
    const [list, setList] = useState(dataFinal)
    function add (id, state){
  
      const newList = list.map((item)=>{
        if (item.id == id){
          return {...item, added: !state}
        }else{
          return item
        }
      })
      setList(newList)
      dataFinal = list
      state? null : message.success ('Item added')
    }
    return (<>
     <List className='list' pagination={{pageSize: 3}} size='small' grid={{column: 2, gutter: 2, lg: 3, md: 3, xl: 4}} itemLayout='vertical'dataSource={list} renderItem={(item)=>{
      return (<Badge.Ribbon style={{marginRight: '5%', display: item.added? 'block': 'none'}} text='added'  color='green'>
        <><Link to={`/shop/${item.id}`}>
      <Card style={{marginBottom: '15px'}} key={item.id} size='small' className='card' cover={<img height={130} src={item.image}></img>} title={item.title} >
        <Meta  title='50Ar' description={item.description}></Meta>
      </Card>
      
      </Link>
      <Flex justify='center'>
        <Button onClick={()=>add(item.id, item.added)} type={item.added? 'dashed': 'primary'} icon={item.added? <CheckCircleOutlined></CheckCircleOutlined>: <ShoppingCartOutlined></ShoppingCartOutlined>}>{item.added? 'Added': 'Add'}</Button>
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
  
export function Item (){
    const {slug} = useParams();
    const post = dataFinal[slug - 1];
    const {title, description, image, price, added} = post
  
    return (<>
      <Link to='/shop' style={{marginRight: 'auto'}}><Button icon={<LeftCircleOutlined></LeftCircleOutlined>} style={{marginRight: 'auto', marginBottom:'10px', backgroundColor:'transparent'}} type='link'>Back</Button></Link>
      <Flex vertical>
        <Image style={{backgroundImage: 'radial-gradient(rgb(0, 183, 255, 0.3), rgba(111, 0, 255, 0.3), transparent)', marginBottom: '20px'}} src={image}></Image>
        <Flex justify='space-around' align='center'>
          <Title style={{margin: '20px'}} level={3}>{title}</Title>
          <Divider type='vertical'></Divider>
          <Title style={{margin: '20px'}} level={3}>{price}</Title>
        </Flex>
        <Button icon={<ShoppingCartOutlined></ShoppingCartOutlined>} type='primary' size='large'>Add to cart</Button>
        
        <Divider orientation='left'><Text type='secondary'>Description</Text></Divider>
        <Text style={{opacity: '0.8'}}>{description}</Text>
      </Flex>
    </>)
}



