import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { toast } from "react-toastify";
import { FormEvent } from "react";
import PaypalCheckout from "./PaypalCheckout";

type PaymentDetails = {
  name?: string;
  cardNumber?: string;
  expiryMonth?: string;
  expiryYear?: string;
  expiryDate?: string;
  cvv?: string;
  subtotal?: number;
};

type PaymentDetailsFormProps = {
  onSubmit: (paymentDetails: PaymentDetails) => void;
};

const PaymentDetailsForm: React.FC<PaymentDetailsFormProps> = ({
  onSubmit,
}) => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
    name: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    expiryDate: "",
    cvv: "",
    subtotal: 100,
  });

  const [errors, setErrors] = useState<Partial<PaymentDetails>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPaymentDetails((prevPaymentDetails) => ({
      ...prevPaymentDetails,
      [name]: value,
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      onSubmit(paymentDetails);
      setPaymentDetails({
        name: "",
        cardNumber: "",
        expiryMonth: "",
        expiryYear: "",
        expiryDate: "",
        cvv: "",
        subtotal: 100,
      });
      onSubmitHandler(paymentDetails);
      setErrors({});
    }
  };

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    //this guy is notify message
    toast.success("Payment success!!!", {
      autoClose: 4000,
    });
    setErrors({});
  };

  const validateField = (name: string, value: string): string | undefined => {
    if (name === "name" && value.trim() === "") {
      return "Email is required";
    }
    if (name === "cardNumber" && !/^\d{16}$/.test(value)) {
      return "Card number must be 16 digits";
    }
    if (name === "expiryMonth") {
      if (!/^\d{1,2}$/.test(value) || Number(value) < 1 || Number(value) > 12) {
        return "Expiry month must be between 1 and 12";
      }
      setPaymentDetails({ ...paymentDetails, [name]: value });
    } else if (name === "expiryYear") {
      if (!/^\d{4}$/.test(value) || Number(value) < new Date().getFullYear()) {
        return "Expiry year must be a valid 4-digit year";
      }
      setPaymentDetails({ ...paymentDetails, [name]: value });
    }
    if (paymentDetails.expiryMonth && paymentDetails.expiryYear) {
      const today = new Date();
      const expiryDate = new Date(
        `${paymentDetails.expiryYear}-${paymentDetails.expiryMonth}-01`
      );
      if (expiryDate < today) {
        return "Card has expired";
      }
    }

    if (name === "cvv" && !/^\d{3}$/.test(value)) {
      return "CVV must be 3 digits";
    }
  };

  const validate = (): boolean => {
    const errors: Partial<PaymentDetails> = {};
    setErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const [showPaypal, setShowPaypal] = useState(false);

  const handleClick = () => {
    if (validate()) {
      setShowPaypal(!showPaypal);
    }
  };
  if (showPaypal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      <Form className="form-container" onSubmit={handleSubmit}>
        <h2>Payment Details</h2>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="name"
            name="name"
            id="name"
            placeholder="Enter email"
            value={paymentDetails.name}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={!!errors.name}
            className="ControlEmail"
          />
          {errors.name && (
            <Form.Control.Feedback type="invalid" className="Feedback">
              {errors.name}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="xxxx xxxx xxxx xxxx"
            value={paymentDetails.cardNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            isInvalid={!!errors.cardNumber}
            className="ControlCreditCard"
          />
          {errors.cardNumber && (
            <Form.Control.Feedback type="invalid" className="Feedback">
              {errors.cardNumber}
            </Form.Control.Feedback>
          )}
        </Form.Group>
        <Row className="form-item">
          <Col className="Col1">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control
              type="text"
              name="expiryDate"
              id="expiryDate"
              placeholder="mm / yy"
              value={paymentDetails.expiryDate}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.expiryDate}
              className="ControlED"
            />
            {errors.expiryDate && (
              <Form.Control.Feedback type="invalid" className="Feedback">
                {errors.expiryDate}
              </Form.Control.Feedback>
            )}
          </Col>

          <Col className="Col2">
            <Form.Label>CVV</Form.Label>
            <Form.Control
              type="text"
              name="cvv"
              id="cvv"
              placeholder="xxx"
              value={paymentDetails.cvv}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.cvv}
              className="ControlCVV"
            />
            {errors.cvv && (
              <Form.Control.Feedback type="invalid" className="Feedback">
                {errors.cvv}
              </Form.Control.Feedback>
            )}
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I've a prome code" />
        </Form.Group>
        <div>
          <div className="Paymentleft-title">
            <p className="mb-3">Subtotal</p>
            <p className="mb-4">96$</p>
          </div>
          <div className="Paymentleft-title">
            <div className="Paymentleft-title-p">
              <p className="mb-3">Platform Fee</p>
            </div>
            <p className="mb-4">4$</p>
          </div>
          <div className="Paymentleft-title">
            <p className="mb-3">Total Amount</p>
            <p className="mb-4">{paymentDetails.subtotal}$</p>
          </div>
        </div>
        <div>
          {showPaypal && (
            <PaypalCheckout
              total={10}
              setShowPaypal={setShowPaypal}
              showPaypal={showPaypal}
            />
          )}
          <Button
            variant="primary"
            type="submit"
            className="Button"
            onClick={handleClick}
          >
            Thanh toán
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default PaymentDetailsForm;
