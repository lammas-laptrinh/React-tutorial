
import React, { useState } from 'react';
import { GrFormClose } from "react-icons/gr";
import "./Login.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
const App: React.FC = () => {

    // modal

    //form
    const [email, setEmail] = useState("");
    const [creditcard, setCreditCard] = useState("");
    const [fullname, setFulname] = useState("");
    const [cvv, setCvv] = useState("");
    const [password, setPassWord] = useState("");

    const formik = useFormik({
        initialValues: {
            email: "",
            creditcard: "",
            fullname: "",
            cvv: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Hãy nhập Email").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Bạn phải nhập đúng cú pháp email "),
            creditcard: Yup.string().required("Hãy nhập mã số  ").min(5, "Bạn hãy kiểm tra lại mã số"),
            fullname: Yup.string().required("Hãy nhập tên đầy đủ").min(5, "Hãy nhập tên đầy đủ "),
            cvv: Yup.string().required("Hãy nhập tên").min(3, "Bạn phải nhập đúng tên "),
            password: Yup.string().required("Hãy nhập password").min(8, "Hãy nhập password")
        }),
        onSubmit: (values) => {
            window.alert("Form submitted");
            console.log(values);
        }
    });


    const handleSubmit = (e: any) => {
        e.preventDefault();
        const Payment = {
            email: email,
            creditcard: creditcard,
            fullname: fullname,
            pasword: password,
            cvv: cvv
        };
        console.log(Payment);
    };

    console.log(formik.values);



    return (
        <>
            <form className='form' style={{ padding: "0px 100px 0px 60px" }} onSubmit={formik.handleSubmit}>
                <div className="close"><Link to="/DetailRoom"><GrFormClose /></Link></div>
                <h3 className='h3'>Get Your Free Account</h3>

                <div className="item-box" style={{ display: 'flex' }}>
                    <div className="">
                        <label style={{ fontSize: 20 }} htmlFor="fullname">FullName</label> <br />
                        <input style={{ width: 300, marginBottom: 20 }} type="text" id="fullname" placeholder="Enter your full name" name="fullname" value={formik.values.fullname} onChange={formik.handleChange} />
                    </div>
                    {formik.errors.fullname && (
                        <p className="errorMsgs">{formik.errors.fullname}</p>
                    )}
                    <div className="" style={{ marginLeft: 80 }}>
                        <label style={{ fontSize: 20 }} htmlFor="cvv">UserName</label> <br />
                        <input style={{ width: 300, marginBottom: 20 }} type="text" id="cvv" placeholder="Enter your user name" name="cvv" value={formik.values.cvv} onChange={formik.handleChange} />
                    </div>
                    {formik.errors.cvv && (
                        <p className="errorMsgs">{formik.errors.cvv}</p>
                    )}
                </div>

                <label htmlFor="email" style={{ fontSize: 20 }}>Email</label> <br />
                <input style={{ width: 680, marginBottom: 40 }} type="email" id="email" placeholder="Enter your email address" name="email" value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email && (
                    <p className="errorMsgs">{formik.errors.email}</p>
                )}
                <br />


                <label style={{ fontSize: 20 }} htmlFor="password">Password</label> <br />

                <input style={{ width: 680, marginBottom: 40 }} type="text" id="password" placeholder="Enter your password" name="password" value={formik.values.password} onChange={formik.handleChange} />
                {formik.errors.password && (
                    <p className="errorMsgs">{formik.errors.password}</p>
                )}
                <br />





                <label style={{ fontSize: 20 }} htmlFor="creditcard">ReferralCode</label> <br />

                <input style={{ width: 680, marginBottom: 40 }} type="text" id="creditcard" placeholder="Enter referral code" name="creditcard" value={formik.values.creditcard} onChange={formik.handleChange} />
                {formik.errors.creditcard && (
                    <p className="errorMsgs">{formik.errors.creditcard}</p>
                )}
                <br />
                <button style={{background :"#ED712E"}} type="submit" className="btn-Signup"><Link to="/Checkout">Sign up</Link></button>
                <div className="" style={{display :"flex" ,margin: "20px 240px"}}>
                <h2 className='h2'>Already have an account?<a style={{color : "#ED712E"}} href="">Login </a> </h2>
                </div>
           <div className="divContainer"><div className="divLine"></div><span className="divText">OR</span><div className="divLineLeft"></div></div>
                <Button className='btn-SignupOrther' ><p><AiFillFacebook /></p> Sign up with Facebook</Button>
                <Button className='btn-SignupOrther'><p><FcGoogle /></p> Sign up with Google</Button>
            </form>
        </>
    );
};

export default App;
