import React, { useState } from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <Input
      placeholder="Search"
      prefix={<SearchOutlined />}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      onPressEnter={handleSearch}
      style={{ width: 200, marginLeft: 50, borderRadius: 30, fontFamily: 'Nunito, sans-serif' }} // Added fontFamily style
    />
  );
};

export default SearchInput;