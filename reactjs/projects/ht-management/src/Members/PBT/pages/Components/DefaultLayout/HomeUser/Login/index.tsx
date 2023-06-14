import  { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../firebase';
import {
    collection,
    onSnapshot,
  
  } from "firebase/firestore";
  import { Col, Row, Input, Button, Form } from 'antd'
  import './Login.css'
  import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [account,setAccount] = useState<any>();
  const navigate = useNavigate();
  
  const url = window.location.href;
  const parts = url.split("/");
  const typeroom = parts[parts.length - 2];

  useEffect(() => {
    const colRef = collection(db, 'users');
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
        // Người dùng đã đăng nhập
        console.log('User is logged in:', user);
      } else {
        // Người dùng đã đăng xuất
        console.log('User is logged out');
      }
    });

    return () => unsubscribe();
  }, []);



  const handleUsernameChange = (event:any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // Kiểm tra tài khoản người dùng nhập vào
    const loggedInUser = account.find(
      (user:any) => user.data.name === username && user.data.phoneNumber === password
    );
  
    if (loggedInUser) {
      // Đăng nhập thành công
      console.log('Login successful',loggedInUser.id);
      // Thực hiện các hành động cần thiết sau khi đăng nhập thành công
      toast.success('Đăng nhập thành công')
      localStorage.setItem('loginaccount', loggedInUser.id);
      setTimeout(() => {
        navigate(`/room-detail/${typeroom}/payment`);
       }, 1500);
    } else {
      // Sai tên người dùng hoặc mật khẩu
      console.log('Invalid username or password');
      toast.error('Sai tài khoản và mật khẩu')
      // Hiển thị thông báo lỗi đăng nhập
    }
  };

  return (
    <Form  className='wrapper-login'>
            <ToastContainer />
            <Row className='title-login'>
                <h1>Login your account</h1>
            </Row>
            <Row>
                <Form.Item  className='full-input'>
                    <label className='lable-title'>Username</label>
                    <Input placeholder='Enter your full name'
                        value={username}
                        onChange={handleUsernameChange}
                        className='full-name-input' />
                </Form.Item>
                <Form.Item className='name-input'>
                    <label className='lable-title'>Password</label>
                    <Input placeholder='Enter your usename'
                    type='password'
                        value={password}
                        onChange={handlePasswordChange}
                        className='full-name-input' />
                </Form.Item>
            </Row>
            <Row>
                <Form.Item className='button-input'>
                    <Button onClick={handleSubmit} className='signup-button'>Login</Button>
                </Form.Item>
            </Row>

            <Row className='already-account'>
                <p className="login-text">Forgot account? <span className="login-link">Reset account</span></p>
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
                        Login with Facebook
                    </Button>
                    <img width="22" height="22" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new" />
                </Form.Item>
            </Row>

            <Row>
                <Form.Item className='button-google-input'>
                    <Button className='signup-fb-google-button'>
                        Login with Google
                    </Button>
                    <img width="22" height="22" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />
                </Form.Item>
            </Row>


        </Form>
  );
}

export default Login;
