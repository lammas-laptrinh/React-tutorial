
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import "./Payment.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonCheckOut from './ButtonCheckOut';
import FormCheckOuts from './FormCheckOuts';
import { Link } from 'react-router-dom';
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
    <form>
          <FormCheckOuts />


{/* Total */}

        <div className="item-total"  >
          <div className="item-price">
              <div className='Type-price'>Subtotal</div>
            <div className="total-price">100$</div>
          </div>

          <div className="item-price" style={{marginBottom: 10}}>
            <div className="total-Flatform">
              <div className='Type-price' >Flatform Fee</div>
            </div>
            <div className="total-price">0$</div>
          </div>
          <hr />
          <div className="item-price" style={{marginBottom: 10}}>         
              <div className='Type-price'>Total Amount</div>
            <div className="total-price">100$</div>
          </div>
        </div>
{/* end Total */}

        <Button className='button' style={{ height: 50,width: 600, textAlign: "center", marginLeft: "50px", background: "#ED712E" }} type="primary" onClick={showModal}>
          Thanh toán
        </Button>
        <Modal title="Confirm CheckOut" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          {checkout ? (
            <ButtonCheckOut />
          ) : (
            <Button style={{ width: 480, textAlign: "center" }} onClick={() => { setCheckOut(true); }}> <Link to="/SuccessCheckout">Xác nhận thanh toán</Link></Button>
          )}
        </Modal>
      </form>

    </>
  );
};

export default App;
