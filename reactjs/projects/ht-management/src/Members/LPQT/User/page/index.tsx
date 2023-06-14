import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import { firestoreDB } from '../../Firebase/firebase';
import '../css/index.css'
import { Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';

export default function MyAccount() {
    //userId from url
    const { userId } = useParams<{ userId: string }>();

    //firebase user data
    const [data, setData]: any = useState([]);
    userId && (
        //Get all user data from Firebase
        useEffect(() => {
            const fetchCollection = async () => {
                const allUserDocRef = (collection(firestoreDB, "users"));
                const [usersSnapshot] = await Promise.all([
                    getDocs(allUserDocRef),
                ]);
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
    //set default data
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        setEmail(data?.email);
        setUserName(data?.userName);
        setPhoneNumber(data?.phoneNumber);
        setName(data?.name);
    }, [data]);
    //Set Avatar
    const [avatarUrl, setAvatarUrl] = useState('');
    useEffect(() => {
        const previousAvatarUrl = localStorage.getItem('avatarUrl');
        if (previousAvatarUrl) {
            setAvatarUrl(previousAvatarUrl);
        }
    }, []);

    const handleAvatarChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Url = reader.result as string;
                setAvatarUrl(base64Url);
            };
            reader.readAsDataURL(file);
        }
    };
    const saveAvatar = () => {
        // save img to localStorage
        localStorage.setItem('avatarUrl', avatarUrl);
        const updateUserDocRef = doc(firestoreDB, "users", userId!);
        updateDoc(updateUserDocRef, {
            avatar: avatarUrl!,
            email: email!,
            phoneNumber: phoneNumber!,
            userName: userName!,
            name: name!
        }).then(() => {
            console.log("Data successfully updated!");
        }).catch((error) => {
            console.error("Error updating data: ", error);
        });
    };

    return (
        <div className='userConatiner'>
            <div className='userConatiner2'>
                <div className='backButtonUser'>
                    <Link to={'/dashboard'}>
                        <Button
                            size='large'
                            type="primary" danger
                            icon={<PoweroffOutlined />}
                        >
                            Back!
                        </Button>
                    </Link>
                </div>
                <div className='userTittle'>
                    User Detail Info
                </div>
                <div className='displayRowUser'>
                    <div className='uploadImage'>
                        <div>
                            <img src={avatarUrl} className='userAvatarImg'/>
                        </div>
                        <div>
                            <input className='custom-file-input' type="file" accept="image/*" onChange={handleAvatarChange} />
                        </div>
                    </div>
                    <div className='UserInfo'>
                        <div className='CoulumnShow1'>
                            <div className='ResInputTitle'>
                                UserName
                            </div>
                            <div className='MT8'>
                                <input
                                    className='InputContainUser'
                                    defaultValue={data?.userName}

                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='CoulumnShow1'>
                            <div className='ResInputTitle'>
                                Tên người dùng
                            </div>
                            <div className='MT8'>
                                <input
                                    className='InputContainUser'
                                    defaultValue={data?.name}

                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='CoulumnShow1'>
                            <div className='ResInputTitle'>
                                Email
                            </div>
                            <div className='MT8'>
                                <input
                                    className='InputContainUser'
                                    defaultValue={data?.email}

                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='CoulumnShow1'>
                            <div className='ResInputTitle'>
                                SDT
                            </div>
                            <div className='MT8'>
                                <input
                                    className='InputContainUser'
                                    defaultValue={data?.phoneNumber}

                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="container">
                    <a className="button" onClick={saveAvatar}>
                        <div className="button__line"></div>
                        <div className="button__line"></div>
                        <span className="button__text">SAVE</span>
                        <div className="button__drow1"></div>
                        <div className="button__drow2"></div>
                    </a>
                </div>
            </div>
        </div>
    );
}


