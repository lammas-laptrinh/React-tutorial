
import { Col, Row, Input, Button, Form } from 'antd'
import './signup.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
function SignUp() {
    const [fullName, setFullName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [code, setCode] = useState<string>('');

    const onFinish = () => {
        // Kiểm tra các trường dữ liệu
        if (!fullName) {
          toast.error('Please enter your full name');
          return;
        }
    
        if (!username) {
          toast.error('Please enter your username');
          return;
        }
    
        if (!email) {
          toast.error('Please enter your email');
          return;
        }
    
        if (!password) {
          toast.error('Please enter your password');
          return;
        }
        if (!code) {
          toast.error('Please enter your password');
          return;
        }
    
        // Nếu dữ liệu hợp lệ, xử lý logic gửi dữ liệu hoặc đăng ký tại đây
    
        toast.success('Sign up successful!');
      };

    
    return (
        <Form  className='wrapper'>
            <ToastContainer/>
            <Row className='title'>
                <h1>Get your free account</h1>
            </Row>
            <Row>
                <Form.Item className='full-input'>
                    <label className='lable-title'>Full Name</label>
                    <Input placeholder='Enter your full name'
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    className='full-name-input' />
                </Form.Item>
                <Form.Item className='name-input'>
                    <label className='lable-title'>User Name</label>
                    <Input placeholder='Enter your usename'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                       className='full-name-input' />
                </Form.Item>
            </Row>
            <Row>
                <Form.Item className='Email-input'>
                    <label className='lable-title'>Email</label>
                    <Input placeholder='Enter your Email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    className='mail-pass-code-input' />
                </Form.Item>
            </Row>
            <Row>
                <Form.Item className='Password-input'>
                    <label className='lable-title'>Password</label>
                    <Input placeholder='Enter your Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    className='mail-pass-code-input' />
                </Form.Item>
            </Row>
            <Row>
                <Form.Item className='Code-input'>
                    <label className='lable-title'>Referral Code</label>
                    <Input placeholder='Enter your Referral Code'
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                       className='mail-pass-code-input' />
                </Form.Item>
            </Row>
            <Row>
                <Form.Item className='button-input'>
                    <Button onClick={onFinish} className='signup-button'>Sign up</Button>
                </Form.Item>
            </Row>

            <Row className='already-account'>
                <p className="login-text">Already have an account? <span className="login-link">Login</span></p>
            </Row>
            <Row className='line-border'>
                <Row className='border-line-warapper'>
                    <Col className='border-line'></Col>
                    <Col>Or</Col>
                    <Col className='border-line'></Col>
                </Row>
            </Row>

            <Row>
                <Form.Item className='button-fb-google-input'>
                    <Button className='signup-fb-google-button'>
                        Sign up with Facebook
                    </Button>
                    <img width="22" height="22" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
                </Form.Item>
            </Row>

            <Row>
                <Form.Item className='button-google-input'>
                    <Button className='signup-fb-google-button'>
                        Sign up with Google
                    </Button>
                    <img width="22" height="22" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo"/>
                </Form.Item>
            </Row>


        </Form>
    )
}

export default SignUp