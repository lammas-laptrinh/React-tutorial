import { Button } from 'antd';
import List from '../Room/Img/list.svg';
import Grid from '../Room/Img/grid.svg'
import './view.css'
type ViewModeProps = {
  isGridView: boolean;
  onToggleView: () => void;
};

const View = ({ onToggleView }: ViewModeProps) => {
  return (
    <>
      <Button
        type="text"
        onClick={onToggleView}
        icon={<img src={Grid} alt="Grid" style={{ width: '16px', height: '16px', marginRight: '11px' }} />}
        style={{ marginRight: '8px' }}
      >
        <span className='view'>Grid</span>
      </Button>
      <Button
        type="text"
        onClick={onToggleView}
        icon={<img src={List} alt="List" style={{ width: '16px', height: '16px', marginRight: '11px' }} />}
      >
        <span className='view'>Line</span>
      </Button>
    </>
  );
};

export default View;