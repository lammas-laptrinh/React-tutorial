import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import "./HomePage.css"
import ListRoom from './ListRoom';
import { TfiFaceSad } from "react-icons/tfi";
import { Link } from 'react-router-dom';
const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: `Single Room`,
    children: <a href=""><Link to="/DetailRoom"><ListRoom /> </Link></a>,
  },
  {
    key: '2',
    label: `Double Room`,
    children: <a href="" style={{display: " flex" , alignItems: 'center' }}>No room <TfiFaceSad /></a>,
  },
  {
    key: '3',
    label: `King Room`,
    children: <a href=""><Link to="/DetailRoom"><ListRoom /> </Link></a>, 
   },
  {
    key: '4',
    label: `Queen Room`,
    children: <a href=""><Link to="/DetailRoom"><ListRoom /> </Link></a>, 
   },
  {
    key: '5',
    label: `Lanai Room`,
    children: <a style={{display: " flex" , alignItems: 'center' }} href="">No room <TfiFaceSad /></a>,
  },
];
const App: React.FC = () =>
  <Tabs className='RoomType' style={{ margin: 50 }} defaultActiveKey="1" items={items} onChange={onChange} />;

export default App;