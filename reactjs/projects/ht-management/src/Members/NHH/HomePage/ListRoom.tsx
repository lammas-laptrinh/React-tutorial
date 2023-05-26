import { content } from "@src/HomePages";

export default function ListRoom() {
    return (
        <>
            {content.map((item) => (
                <div className="RoomBox">
                    <div className="Content-img">
                        <img src={item.Img} alt="" />
                    </div>
                    <div className="Content-Roomtype">{item.TypeRoom}</div>
                    <div className="Content-des">Lorem Ipsum is simply dummy text of the <br /> printing .</div>
                </div>
            ))}
        </>

    );
}