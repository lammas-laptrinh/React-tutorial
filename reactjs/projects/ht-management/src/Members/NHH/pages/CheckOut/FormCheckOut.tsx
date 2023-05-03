
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Paypal from "./Paypal";
import { Form } from 'antd';
import "./Payment.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
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
      <Form style={{padding:"0px 100px 0px 60px"}}>
        <h3>Payment-Detail</h3>

        <label htmlFor="email" style={{fontSize:20}}>Email</label> <br />
        <input  type="email" id="email" placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} />
        {formik.errors.email && (
          <p className="errorMsg">{formik.errors.email}</p>
        )}
        <br />
        <label style={{fontSize:20}} htmlFor="creditcard">Card Number</label> <br />
        <input type="text" id="creditcard" placeholder="xxxx xxxx xxxx xxxx" name="creditcard" value={formik.values.creditcard} onChange={formik.handleChange} />
        {formik.errors.creditcard && (
          <p className="errorMsg">{formik.errors.creditcard}</p>
        )}

        <div className="item-box" style={{display:'flex'}}>
          <div className="">
          <label style={{fontSize:20}} htmlFor="date">Expiry Date</label> <br />
          <input style={{width: 300}} type="month" id="date" placeholder="mm/yy" name="date" value={formik.values.date} onChange={formik.handleChange} />
          </div>
          <div className="" style={{marginLeft:80}}>
          <label style={{fontSize:20}} htmlFor="cvv">CVV</label> <br />
          <input style={{width: 300}} type="text" id="cvv" placeholder="xxx" name="cvv" value={formik.values.cvv} onChange={formik.handleChange} />
          </div>
        </div>
        {formik.errors.cvv && (
          <p className="errorMsg">{formik.errors.cvv}</p>
        )}


{/* Total */}

        <div className="item-total"  >
          <div className="item-price">
            <div className="total-subtotal" style={{marginBottom: 10 }}>
              <div className='Type-price'>Subtotal</div>
            </div>
            <div className="total-price"><p>100$</p></div>
          </div>

          <div className="item-price" style={{marginBottom: 10}}>
            <div className="total-Flatform">
              <div className='Type-price' >Flatform Fee</div>
            </div>
            <div className="total-price"><p>0$</p></div>
          </div>
          <hr />
          <div className="item-price" style={{marginBottom: 10}}>
            <div className="total-Amount">
              <div className='Type-price'>Total Amount</div>
            </div>
            <div className="total-price"><p>100$</p></div>
          </div>
        </div>
{/* end Total */}

        <Button className='button' style={{ height: 50,width: 600, textAlign: "center", marginLeft: "50px", background: "#ED712E" }} type="primary" onClick={showModal}>
          Thanh toán
        </Button>
        <Modal title="Confirm CheckOut" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          {checkout ? (
            <Paypal />
          ) : (
            <Button style={{ width: 480, textAlign: "center" }} onClick={() => { setCheckOut(true); }}> Xác nhận thanh toán</Button>
          )}
        </Modal>
      </Form>

    </>
  );
};

export default App;
