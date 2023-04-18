import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

const Search= (props:{title:string}) => (
  <>
    <Input placeholder={props.title} prefix={<SearchOutlined style={{width:'20px'}}/>} />
  </>
);

export default Search;