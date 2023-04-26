
import Standard from './Stardard/Standard';
import King from './King/King';
import Double from './Double/Double';

interface Props {
  searchValue: string;
}

function Grid(props: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <h2>Standard</h2>
        <Standard searchValue={props.searchValue} />
      </div>
      <div>
        <h2>Double</h2>
        <Double searchValue={props.searchValue} />
      </div>
      <div>
        <h2>King</h2>
        <King searchValue={props.searchValue} />
      </div>
    </div>
  );
}

export default Grid;
