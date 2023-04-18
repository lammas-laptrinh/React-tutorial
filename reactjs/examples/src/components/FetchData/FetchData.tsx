import { useEffect, useState } from "react";
import {db} from  "../../firebase"
import { collection, getDocs } from "firebase/firestore";
import "./aaa.css";
const FetchData = () => {
    const [data,setData] =useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
            let list = [] 
            try{
                const querySnapshot = await getDocs(collection(db, "Users"));
                querySnapshot.forEach((doc) => {
                 list.push({ id: doc.id , ...doc.data()});
                });
                setData(list);
                console.log(list);
            }catch(err){
                console.log(err);
            }
        }
        fetchData()
    },[])

    console.log(data)


    return (<>
       



<h2><strong>Booking list</strong></h2>
      <table className="table table-bordered">
        <tr>
          <th>Avatar</th>
          <th>Tên</th>
          <th>SĐT</th>
          <th>Loại phòng</th>
          <th>Check in</th>
          <th>Check out</th>
          <th>Trạng thái</th>
          <th>Hành động</th>

        </tr>

          {data.map((item)=>(   
        <tr>        
          <td ><img style={{width: 50}} src="https://firebasestorage.googleapis.com/v0/b/buoi2-6849f.appspot.com/o/th.jpg?alt=media&token=b01b6a7f-14e6-407b-abc3-bc64054d64ee" alt="" /></td>
          <td>{item.Name}</td>
          <td>{item.SDT}</td>
          <td>{item.TypeRoom}</td>
          <td>{item.CheckIn}</td>
          <td>{item.CheckOut}</td>    
          <td>{item.Status}</td>
          <td><button type="primary" ghost>
            Detele
          </button> |
            <button type="primary" danger ghost>
              Edit
            </button>
          </td>
        </tr>
        ))} 

      </table>
    </>);
}

export default FetchData;