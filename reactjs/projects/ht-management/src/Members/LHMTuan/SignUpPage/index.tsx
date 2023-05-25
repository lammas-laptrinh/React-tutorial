import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

interface LoginFormProps {
  onSignUp: (
    fullName: string,
    userName: string,
    email: string,
    password: string,
    referralCode: string
  ) => void;
  onFacebookSignUp: () => void;
  onGoogleSignUp: () => void;
}

const SignUpPage: React.FC<LoginFormProps> = ({
  onFacebookSignUp,
  onGoogleSignUp,
}) => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");

  const validate = () => {
    if (!fullName) {
      toast.error("FullName không được trống!");
      return false;
    } else if (!userName) {
      toast.error("UserName không được trống!");
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
  const handleClick = () => {
    if (validate()) {
      toast.success(`${userName} sign up success!`);
    }
  };

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
          placeholder="Enter your user name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
        <ToastContainer />
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
      </div>
    </div>
  );
};

export default SignUpPage;
