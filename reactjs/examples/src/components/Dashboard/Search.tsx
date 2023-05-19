import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const SearchInput: React.FC = () => {
  return (
    <Input
      prefix={<SearchOutlined />}
      placeholder="Search" style={{ width: '200px', borderRadius: '20px', marginLeft: '10px' }}
    />
  );
};

export default SearchInput;