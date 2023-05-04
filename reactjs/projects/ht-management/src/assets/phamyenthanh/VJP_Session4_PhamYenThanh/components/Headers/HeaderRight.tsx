import React from "react";
import { HeaderDesc } from "./types";

interface HeaderDescc {
  headersDescc:HeaderDesc
}

const HeaderRight:React.FC<HeaderDescc> = (props) => {
  const { headersDescc } = props;
  
  return (
    <>
    <ul >
            <li>{headersDescc.icon}</li>
            <li>{headersDescc.icon1}</li>
            <li>{headersDescc.name}</li>
            <li><img src={headersDescc.avatar} alt="" /></li>
          </ul>
    </>
    
  )
}

export default HeaderRight;