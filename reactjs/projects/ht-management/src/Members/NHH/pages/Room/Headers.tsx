import {BellOutlined,InfoCircleOutlined} from '@ant-design/icons';
import { Avatar  } from "antd";
import { Header } from "antd/es/layout/layout";
import "./index.scss"
export default function Headers() {
    return <div>
       <Header className="Header" style={{display: 'flex' , justifyContent: "space-between"}}>                      
                        <span className="Header__version" >Version 1.0.0</span>                
                        <div className="Header__right" >
                        <span className="Header__icon"><BellOutlined /> </span>
                        <span className="Header__icon"><InfoCircleOutlined /></span>
                        <span className="Header__nameuser"> Nguyễn Huy Hoàng </span>
                        <span> <Avatar></Avatar></span>
                        </div>                      
        </Header>                
    </div>;
  }
  