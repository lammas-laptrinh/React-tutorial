import { Modal } from 'antd';

const ModleYeuCau = (props :any) =>{
    const {modal2Open, setModal2Open} = props;
    return(
        <>
    
        {/* <Button type="primary" onClick={() => setModal2Open(true)}>
          Vertically centered modal dialog
        </Button> */}
        <Modal
          title="Vertically centered modal dialog"
          centered
          open={modal2Open}
          onOk={() => setModal2Open(false)}
          onCancel={() => setModal2Open(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </>
    )
}

export default ModleYeuCau