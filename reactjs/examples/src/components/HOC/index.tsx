import React, { useEffect } from "react";

export default function HOC({ children }: any) {
    useEffect(()=>{
        //get set data
        //call API
    },[])
    // data
  const onShowAlert = () => {
    alert("HOC Alert");
  };
  return ()=>children;
}
