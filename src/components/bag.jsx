import './bag.css'
import { FloatButton, Button, List, Card, Flex, Typography, Divider, Popconfirm, message } from 'antd'
import { Link } from 'react-router-dom'
import { CreditCardOutlined, CloseCircleOutlined } from '@ant-design/icons'
const {Title, Text} = Typography
const {Meta} = Card
let total = 0

const truncate = (str)=> (str.slice(0, 30) + '...')
export default function Bag (prop){
  function add (id, state){ 
    const newList = prop.list.map((item)=>{
      if (item.id == id){
        return {...item, added: !state}
       
      }else{
        return item
      }
    })
    prop.setList(newList)
    prop.setFinalList(newList)
  }
  function pay (){
    message.success ('Clicked! you paid ' + prop.total + ' imaginary dollars')
    const reseted = prop.list.map((item)=> {return {...item, added: false}})
    prop.setList (reseted)
    prop.setFinalList(reseted)
    prop.setCategory (' ')
  }
   return (<>
    <div className="bag">
      <Flex justify='space-between' align='center'>
        <Title className='info' tite={3}>Products</Title>
        <Text className='info'>{prop.number} items</Text>
      </Flex>
      <Divider type=''></Divider>
      <Flex justify='space-between' align='center'>
        <Title className='info' tite={3}>Total</Title>
        <Text className='info'> {prop.total} $</Text>
      </Flex>
      <Divider type=''></Divider>
    </div>
    <List className='list' size='small' grid={{column: 2}} dataSource={prop.list.filter((item)=> item.added == true)} renderItem={(item)=>{
      return(
        <><Link to={`/shop/${item.id}`}>
      <Card actions={[]} style={{marginBottom: '15px'}} key={item.id} size='small' className='card' cover={<div style={{display: 'flex', justifyContent: 'center', height: '130px', overflow: 'hidden'}}><img height={130} src={item.image}></img></div>} title={item.title} >
        <Meta  title={item.price + '$'} description={truncate(item.description)}></Meta>
      </Card>
      
      </Link>
      <Flex justify='center'>
        <Popconfirm
        okType='danger'
        onConfirm={()=>add (item.id, item.added)}
        title='Remove'
        description='Are you sure to remove this item from your cart?'
        okText='Remove'>
          <Button danger icon={<CloseCircleOutlined></CloseCircleOutlined>}>Remove</Button>
        </Popconfirm>
      </Flex>
      </>)
    }}>

    </List>
    <FloatButton onClick={pay} style={{scale: '1.5', right: '60px', bottom: '50px'}} aria-label='buy' type='primary' icon={<CreditCardOutlined></CreditCardOutlined>}>
    </FloatButton>
   </>)
   
}