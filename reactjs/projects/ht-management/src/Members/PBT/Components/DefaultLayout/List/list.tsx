
import ListStandard from './ListStandard/ListStandard'
import ListDouble from './ListDouble/ListDouble'
import ListKing from './ListKing/ListKing'

interface Props {
    searchValue: string;
  }

function List(props: Props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div>
                <span style={{fontSize:'32px' , fontWeight:'700'}}>
                    Standard
                </span>
                <ListStandard searchValue={props.searchValue}/>
            </div>
            <div>
                <span style={{fontSize:'32px' , fontWeight:'700'}}>
                    Double
                </span>
                <ListDouble searchValue={props.searchValue}/>
              
            </div>
            <div>
                <span style={{fontSize:'32px' , fontWeight:'700'}}>
                    King
                </span>
                <ListKing searchValue={props.searchValue}/>
              
            </div>
        </div>
    )
}

export default List