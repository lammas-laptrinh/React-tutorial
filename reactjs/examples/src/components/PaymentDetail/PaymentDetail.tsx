import { useState } from "react";
import "./paymentdetail.css";
import { useFormik } from "formik";
import * as Yup from "yup";
const PaymentDetail = () => {
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
      email: Yup.string().required("Required").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Bạn phải nhập đúng cú pháp email "),
      creditcard: Yup.string().required("Required").min(16, "Bạn hãy kiểm tra lại mã số"),
      date: Yup.string().required("Required").min(5, "Bạn phải chọn tháng năm "),
      cvv: Yup.string().required("Required").min(3, "Bạn phải nhập đúng CVV ")
    }),
    onSubmit: (values) => {
      window.alert("Form submitted");
      console.log(values);
    }
  });


  const handleSubmit = (e:any) => {
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
    <section>
      <form className="PaymentDetail" onSubmit={formik.handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="form-left" >
                <h3>Payment-Detail</h3>

                <label htmlFor="email">Email address</label> <br />
                <input type="email" id="email" placeholder="Email" name="email" value={formik.values.email} onChange={formik.handleChange} />
                {formik.errors.email && (
                  <p className="errorMsg">{formik.errors.email}</p>
                )}
                <br />
                <label htmlFor="creditcard">Credit Card Number</label> <br />
                <input type="text" id="creditcard" placeholder="xxxx xxxx xxxx xxxx" name="creditcard" value={formik.values.creditcard} onChange={formik.handleChange} />
                {formik.errors.creditcard && (
                  <p className="errorMsg">{formik.errors.creditcard}</p>
                )}

                <div className="item-box">
                  <label htmlFor="date">Expiry date</label> <br />
                  <input type="month" id="date" placeholder="mm/yy" name="date" value={formik.values.date} onChange={formik.handleChange} />
                  <label htmlFor="cvv">CVV</label> <br />
                  <input type="text" id="cvv" placeholder="xxx" name="cvv" value={formik.values.cvv} onChange={formik.handleChange} />
                </div>
                {formik.errors.cvv && (
                  <p className="errorMsg">{formik.errors.cvv}</p>
                )}



                <input type="checkbox" />
                <label htmlFor=""> I've a promo code</label> <br />


                <div className="item-total">
                  <div className="item-price">
                    <div className="total-subtotal">
                      <span>subtotal</span>
                    </div>
                    <div className="total-price"><p>$96</p></div>
                  </div>

                  <div className="item-price">
                    <div className="total-Flatform">
                      <span>Flatform Fee</span>
                    </div>
                    <div className="total-price"><p>$4</p></div>
                  </div>


                  <hr />

                  <div className="item-price">
                    <div className="total-Amount">
                      <span>Total Amount</span>
                    </div>
                    <div className="total-price"><p>$100</p></div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary">Continue</button>
              </div>
            </div>

            <div className="col-4">
              <div className="form-right">
                <div className="inner-top">
                  <div className="title"> Subscribe and start saving <br /> your money today!</div>
                </div>

                <div className="">
                  <div className=" Profession-plan">
                    <div className="img"> img </div>
                    <div className="discount">
                      <div className="inner-title"> Professional Plan</div>
                      <div className="price"><strong>$98</strong>/month</div>
                    </div>
                  </div>
                </div>


                <div className=" inner-bottom">
                  <ul>
                    <li>All features in <strong>basic included</strong></li>
                    <li>Easy and flexible business with <strong> invoice managemen</strong></li>
                    <li>Full time </li>
                    <li><strong>20 TB</strong> cloud storage </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default PaymentDetail;




