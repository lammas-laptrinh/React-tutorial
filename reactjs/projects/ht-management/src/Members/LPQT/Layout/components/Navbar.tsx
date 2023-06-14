import React, { useEffect, useState } from 'react';
import { BellOutlined, ExclamationCircleOutlined, UserOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Avatar, Dropdown } from 'antd';
import { firestoreDB } from '../../Firebase/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
  //navigate
  const navigate = useNavigate()
  //get userId
  const userId = localStorage.getItem('currentLogin');
  const [data, setData]: any = useState();
  userId && (
    //Get all user data from Firebase
    useEffect(() => {
      const fetchCollection = async () => {
        const allUserDocRef = (collection(firestoreDB, "users"));
        const [usersSnapshot] = await Promise.all([
          getDocs(allUserDocRef),]);
        //the Firebase users data
        const users = await Promise.all(usersSnapshot.docs.map(async (doc) => {
          const usersData = doc.data();
          const userId = doc.id;
          return {
            ...usersData,
            userId: userId,
          }
        }));
        const currentUser = users.find((data: any) => data.userId === userId) || {};
        setData(currentUser);
      };
      fetchCollection();
    }, [firestoreDB]))
  //Dropdown Item
  const handleLogout = () => {
    localStorage.removeItem('currentLogin');
    navigate('/login')
  };
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Link to={`/account/${userId}`}>
          <div>
            Your account
          </div>
        </Link>
      ),
      icon: <UserOutlined />
    },
    {
      key: '2',
      label: (
        <a onClick={handleLogout}>
          Log out
        </a>
      ),
      icon: <PoweroffOutlined />,
      danger: true,
    },

  ];
  return (
    <div className='displayFlexColor'>
      <div className='NavVer'>Version 1.0.0</div>
      <div className='NavMoveRight'>
        <div className='NavIcon'><ExclamationCircleOutlined /></div>
        <div className='NavIcon'><BellOutlined /></div>
        {
          (data) ? (
            <div className='NavUserName'>
              {data?.name}
              <Dropdown menu={{ items }} >
                <Avatar className="AvatarMain" src={data?.avatar}>
                </Avatar>
              </Dropdown>
            </div>
          )
            :
            (
              <Link to={'/login'}>
                <div className='NavLogin'>
                  Đăng nhập
                </div>
              </Link>
            )
        }
      </div>
    </div>
  );
};

export default Navbar;
