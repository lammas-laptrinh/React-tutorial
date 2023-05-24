
import { useParams } from 'react-router-dom';
function ItemDetail() {


  const { code } = useParams<{ code: string }>();
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'25px'}}>{code}</div>
  )
}

export default ItemDetail