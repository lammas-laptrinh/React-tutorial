import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
//import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs } from "@firebase/firestore";
import { firestoreDB } from "../../../firebase";

interface LoginFormProps {
  onSignUp: (
    fullName: any,
    userName: any,
    email: any,
    password: any,
    referralCode: any
  ) => void;
  onFacebookSignUp: () => void;
  onGoogleSignUp: () => void;
}

const SignUpPage: React.FC<LoginFormProps> = ({
  onFacebookSignUp,
  onGoogleSignUp,
}) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const validate = () => {
    if (!fullName) {
      toast.error("FullName không được trống!");
      return false;
    } else if (!phoneNumber) {
      toast.error("phoneNumber không được trống!");
      return false;
    } else if (!email) {
      toast.error("Email không được trống!");
      return false;
    } else if (!password) {
      toast.error("Password không được trống!");
      return false;
    } else if (!referralCode) {
      toast.error("Referral code không được trống!");
      return false;
    }
    return true;
  };

  const handleClick = async () => {
    try {
      if (validate()) {
        await addDoc(collection(firestoreDB, "users"), {
          name: fullName,
          phoneNumber: phoneNumber,
        });
        toast.success(`${phoneNumber} sign up success!`);
        setTimeout(() => {
          window.location.href = `/Login`;
        }, 1500);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  const [signupForm, setsignupForm] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestoreDB, "users"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setsignupForm(data);
        console.log("dataUsers", data);
      } catch (error) {
        console.error("Error retrieving users data:", error);
      }
    };

    fetchData();
    console.log(signupForm);
  }, []);

  return (
    <div className="login-form">
      <h2>Get Your Free Account</h2>
      <div className="form-group-1">
        <div className="title-FN">Full Name</div>
        <input
          type="text-1"
          placeholder="Enter your full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <div className="title-UN">Username</div>
        <input
          type="text-2"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <div className="title">Email</div>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <div className="title">Password</div>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <div className="title">Referral Code</div>
        <input
          type="code"
          placeholder="Enter referral code"
          value={referralCode}
          onChange={(e) => setReferralCode(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary" onClick={handleClick}>
          <div className="title-signup">Sign Up</div>
        </button>
        <div className="title-login">
          Already have an account? <span className="login">Login</span>
        </div>
      </div>

      <div className="Or">Or</div>

      <div className="form-group">
        <button className="btn btn-facebook" onClick={onFacebookSignUp}>
          <img
            width="22"
            height="22"
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="facebook"
          />
          <div className="title-other">Sign up with Facebook</div>
        </button>
        <button className="btn btn-google" onClick={onGoogleSignUp}>
          <img
            width="22"
            height="22"
            src="https://img.icons8.com/color/48/google-logo.png"
            alt="google"
          />
          <div className="title-other"> Sign up with Google</div>
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUpPage;
