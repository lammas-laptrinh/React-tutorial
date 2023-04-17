import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';
import {BiWindows} from  'react-icons/bi'
const Playmentright = () => {



    return (
        <div className='Playmentright'>
            <div className='Playmentright-top'>
                <div className='Playmentright-top-title'>
                    <BiWindows/>
                    <p>Subscribe and start saving <br /> your money today!</p>
                </div>
            </div>

            <div className='Playmentright-boot'>
                <div className='Playmentright-top-title1'>
                <ul className="a">
                    <li>All features in basic included</li>
                    <li>Easy and dlexible business with invoice<br/> management</li>
                    <li>Full</li>
                    <li>20 TB cloud storage</li>
                </ul>
                </div>
                <div>
                    <p> Modify plan</p>
                </div>

            </div>
            <div className='Playmentright-center'>
                <div  className='Playmentright-top-title2'>
                <div >
                    hinh anh
                </div>
                <div>
                    <div>
                    Professional Plan
                    </div>
                    <div>
                        $96 / moth
                    </div>
                </div>
                </div>
                
              
            </div>
        </div>
    )
}

export default Playmentright