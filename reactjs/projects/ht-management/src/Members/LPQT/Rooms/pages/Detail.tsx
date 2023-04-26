import RoomImage from "../components/RoomImage";
import { useParams } from 'react-router-dom';
import RoomInfo from "../components/RoomInfo";
import { Room } from "../type";


export default function Detail() {
    const { roomId } = useParams<{ roomId: string }>();
    const roomData: Room[] = [
        {
            id: 'St_1',
            name: 'Phòng 1',
            checkIn: new Date('2023-11-20'),
            checkOut: new Date('2023-11-22'),
            roomType: 'Standard',
            img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWx8ZW58MHx8MHx8&w=1000&q=80',
            description: 'Đây là mô tả của căn phòng này, không ngắn cũng không dài',
            status: 'paid',
            serviceCount: 2,
            service: [
                { id: 'svSt_1', serviceType: { id: 'svt_1', serviceTypeName: 'Giao đồ' }, detail: 'Đói quá, giao đồ ăn lên đây', roomId: 'St_1' },
                { id: 'svSt_2', serviceType: { id: 'svt_1', serviceTypeName: 'Sửa chữa' }, detail: 'Nhà tắm không có nước', roomId: 'St_1' }
            ]
        },
        {
            id: 'St_2',
            name: 'Phòng 2',
            checkIn: new Date('2023-11-23'),
            checkOut: new Date('2023-11-25'),
            roomType: 'Standard',
            img: 'https://thumbs.dreamstime.com/b/hotel-bed-room-21064950.jpg',
            status: 'paid',
            serviceCount: 1,
            service: [
                { id: 'svSt_3', serviceType: { id: 'svt_1', serviceTypeName: 'Giao đồ' }, detail: 'Đói quá bợn ơi, đồ ăn sáng đâu', roomId: 'St_2' },
            ]
        },
        {
            id: 'St_3',
            name: 'Phòng 3',
            checkIn: new Date('2023-11-26'),
            checkOut: new Date('2023-11-28'),
            roomType: 'Standard',
            img: 'https://media.radissonhotels.net/image/radisson-hotel-antananarivo-waterfront/guest-room/16256-125560-f72546759_3xl.jpg?impolicy=CustomCrop&cwidth=670&cheight=603',
            description: 'Đây là mô tả của căn phòng này. Do tôi muốn nó dài nên sẽ Ctr C + V. Đây là mô tả của căn phòng này. Do tôi muốn nó dài nên sẽ Ctr C + V. Đây là mô tả của căn phòng này. Do tôi muốn nó dài nên sẽ Ctr C + V',
            status: 'not pay',
            serviceCount: 1,
            service: [
                { id: 'svSt_4', serviceType: { id: 'svt_2', serviceTypeName: 'Sửa chữa' }, detail: 'Bồn cầu tắt nghẽn rồi', roomId: 'St_3' },
            ]
        },
        {
            id: 'Db_1',
            name: 'Phòng 1',
            checkIn: new Date('2023-11-29'),
            checkOut: new Date('2023-12-01'),
            roomType: 'Double',
            img: 'https://d2ile4x3f22snf.cloudfront.net/wp-content/uploads/sites/227/2018/03/04090558/SGMS8290.jpg',
            description: 'Đây là mô tả của căn phòng này. Do tôi muốn nó dài nên sẽ Ctr C + V. Đây là mô tả của căn phòng này. Do tôi muốn nó dài nên sẽ Ctr C + V. Đây là mô tả của căn phòng này. Do tôi muốn nó dài nên sẽ Ctr C + V',
            status: 'not pay',
        },
        {
            id: 'K_1',
            name: 'Phòng 1',
            checkIn: new Date('2023-12-02'),
            checkOut: new Date('2023-12-04'),
            roomType: 'King',
            img: 'https://www.hotelgrandsaigon.com/wp-content/uploads/sites/227/2017/12/GRAND_SEDK_01.jpg',
            description: 'Đây là mô tả của căn phòng này. Do tôi muốn nó dài nên sẽ Ctr C + V. Đây là mô tả của căn phòng này. Do tôi muốn nó dài nên sẽ Ctr C + V. Đây là mô tả của căn phòng này. Do tôi muốn nó dài nên sẽ Ctr C + V',
            status: 'paid',
            serviceCount: 1,
            service: [
                { id: 'svK_1', serviceType: { id: 'svt_2', serviceTypeName: 'Sửa chữa' }, detail: 'Phòng có ma, cửa sổ tự đóng mở', roomId: 'K_1' },
            ]
        },
    ];
    // Find the room object with the matching id
    const matchedRoom = roomData.find((room) => room.id === roomId);

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ flex: 0.3, marginRight: '40px' }}>
                <RoomImage row={matchedRoom!} />
            </div>
            <div style={{ flex: 2 }}>
                <RoomInfo row={matchedRoom!} />
            </div>

        </div>
    )
}