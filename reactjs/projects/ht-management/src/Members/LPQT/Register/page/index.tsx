import '../RegisterCSS/index.css'
import FBImage from '../../assets/images/facebook.svg'
import GGImage from '../../assets/images/google.svg'
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';
import { firestoreDB } from '../../Firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function RegisterPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('');
    const collectionRef = collection(firestoreDB, 'users');
    const onSubmit = async (e: any) => {
        e.preventDefault()
        addDoc(collectionRef, {
            name: userName,
            email: email
        })
            .then((docRef: any) => {
                console.log("Document written with ID: ", docRef.id);
                navigate('/')
            })
            .catch((error: any) => {
                console.error("Error adding document: ", error);
            });
    }
    return (
        <div className='BigContain'>
            <div className='RegisContain'>
                <div className="RegisterTittle">
                    Get Your Free Account
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className='CoulumnShow'>
                        <div className='ResInputTitle'>
                            Full name
                        </div>
                        <div className='MT8'>
                            <input
                                className='InputContainRegis'
                            />
                        </div>
                    </div>
                    <div className='CoulumnShow'>
                        <div className='ResInputTitle1'>
                            Username
                        </div>
                        <div className='MT81'>
                            <input
                                className='InputContainRegis'
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='CoulumnShow1'>
                    <div className='ResInputTitle'>
                        Email
                    </div>
                    <div className='MT8'>
                        <input
                            className='InputContainRegisFull'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                </div>
                <div className='CoulumnShow1'>
                    <div className='ResInputTitle'>
                        Password
                    </div>
                    <div className='MT8'>
                        <input
                            className='InputContainRegisFull'
                        />
                    </div>
                </div>
                <div className='CoulumnShow1'>
                    <div className='ResInputTitle'>
                        Referral Password
                    </div>
                    <div className='MT8'>
                        <input
                            className='InputContainRegisFull'
                        />
                    </div>
                </div>
                <button
                    className='ComfirmButtonRes'
                    onClick={onSubmit}>
                    Sign up
                </button>
                <div className='divider'>
                    or
                </div>
                <div className='AlreadyHaveA'>
                    <div className='AlrdAText'>
                        Already have account?
                    </div>
                    <div className='LoginText'>
                        Log in
                    </div>
                </div>
                <button className='FBButtonRes'>
                    <img src={FBImage} alt="Facebook logo" />
                    <div className='flexGrow1'>Sign up with Facebook</div>
                </button>

                <button className='GGButtonRes'>
                    <img src={GGImage} alt="Google logo" />
                    <div className='flexGrow1'>Sign up with Google</div>
                </button>
            </div>
        </div >
    )
}


