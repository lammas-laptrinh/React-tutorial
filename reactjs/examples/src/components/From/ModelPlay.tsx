import React, { useState } from 'react';
import { Modal } from 'antd';
import { Playmentleft } from './Paymentleft';
import Playmentright from './Paymentright';
import { Button, Checkbox, Form, Input } from 'antd';
function ModelPlay() {

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');


  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        width={1000}
      >
        <Form >
          <div className='modelplay'>
            <div className='modelplay-Playmentleft'>
              <Playmentleft />
            </div>
            <div className='modelplay-Playmentright'>
              <Playmentright />
            </div>
          </div>
        </Form>

      </Modal>
    </>
  )
}

export default ModelPlay