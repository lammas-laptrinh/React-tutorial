
import React, { useState } from 'react';

import "./Payment.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from 'react-router-dom';
import { GrFormClose } from "react-icons/gr";
const App: React.FC = () => {

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkout, setCheckOut] = useState(false)
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //////////////////////


  //form
  const [email, setEmail] = useState("");
  const [creditcard, setCreditCard] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      creditcard: "",
      date: "",
      cvv: ""
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Hãy nhập Email").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Bạn phải nhập đúng cú pháp email "),
      creditcard: Yup.string().required("Hãy Nhập mã số").min(16, "Bạn hãy kiểm tra lại mã số"),
      date: Yup.string().required("Hãy chọn tháng năm").min(5, "Bạn phải chọn tháng năm "),
      cvv: Yup.string().required("Hãy nhập số CVV").min(3, "Bạn phải nhập đúng CVV ")
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
      date: date,
      cvv: cvv
    };
    console.log(Payment);
  };

  console.log(formik.values);



  return (
    <>
     <div className="close"><Link to="/DetailRoom"><GrFormClose /></Link></div>
      <form style={{padding:"0px 100px 0px 60px"}} onSubmit={formik.handleSubmit}>
        <h3 className='h3'>Payment-Detail</h3>

        <label htmlFor="email" style={{fontSize:20}}>Email</label> <br />
        <input style={{marginBottom: 40}}  type="email" id="email" placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} />
        {formik.errors.email && (
          <p className="errorMsg">{formik.errors.email}</p>
        )}
        <br />
        <label style={{fontSize:20}} htmlFor="creditcard">Card Number</label> <br />
        
        <input style={{marginBottom: 40}} type="text" id="creditcard" placeholder="xxxx xxxx xxxx xxxx" name="creditcard" value={formik.values.creditcard} onChange={formik.handleChange} />
        {formik.errors.creditcard && (
          <p className="errorMsg">{formik.errors.creditcard}</p>
        )}

        <div className="item-box" style={{display:'flex'}}>
          <div className="">
          <label style={{fontSize:20}} htmlFor="date">Expiry Date</label> <br />
          <input  style={{width: 300 ,marginBottom: 20}} type="month" id="date" placeholder="mm/yy" name="date" value={formik.values.date} onChange={formik.handleChange} />
          </div>
          <div className="" style={{marginLeft:80}}>
          <label style={{fontSize:20}} htmlFor="cvv">CVV</label> <br />
          <input style={{width: 300 , marginBottom :20}} type="text" id="cvv" placeholder="xxx" name="cvv" value={formik.values.cvv} onChange={formik.handleChange} />
          </div>
        </div>
        {formik.errors.cvv && (
          <p className="errorMsg">{formik.errors.cvv}</p>
        )}
      </form>

    </>
  );
};

export default App;
