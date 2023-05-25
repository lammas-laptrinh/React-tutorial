import { Button, Col, Row, Space } from 'antd'
import '../SignUp/index.css'
import SignUpInputField from '../SignUpinput'
import { Link } from 'react-router-dom'
import FaceBook from '../../static/images/facebook.png'
import Google from '../../static/images/google.png'

export default function SignUp() {
    return (
        <form>
            <Space className="sign-up-container">
                <div className='sign-up-input'>
                    <Col span={24} className="sign-up-title">
                        <div className="title">Get Your Free Account</div>
                    </Col>
                    <Row gutter={28} className='name-section'>
                        <Col span={12}><SignUpInputField title='Full Name' placeholder='Enter your full name' height={58}></SignUpInputField></Col>
                        <Col span={12}><SignUpInputField title='User Name' placeholder='Enter your user name' height={58}></SignUpInputField></Col>
                    </Row>
                    <SignUpInputField title='Email' placeholder='Enter your email address' height={58}></SignUpInputField>
                    <SignUpInputField title='Password' placeholder='Enter your password' height={58}></SignUpInputField>
                    <SignUpInputField title='Referral Code' placeholder='Referral Code' height={58}></SignUpInputField>
                    <Button htmlType="button" className="submit-button" type="primary" block>
                        Submit
                    </Button>
                    <div className='have-acc'>Already have an account? <Link className='login-link' to={'#'}>Login</Link> </div>
                    <div className="border"></div>
                    <Button htmlType="button" className="sign-up-outter" type="primary" block>
                        <Row>
                            <Col span={10}><img className='icon' src={FaceBook} /></Col>
                            <Col span={14}><div className='btn-content'>Sign up with Facebook</div></Col>
                        </Row>                                             
                    </Button>
                    <Button htmlType="button" className="sign-up-outter" type="primary" block>
                    <Row>
                            <Col span={10}><img  className='icon' src={Google} /></Col>
                            <Col span={14}><div className='btn-content'>Sign up with Google</div></Col>
                        </Row>               
                    </Button>
                </div>
            </Space>
        </form>
    )
}