import { services } from "@src/HomePages";
import './Services.css';
export default function Services() {
    return (
        <>
            <div className="Service">
                <h1 className="title-services">Services</h1>
                
                {services.map((item) => (                 
                    <div className="Service-box">
                       <div className="Service-icon">{item.Iconservice}</div>
                       <div className="Service-TypeRoom">{item.TypeRoom}</div>
                       <div className="Service-Des">orem Ipsum has been the <br /> industry's standard <br /> dummy text ever since the <br /> 1500s,</div>
                    </div>
                ))}
                </div>
        
        </>

    );
}