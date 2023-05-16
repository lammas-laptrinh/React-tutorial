import { Col, Row } from "antd";
import { Layout, Space, Typography } from "antd";
import View from "../Sort/View";
import HeaderPage from "../HeaderPage";
import Sidebar from "../Sidebar";
import Rooms from "../Rooms";

const { Title } = Typography;

const Dashboard = () => {
  return (
    <div>
      <Layout>
        <HeaderPage />
      </Layout>
      <Row style={{ margin: "2rem 1rem" }}>
        <Col span={20} push={4}>
          <Space className="flex items-center justify-between mb-5">
            <Space className="flex items-center">
              <Title
                level={3}
                className="relative top-[2px] font-extrabold mr-[1rem] ml-[2rem]"
              >
                Room List
              </Title>
            </Space>
            <View />
          </Space>
          <div className="ml-[2rem]">
            <Rooms />
          </div>
        </Col>
        <Col span={4} pull={20}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
