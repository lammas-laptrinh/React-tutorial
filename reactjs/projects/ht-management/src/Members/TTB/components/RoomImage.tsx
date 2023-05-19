import '../static/index.css'
import { RoomProps } from '../types';
import Image from '../static/images/image19.png'

export default function RoomImage({ }: RoomProps) {
    //this is the room Image
    return (
        <img className='DetailImage' src={Image} alt="Room" />
    );
}