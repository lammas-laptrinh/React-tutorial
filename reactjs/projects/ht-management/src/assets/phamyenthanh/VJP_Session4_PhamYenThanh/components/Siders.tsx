import {PieChartOutlined,FileTextOutlined,UsergroupAddOutlined} from '@ant-design/icons'

const Siders = () =>{
    return(
        <div style={{
            textAlign:"center"
        }}>
                <div style={{
                    marginTop :"30px",
                    marginBottom:"50px"
                }}>
                    <p  style={{
                    font:"Nution",
                    fontWeight:"800",
                    fontSize:'28px',
                    lineHeight:"38.10px",
                    color:"#F1AC4D",
                    marginBottom:"20px"
                }}
                    
                    >DTD </p>
                </div>

                <div>
                    <p
                    style={{
                        font:"Nution",
                        fontWeight:"800",
                        fontSize:'28px',
                        lineHeight:"38.10px",
                        
                    }}
                    > <PieChartOutlined /></p>
                    <p  style={{
                        font:"Nution",
                        fontWeight:"800",
                        fontSize:'28px',
                        lineHeight:"38.10px",
                        
                    }}
                    > <UsergroupAddOutlined /></p>
                    <p  style={{
                        font:"Nution",
                        fontWeight:"800",
                        fontSize:'28px',
                        lineHeight:"38.10px",
                        
                    }}
                    
                    ><FileTextOutlined /></p>
                </div>
        </div>
    )
}
export default Siders;