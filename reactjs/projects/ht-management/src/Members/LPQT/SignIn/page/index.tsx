import '../css/index.css'
import FBImage from '../../assets/images/facebook.svg'
import GGImage from '../../assets/images/google.svg'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { firestoreDB } from '../../Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginterPage() {
    const navigate = useNavigate();
    const [emailOrUser, setEmailorUser] = useState('')
    //Get all user data from Firebase
    const [data, setData]: any = useState([]);
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
            const data = { user: users };
            setData(data);
        };
        fetchCollection();
    }, [firestoreDB]);
    //setup FireBase
    const onSubmit = async (e: any) => {
        e.preventDefault()
        const userNameCheck = await data?.user.find((data: any) => data.name === emailOrUser) || {};
        if (userNameCheck) {
            localStorage.setItem('currentLogin', userNameCheck.userId);
            toast.success(
                'ĐĂNG NHẬP THÀNH CÔNG',
                {
                    autoClose: 2000,
                    closeOnClick: false,
                    closeButton: true,
                    hideProgressBar: true,
                }
            );
            setTimeout(() => {
                navigate('/dashboard')
            }, 2005)
        }

    }
    //setup FireBase
    return (
        <>
            <ToastContainer />
            <div className='BigContain'>
                <div className='LoginContain'>
                    <div className="LoginterTittle">
                        Log In
                    </div>
                    <div className='CoulumnShow1'>
                        <div className='ResInputTitle'>
                            Email or UserName
                        </div>
                        <div className='MT8'>
                            <input
                                className='InputContainLoginFull'
                                onChange={(e) => setEmailorUser(e.target.value)}
                                value={emailOrUser}
                            />
                        </div>
                    </div>
                    <div className='CoulumnShow1'>
                        <div className='ResInputTitle'>
                            Password
                        </div>
                        <div className='MT8'>
                            <input
                                className='InputContainLoginFull'
                            />
                        </div>
                    </div>
                    <button
                        className='ComfirmButtonRes'
                        onClick={onSubmit}>
                        Sign in
                    </button>
                    <div className='divider'>
                        or
                    </div>
                    <button className='FBButtonRes'>
                        <img src={FBImage} alt="Facebook logo" />
                        <div className='flexGrow1'>Sign in with Facebook</div>
                    </button>

                    <button className='GGButtonRes'>
                        <img src={GGImage} alt="Google logo" />
                        <div className='flexGrow1'>Sign in with Google</div>
                    </button>
                </div>
            </div >
        </>

    )
}


