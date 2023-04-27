import { BarsOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useState } from "react";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { Input } from 'antd';
const { Search } = Input;
export default function index() {
    const [query, setQuery] = useState("");
    console.log(query);
    return <div>
        <Header style={{ background: "#F5F5F5", margin: "20px 0px 40px 0px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div className="inner-left" style={{ display: "flex", alignItems: "center" }}>
                <h1 className='lable'>Rooms</h1>
                <Search placeholder="input search text" onChange={(e) => setQuery(e.target.value)} style={{ width: 200 }} />
            </div>
            <div className="inner-right" style={{ display: "flex", alignItems: "center" }}>
                <h3 className='view' style={{ marginRight: "30px" }}>View: </h3>
                <Button style={{ background: "#F5F5F5", marginRight: "30px" }}><AppstoreOutlined /> Gird</Button>
                <Button style={{ background: "#F5F5F5" }}><BarsOutlined />List </Button>
            </div>
        </Header>
    </div>;
}