import TOPImg from "../assets/img/room.png";
import { SafetyCertificateOutlined } from "@ant-design/icons";

export default function PaymentInfo() {
  //  const { rows } = props;

  const DetailRoom = [
    {
      roomType: "King room",
      description:
        "orem Ipsum has been the industry standard dummy text ever since the 1500s",
      service: ["Wifi , ", "Gym, ", "Food "],
      checkout: "12/06/2023- 12/08/2023",
    },
  ];

  return (
    <div className="payment-info-container">
      <div className="payment-info-top-container">
        {/* Hộp trên */}
        <div
          className="payment-info-top-box"
          style={{
            backgroundImage: `url(${TOPImg})`,
          }}
        />
        {/* Hộp dưới */}
        <div className="payment-info-bottom-box" />
      </div>

      {/* Đoạn text của hộp dưới */}
      <div className="payment-info-details-box">
        {DetailRoom.map((item) => (
          <>
            <div className="ItemRoomType">{item.roomType}</div>
            <div className="ItemDes">{item.description}</div>
            <div className="Strikethrough"></div>
            <div className="service">Dịch vụ</div>
            <div className="ItemService">{item.service}</div>
            <div className="checkout">Thời gian</div>
            <div className="ItemCheckout">{item.checkout}</div>
            <div className="Strikethrough"></div>
          </>
        ))}
        <div className="Secure">
          <SafetyCertificateOutlined />
          <span>Secure Payment</span>
        </div>
      </div>
    </div>
  );
}
