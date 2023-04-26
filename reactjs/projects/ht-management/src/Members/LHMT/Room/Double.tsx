import { Row, Col, Card, Button, Modal } from "antd";
import { Room } from "./types";
import { useState } from "react";
import { SmileOutlined } from "@ant-design/icons";

interface RoomListProps {
  d: Room[];
}

const Double = ({ d }: RoomListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string[]>([]);

  const showModal = (content: string[]) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Row gutter={16}>
      {d.map((room) => (
        <Col span={5} key={room.id}>
          <Card title={room.title}>
            <SmileOutlined style={{ margin: "5px" }} />
            <SmileOutlined style={{ margin: "5px" }} />
            <SmileOutlined />
            <p>Time: {room.time}</p>
            {room.modal && (
              <Button
                type="primary"
                onClick={() => showModal(room.modalContent)}
              ></Button>
            )}
          </Card>
        </Col>
      ))}
      <Modal
        title="Modal Content"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {modalContent.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </Modal>
    </Row>
  );
};

export default Double;
