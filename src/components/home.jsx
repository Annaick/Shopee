import './home.css'
import { Link } from 'react-router-dom'
import { Flex, Typography, Row, Col, Button, Image, Carousel, Card } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

const {Title, Text, Paragraph} = Typography

export default function Home (){
    return (<>
     <section className="header">
        <Flex justify='space-around' dir='vertical' vertical gap={25} style={{ height:'100%'}}>
            <div></div>
            <Title style={{color: '#FFF'}} level={1}>LET'S GET YOU <span style={{color: '#3bb58c'}}>ON NEXT LEVEL</span></Title>
            <Link to='/shop'><Button style={{backgroundColor: '#3bb58c'}} size='large' type='primary' icon={<ArrowRightOutlined></ArrowRightOutlined>}>Shop</Button></Link>
        </Flex>
     </section>
     <section className="main">
        <Flex vertical justify='space-between' gap={50} style={{height: "100%"}}>
            <Row gutter={6}  align='middle'>
                <Col span={14}><Title style={{color: '#616161'}} level={3}>A'NNAICK MISSION</Title></Col>
                <Col span={8}><Image alt='Asus Rog photo' src='/rog.png'></Image></Col>
            </Row>
            <Row justify='space-between' align='middle'>
                <Col span={8}><Image alt='Asus Rog photo' src='/clothing.png'></Image></Col>
                <Col span={14}><Text style={{color: '#616161'}}>A'nnaick is an online shop who offers the best products for everybody's need.  </Text></Col>
            </Row>
            <Row gutter={2} justify={'space-between'} align={'middle'}>
                <Col span={14}><Text style={{color: '#616161'}}>You can find everything you want here at a competitive price and we make sure you'll be more than satisfied</Text></Col>
                <Col span={8}><Image alt='Asus Rog photo' src='/ring.png'></Image></Col>
            </Row>
        </Flex>
     </section>
     <section className="footer">
        <Flex vertical gap={10}>
            <Title level={3} style={{color: '#3bb58c'}}>CLIENT STORIES</Title>
            <div className='carousel-container'>
                <Carousel effect='scrollx' waitForAnimate autoplay className='slider'>
                <div className='slider-container'>
                    <h4>Toky Randria</h4>
                    <p style={{textAlign: 'center'}}>I've been looking for a good computer for my everyday gaming session and finally I found it, I'm really satisfied</p>
                </div>
                <div className='slider-container'>
                    <h4>Sarindra Fitia</h4>
                    <p style={{textAlign: 'center'}}>They helped me to find the perfect computer for my son's birthday present. I didn't know it could be not so expensive</p>
                </div>
                <div className='slider-container'>
                    <h4>Tiana A.</h4>
                    <p style={{textAlign: 'center'}}>Nice plateform. we can find everything we want and they assist you with everything. Thank you I'm satisfied</p>
                </div>
                </Carousel>
            </div>
        </Flex>
     </section>
     <div className='touch'>
        <Title level={3} style={{color: '#fff', textAlign: 'center', marginBottom: '50px'}}>GET IN TOUCH</Title>
        <Row gutter={4} style={{marginBottom: '20px'}}>
            <Col style={{textAlign: 'center'}} span={12}>
                <Title className='heading' level={5}>Email adress</Title>
                <Text className='content'>shop.annaick@gmail.com</Text>
            </Col>
            <Col span={12} style={{textAlign: 'center'}}>
                <Title className='heading' level={5}>Phone number</Title>
                <Text className='content'>+261 34 43 441 07</Text>
            </Col>
        </Row>
        <Row gutter={4} style={{marginBottom: '20px', textAlign: 'center'}}>
            <Col span={12}>
                <Title className='heading' level={5}>Adress</Title>
                <Text className='content'>Ankofafa/Fianarantsoa</Text>
            </Col>
            <Col span={12}>
                <Title className='heading' level={5}>Facebook</Title>
                <Text className='content'>shop.annaick</Text>
            </Col>
        </Row>
        
    </div>
    </>)
 }