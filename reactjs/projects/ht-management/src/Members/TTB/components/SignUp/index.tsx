import { FormEvent, useState } from "react";
import { Button, Col, Row, Space } from 'antd'
import '../SignUp/index.css'
import { Link, useNavigate } from 'react-router-dom'
import FaceBook from '../../static/images/facebook.png'
import Google from '../../static/images/google.png'
import SignUpInputField from './SignUpinput'
import { firestoreDB } from "../../../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp() {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 /*    const [referralCode, setReferralCode] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); */
    const navigate = useNavigate();
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
/*         const auth = getAuth(); */
        try {
            await addDoc(collection(firestoreDB, 'users'), {
                name: fullName,
                phoneNumber: password
            });
 /*            toast.success('Form submitted successfully!'); */
            navigate('/');
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error('An error occurred. Please try again.');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <ToastContainer />
            <Space className="sign-up-container">
                <div className='sign-up-input'>
                    <Col span={24} className="sign-up-title">
                        <div className="title">Get Your Free Account</div>
                    </Col>
                    <Row gutter={28} className='name-section'>
                        <Col span={12}><SignUpInputField title='Full Name' placeholder='Enter your full name' height={58} name="fullName" onChange={(e: any) => setFullName(e.target.value)}></SignUpInputField></Col>
                        <Col span={12}><SignUpInputField title='User Name' placeholder='Enter your user name' height={58} name="phoneNumber" onChange={(e: any) => setUserName(e.target.value)}></SignUpInputField></Col>
                    </Row>
                    <SignUpInputField title='Email' placeholder='Enter your email address' height={58} name="email" onChange={(e: any) => setEmail(e.target.value)}></SignUpInputField>
                    <SignUpInputField title='Password' placeholder='Enter your password' height={58} name="password" onChange={(e: any) => setPassword(e.target.value)}></SignUpInputField>
                    <SignUpInputField title='Referral Code' placeholder='Referral Code' height={58} name="referralCode" ></SignUpInputField>
                    <Button htmlType="submit" className="submit-button" type="primary" block>
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
                            <Col span={10}><img className='icon' src={Google} /></Col>
                            <Col span={14}><div className='btn-content'>Sign up with Google</div></Col>
                        </Row>
                    </Button>
                </div>
            </Space>
        </form>
    )
}
