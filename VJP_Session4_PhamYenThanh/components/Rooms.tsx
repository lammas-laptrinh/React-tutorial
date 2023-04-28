
import { useContext } from 'react';
import React, { useState } from 'react';
import { AppContext } from '../Context/AppContext';
import ModleYeuCau from './ModleYeuCau';
import {QuestionCircleOutlined} from '@ant-design/icons'
const Rooms = () => {
    const { userData ,themeStyle ,iday,setiday}: any = useContext(AppContext)
    
    console.log("Check data", userData)

    const [show, setshow] = useState(false);
    return (
        <>
            <div>
                <p style={{
                    font:"Nution",
                    fontWeight:"300",
                    fontSize:'39px',
                    lineHeight:"49.1px"
                }}>
                Standard
                </p>
            </div>

            <div style={{
                ...themeStyle
            }}>
                <div>
                
                </div>
                {
                    userData && userData.length >0 && userData.map((item :any, index :number) => {
                        return (
                            <div key={index}>
                                <div style={{
                                    border: "solid",
                                   width:"200px",

                                }}>
                                    <div style={{
                                        width: "117px",
                                        height: "24px",
                                        top: "15px",
                                        left: "20px",
                                        display:"flex"
                                    }}>
                                        <div>
                                        <p style={{
                                            font: "Nunito",
                                            fontWeight: "800",
                                            fontSize: "12px",
                                            lineHeight: "16.37px"

                                        }} > {item.phong}</p>
                                            </div>
                                        <div onClick={() =>  setshow(true)}>
                                        <QuestionCircleOutlined />
                                            </div>
                                        
                                    </div>
                                    <div>
                                        <ul style={{
                                            display: "flex",
                                        }}>
                                            <li style={{
                                                backgroundColor: "#D9D9D9",
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "15px",
                                                listStyle: "none"
                                            }}></li>
                                            <li style={{
                                                backgroundColor: "#D9D9D9",
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "15px",
                                                listStyle: "none"
                                            }}></li>
                                            <li style={{
                                                backgroundColor: "#D9D9D9",
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "15px",
                                                listStyle: "none"
                                            }}></li>
                                        </ul>
                                    </div>
                                    <div style={{
                                        width: "117px",
                                        height: "32px",
                                        top: "106px",
                                        left: "28px"
                                    }}>
                                        <p style={{
                                            font: "Nunito",
                                            fontWeight: "300",
                                            fontSize: "23px",
                                            lineHeight: "32.74px"
                                        }}> {item.dates}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
              
            </div>

            <div>
                <p style={{
                    font:"Nution",
                    fontWeight:"300",
                    fontSize:'39px',
                    lineHeight:"49.1px"
                }}>
                Double
                </p>
            </div>
            <div style={{
                ...themeStyle
            }}>
                <div>
                
                </div>
                {
                    userData && userData.length >0 && userData.map((item :any, index :number) => {
                        return (
                            <div key={index}>
                                <div style={{
                                    border: "solid",
                                   width:"200px",

                                }}>
                                    <div style={{
                                        width: "117px",
                                        height: "24px",
                                        top: "15px",
                                        left: "20px"
                                    }}>
                                        <p style={{
                                            font: "Nunito",
                                            fontWeight: "800",
                                            fontSize: "12px",
                                            lineHeight: "16.37px"

                                        }} > {item.phong}</p>
                                    </div>
                                    <div>
                                        <ul style={{
                                            display: "flex",
                                        }}>
                                            <li style={{
                                                backgroundColor: "#D9D9D9",
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "15px",
                                                listStyle: "none"
                                            }}></li>
                                            <li style={{
                                                backgroundColor: "#D9D9D9",
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "15px",
                                                listStyle: "none"
                                            }}></li>
                                            <li style={{
                                                backgroundColor: "#D9D9D9",
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "15px",
                                                listStyle: "none"
                                            }}></li>
                                        </ul>
                                    </div>
                                    <div style={{
                                        width: "117px",
                                        height: "32px",
                                        top: "106px",
                                        left: "28px"
                                    }}>
                                        <p style={{
                                            font: "Nunito",
                                            fontWeight: "300",
                                            fontSize: "23px",
                                            lineHeight: "32.74px"
                                        }}> {item.dates}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
              
            </div>

            <div>
                <p style={{
                    font:"Nution",
                    fontWeight:"300",
                    fontSize:'39px',
                    lineHeight:"49.1px"
                }}>
                King
                </p>
            </div>
            <div style={{
                ...themeStyle
            }}>
                <div>
                
                </div>
                {
                    userData && userData.length >0 && userData.map((item :any, index :number) => {
                        return (
                            <div key={index}>
                                <div style={{
                                    border: "solid",
                                   width:"200px",
                                }}>
                                    <div style={{
                                        width: "117px",
                                        height: "24px",
                                        top: "15px",
                                        left: "20px"
                                    }}>
                                        <p style={{
                                            font: "Nunito",
                                            fontWeight: "800",
                                            fontSize: "12px",
                                            lineHeight: "16.37px"

                                        }} > {item.phong}</p>
                                    </div>
                                    <div>
                                        <ul style={{
                                            display: "flex",
                                        }}>
                                            <li style={{
                                                backgroundColor: "#D9D9D9",
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "15px",
                                                listStyle: "none"
                                            }}></li>
                                            <li style={{
                                                backgroundColor: "#D9D9D9",
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "15px",
                                                listStyle: "none"
                                            }}></li>
                                            <li style={{
                                                backgroundColor: "#D9D9D9",
                                                width: "30px",
                                                height: "30px",
                                                borderRadius: "15px",
                                                listStyle: "none"
                                            }}></li>
                                        </ul>
                                    </div>
                                    <div style={{
                                        width: "117px",
                                        height: "32px",
                                        top: "106px",
                                        left: "28px"
                                    }}>
                                        <p style={{
                                            font: "Nunito",
                                            fontWeight: "300",
                                            fontSize: "23px",
                                            lineHeight: "32.74px"
                                        }}> {item.dates}</p>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
              
            </div>
                    <ModleYeuCau modal2Open={show} setModal2Open={setshow} />   
        </>

    )
}

export default Rooms