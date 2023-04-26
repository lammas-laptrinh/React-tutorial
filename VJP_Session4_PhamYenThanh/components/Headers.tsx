
import { BellOutlined, ExclamationCircleOutlined } from '@ant-design/icons'

const Headers = () => {
    return (
        <div style={{
            display:"flex",
            justifyContent: "space-between",
            }}>
            <div>
                <p style={{
                    color: "#429AE4",
                    font: "Nunito",
                    fontWeight: "800",
                    fontSize: "16px",
                    lineHeight: "21.82px",
                }}> Version 1.0.0</p>
            </div>
            <div>
                <ul style={{
                    display: "flex",
                }}>
                    <li style={{
                        listStyle: "none",
                        marginLeft:"20px",
                    }}><BellOutlined /></li>
                    <li style={{
                        listStyle: "none",
                        marginLeft:"20px",
                    }}><ExclamationCircleOutlined /></li>
                    <li style={{
                        listStyle: "none",
                        marginLeft:"20px",
                    }}>Pham Yen Thanh</li>
                    <li style={{
                        backgroundColor: "#D9D9D9",
                        width: "30px",
                        height: "30px",
                        borderRadius: "15px",
                        listStyle: "none",
                        marginLeft:"20px",
                    }}></li>
                </ul>
            </div>
        </div>
    )
}
export default Headers