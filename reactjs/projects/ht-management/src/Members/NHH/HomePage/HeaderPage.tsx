import { Header } from "../../../HomePages"
import "./HomePage.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
function HeaderPage() {
    return (
        <div className="Header-page">
            {Header.map((item) => (
                <div className="Header-item">
                    <div className="Header-title">
                        <ul>
                            <li><a href=""><Link to="/">Home</Link></a></li>
                            <li><a href=""><Link to="/Service">Services</Link> </a></li>
                            <li><a href=""><Link to ="/Room">Room</Link></a></li>
                            <li><a href=""> About Us</a></li>
                        </ul>
                    </div>
                    <div className="Header-img" ><img src={item.Img} alt="" /></div>

                    <div className="Header-info">
                        <p className="icon-phone"><BsFillTelephoneFill /></p>
                        <p className="numberPhone">{item.PhoneNumber}</p>
                        <p className="header-des">{item.des}</p>
                        <a className="book-now" style={{marginRight: 200}} href="/"><Link to="/Room">Book now</Link> <p style={{margin: 20}}><AiOutlineArrowRight /></p> </a>
                    </div>
                    <div className="TypeRoom">Room type</div>
                </div>
            ))}
        </div>
        
    );
}
export default HeaderPage;