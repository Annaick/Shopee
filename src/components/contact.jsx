import './contact.css'
import {Form, Input, Button, Typography,Flex} from 'antd'

const {Title} = Typography

export default function Contact (){
    return (<>
     <Flex justify='center' align='center' className="contact">
         <Form className='form' name='contact' aria-label='Contact us'>
            <Title level={3}>Contact us</Title>
            <Form.Item rules={[{required: true, message: 'Please enter your name'}]}>
               <Input className='userInput' placeholder='Full name'></Input>
            </Form.Item>
            <Form.Item rules={[{type: 'email', message:'Please provide a valide email adress'}, {required: true, message: 'Please enter your email adress'}]}>
               <Input className='userInput' placeholder='Email'></Input>
            </Form.Item>
            <Form.Item>
               <Input.TextArea className='userInput' placeholder='Message'></Input.TextArea>
            </Form.Item>
            <Form.Item>
               <Button htmlType='submit' shape='round' type='primary'>Send Email</Button>
            </Form.Item>
         </Form>
     </Flex>
    </>)
 }