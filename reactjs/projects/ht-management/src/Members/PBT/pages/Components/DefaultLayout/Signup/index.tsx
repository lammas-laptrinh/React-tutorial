import { useState, useEffect } from 'react'
import { Col, Row, Input, Button, Form } from 'antd'
import './signup.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, addDoc, onSnapshot, CollectionReference } from 'firebase/firestore';
import { db } from '../firebase';
import { useNavigate } from "react-router-dom";


function SignUp() {
    const [fullName, setFullName] = useState<string>('');
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const navigate = useNavigate();
    const [user, setUser] = useState<any[]>([]);
    const url = window.location.href;
    const parts = url.split("/");
    const typeroom = parts[parts.length - 2];


    useEffect(() => {
        const colRef: CollectionReference = collection(db, 'users');
        const unsubscribe = onSnapshot(
            colRef,
            (snapshot) => {
                const respon = snapshot.docs.map((doc) => {
                    return doc.data();
                });
                setUser(respon);
            },
            (error) => {
                console.log(error);
            }
        );
        return () => unsubscribe();
    }, []);

    console.log(user);


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
        if (!phone) {
            toast.error('Please enter your password');
            return;
        }

        // Nếu dữ liệu hợp lệ, xử lý logic gửi dữ liệu hoặc đăng ký tại đây

    //    const avatarUser="https://res.cloudinary.com/dpdzbuiml/image/upload/v1685954877/1_xowjpx.png"
        addDoc(collection(db, 'users'), {
            name: fullName,
            phoneNumber: phone,
        })
            .then((docRef) => {
                console.log('Document written with ID: ', docRef.id);
                toast.success('Sign up successful!');
                setTimeout(() => {
                    navigate(`/room-detail/${typeroom}/login`);
                }, 4500);


            })
            .catch((error) => {
                console.error('Error adding document: ', error);
                toast.error('An error occurred. Please try again later.');
            });

        // toast.success('Sign up successful!');
        // setTimeout(() => {
        //     navigate(`/room-detail/${typeroom}/login`);
        // }, 1500);

    };


    return (
        <Form className='wrapper-signup-container'>
            <ToastContainer />
            <Row className='title-signup'>
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
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='mail-pass-code-input' />
                </Form.Item>
            </Row>
            <Row>
                <Form.Item className='Code-input'>
                    <label className='lable-title'>Phone</label>
                    <Input placeholder='Enter your Phone numbers'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
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
                    <img width="22" height="22" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                </Form.Item>
            </Row>


        </Form>
    )
}

export default SignUp