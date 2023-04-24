import { UnorderedListOutlined, InsertRowBelowOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type ViewModeProps = {
  isGridView: boolean;
  onToggleView: () => void;
};

const View = ({  onToggleView }: ViewModeProps) => {
  return (
    <>
      <Button
        type="text"
        onClick={onToggleView}
        icon={<UnorderedListOutlined />}
        style={{ marginRight: '8px' }}
      >
        List View
      </Button>
      <Button
        type="text"
        onClick={onToggleView}
        icon={<InsertRowBelowOutlined />}
      >
        Grid View
      </Button>
    </>
  );
};

export default View;