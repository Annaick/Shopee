import './home.css'
import { Link } from 'react-router-dom'
import { Flex, Typography, Row, Col, Button, Image, Carousel, Card } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

const {Title, Text, Paragraph} = Typography

export default function Home (){
    return (<>
     <section className="header">
        <Flex justify='space-around' dir='vertical' vertical gap={25} style={{padding:'2rem 2rem', height:'100%'}}>
            <img src="/logo.svg" alt="A'nnaick logo"  style={{width: '30px', height: 'auto'}}/>
            <Title style={{color: '#FFF'}} level={1}>LET'S GET YOU <span style={{color: '#FF3B37'}}>ON NEXT LEVEL</span></Title>
            <Link to='/shop'><Button size='large' type='primary' icon={<ArrowRightOutlined></ArrowRightOutlined>}>Shop</Button></Link>
        </Flex>
     </section>
     <section className="main">
        <Flex vertical justify='space-between' gap={50} style={{height: "100%"}}>
            <Row justify={'space-between'} align='middle'>
                <Col span={10}><Title style={{fontWeight: '200'}} level={3}>A'NNAICK MISSION</Title></Col>
                <Col span={8}><Image alt='Asus Rog photo' src='/rog.png'></Image></Col>
            </Row>
            <Row justify='space-between' align='middle'>
                <Col span={8}><Image alt='Asus Rog photo' src='/alienware.png'></Image></Col>
                <Col span={10}><Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus vel dignissimos </Text></Col>
            </Row>
            <Row justify={'space-between'} align={'middle'}>
                <Col span={10}><Text>Laudantium recusandae facilis illum nesciunt, cupiditate temporibus ipsa! Necessitatibus magni quo velit</Text></Col>
                <Col span={8}><Image alt='Asus Rog photo' src='/msi.png'></Image></Col>
            </Row>
        </Flex>
     </section>
     <section className="footer">
        <Flex vertical gap={10}>
            <Title level={3} style={{color: '#FF3B37'}}>CLIENT STORIES</Title>

            <div className='carousel-container'>
                <Carousel effect='scrollx' waitForAnimate autoplay className='slider'>
                <div className='slider-container'>
                    <h4>Toky Randria</h4>
                    <p>I've been looking for a good computer for my everyday gaming session and finally I found it, I'm really satisfied</p>
                </div>
                <div className='slider-container'>
                    <h4>Sarindra Fitia</h4>
                    <p>They helped me to find the perfect computer for my son's birthday present. I didn't know it could be not so expensive</p>
                </div>
                <div className='slider-container'>
                    <h4>Tiana A.</h4>
                    <p>Nice plateform. we can find everything we want and they assist you with everything. Thank you I'm satisfied</p>
                </div>
                </Carousel>
            </div>
        </Flex>
     </section>
     <div className='touch'>
        <Title level={3} style={{color: '#fff'}}>GET IN TOUCH</Title>
        <Row gutter={4} style={{marginBottom: '20px'}}>
            <Col span={12}>
                <Title className='heading' level={5}>Email adress</Title>
                <Text className='content'>shop.annaick@gmail.com</Text>
            </Col>
            <Col span={12}>
                <Title className='heading' level={5}>Phone number</Title>
                <Text className='content'>+261 34 43 441 07</Text>
            </Col>
        </Row>
        <Row gutter={4} style={{marginBottom: '20px'}}>
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