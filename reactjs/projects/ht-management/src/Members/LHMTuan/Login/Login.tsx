import React, { useState, useEffect } from "react";
import { Form, Input, Button } from "antd";
import { collection, query, where, getDocs } from "firebase/firestore";
import { firestoreDB } from "../../../firebase";
import { ToastContainer, toast } from "react-toastify";

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (userId !== null) {
      // User ID has been set, perform additional actions here
      console.log("User ID:", userId);
      // Perform additional actions (e.g., redirect to dashboard)
      toast.success(`Login success!`);
      setTimeout(() => {
        window.location.href = `/Landing`;
      }, 10);
    }
  }, []);

  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      const usersCollectionRef = collection(firestoreDB, "users");

      // Query the collection for a user with matching name and phoneNumber
      const q = query(
        usersCollectionRef,
        where("name", "==", values.name),
        where("phoneNumber", "==", values.phoneNumber)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.size > 0) {
        // User found, save the user ID in session
        const userId = querySnapshot.docs[0].id;
        sessionStorage.setItem("userId", userId);
        console.log("User found! ID:", userId);
      } else {
        // User not found, display error message
        console.log("User not found!");
      }
    } catch (error) {
      console.log("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onFinish={onFinish}>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="phoneNumber"
        rules={[{ required: true, message: "Please enter your phone number" }]}
      >
        <Input placeholder="Phone Number" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Login
        </Button>
      </Form.Item>
      <ToastContainer />
    </Form>
  );
};

export default LoginForm;
