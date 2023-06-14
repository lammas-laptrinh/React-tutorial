import { useEffect, useState } from "react";
import { Button, Col, Row, Space } from 'antd'
import '../SignUp/index.css'
import { Link, useNavigate } from 'react-router-dom'
import FaceBook from '../../static/images/facebook.png'
import Google from '../../static/images/google.png'
import SignUpInputField from './SignUpinput'
import { firestoreDB } from "../../../../firebase";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { getAuth, onAuthStateChanged } from "firebase/auth";


export default function Login() {
    const [account, setAccount] = useState<any>();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    /*    const [referralCode, setReferralCode] = useState("");
       const [errorMessage, setErrorMessage] = useState(""); */
    const navigate = useNavigate();
    useEffect(() => {
        const colRef = collection(firestoreDB, 'users');
        const unsubscribe = onSnapshot(
            colRef,
            (snapshot) => {
                const respon = snapshot.docs.map((doc) => {
                    return {
                        id: doc.id,
                        data: doc.data()
                    };
                });
                setAccount(respon);
            },
            (error) => {
                console.log(error);
            }
        );
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User is logged in:', user);
            } else {
                console.log('User is logged out');
            }
        });

        return () => unsubscribe();
    }, []);

    async function handleLogin(e: any) {
        e.preventDefault()
        try {
            const querySnapshot = await getDocs(collection(firestoreDB, 'users'));
            const users = querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));

            const user = users.find((user) => user.data.name === name);
            console.log(user);
            if (user) {
                const userId = user.id;

                console.log('User logged in:', name);

                toast.success('Login successful!');

                sessionStorage.setItem('userId', userId);
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            } else {
                console.log('User not found');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={(e: any) => handleLogin(e)}>
            <ToastContainer />
            <Space className="sign-up-container">
                <div className='sign-up-input'>
                    <Col span={24} className="sign-up-title">
                        <div className="title">Login Your Account</div>
                    </Col>
                    <SignUpInputField title='UserName' placeholder='Enter your name address' height={58} name="name" onChange={(e: any) => setName(e.target.value)}></SignUpInputField>
                    <SignUpInputField title='Password' placeholder='Enter your password' height={58} name="password" onChange={(e: any) => setPassword(e.target.value)}></SignUpInputField>
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
