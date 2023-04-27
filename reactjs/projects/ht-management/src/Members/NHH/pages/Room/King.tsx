import {Avatar, Button, Col, Modal, Row} from "antd";
import "./index.scss";
import { useState } from "react";
import { Room } from "../../../../Room";
export default function King() {

    const[modal, setModal] = useState(false);
    const abrirModal=()=>{
        setModal(true);
    }
    const cerrarModal=()=>{
        setModal(false);
    }
    const action=()=>{
        cerrarModal();
    }


    return <div> 
            <h2 className='StyleRoom' style={{ margin: "40px 40px 30px 40px" }}>King</h2>
                    <Row>       
                        <Col>            
                    {Room.length > 0 && (
                        <div className='Room__list'>
                            {Room.map(item => (
                                <>
                                    <div className='Room__item' key={item.id}>
                                        <div style={{display: 'flex',justifyContent: "space-between"}}>  
                                            <div className='Room__name'>{item.Name}</div>
                                            <div className="modal">
                                            <Button onClick={abrirModal} className='Modal'> {item.Modal}</Button>
                                            <Modal title="Modal Header"
                                                visible={modal}
                                                onCancel={cerrarModal}
                                                onOk={action}>
                                                <p>{item.Modal_Header}</p>
                                            </Modal>
                                        </div>
                                        </div>
                                        <div className="Room__status">
                                            <span><Avatar></Avatar></span>
                                            <span><Avatar></Avatar></span>
                                            <span><Avatar></Avatar></span>
                                        </div>
                                        <div className="Room__time">{item.Time}</div>
                                    </div>
                                </>
                            ))}
                        </div>
                    )}
                        </Col>   
                    </Row>
    </div>;
  }
  