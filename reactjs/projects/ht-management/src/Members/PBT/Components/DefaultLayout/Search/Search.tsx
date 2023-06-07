
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

interface SearchProps {
  title: string;
  searchValue?: string;
  onSearch?: (value: string) => void;
}

const Search = ({ title, searchValue, onSearch }: SearchProps) => (
  <>
    <Input
      placeholder={title}
      value={searchValue}
      onChange={(e) => onSearch && onSearch(e.target.value)}
      prefix={<SearchOutlined style={{ width: '20px' }} />}
    />
  </>
);

export default Search;
