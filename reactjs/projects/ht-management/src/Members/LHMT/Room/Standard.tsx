import { Row, Col, Card, Button, Modal } from "antd";
import { Room } from "./types";
import { useState } from "react";
import { SmileOutlined } from "@ant-design/icons";
import ViewCard from "./ViewCard";

interface RoomListProps {
  rooms: Room[];
}

enum ViewMode {
  Grid = "grid",
  Line = "line",
}

const Standard = ({ rooms }: RoomListProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState(ViewMode.Grid);

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
  const handleViewModeChange = (viewMode: string) => {
    setViewMode(viewMode as ViewMode);
  };

  return (
    <>
      <ViewCard onViewModeChange={handleViewModeChange} />
      {viewMode === ViewMode.Grid ? (
        <Row gutter={10}>
          {rooms.map((room) => (
            <Col span={5} key={room.id}>
              <Card title={room.title}>
                <SmileOutlined style={{ margin: "5px" }} />
                <SmileOutlined style={{ margin: "5px" }} />
                <SmileOutlined style={{ margin: "5px" }} />
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
        </Row>
      ) : (
        <div>
          {rooms.map((room) => (
            <div key={room.id}>
              <Card title={room.title}>
                <SmileOutlined style={{ margin: "5px" }} />
                <SmileOutlined style={{ margin: "5px" }} />
                <SmileOutlined style={{ margin: "5px" }} />
                <p>Time: {room.time}</p>
                {room.modal && (
                  <Button
                    type="primary"
                    onClick={() => showModal(room.modalContent)}
                  ></Button>
                )}
              </Card>
            </div>
          ))}
        </div>
      )}
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
    </>
  );
};

export default Standard;
