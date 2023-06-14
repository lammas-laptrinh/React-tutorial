import { Col, Row, Rate, Layout, Avatar, Tooltip, DatePicker, Space, Button } from 'antd';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { AntDesignOutlined, UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import './DetailRoom.css'


dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;



function RoomDetail() {

  const { typeroom } = useParams();

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <Layout className='container' >
      <Row className='wrapper-content'>
        <Row className='room-image-detail'>
          <Col>
            <img className='i-room' src='https://www.thespruce.com/thmb/2_Q52GK3rayV1wnqm6vyBvgI3Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg' />
          </Col>
        </Row>
        <Row className='room-detail'>
          <Col className='back-wrapper'>
            <ArrowLeftOutlined className='icon-back' />
            <span className='back' onClick={handleGoBack}>Quay về </span>
          </Col>
          <Col>
            <h1 className='title-room'>{typeroom} room</h1>
          </Col>
          <Col>
            <Rate allowHalf defaultValue={4.5} />
          </Col>
          <Col className='avatar-wrapper'>
            <Row >
              <Avatar.Group
                maxCount={2}
                maxPopoverTrigger="click"
                size="large"
                maxStyle={{ color: '#f56a00', backgroundColor: '#fde3cf', cursor: 'pointer' }}
              >
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                <Tooltip title="Ant User" placement="top">
                  <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                </Tooltip>
                <Avatar style={{ backgroundColor: '#1890ff' }} icon={<AntDesignOutlined />} />
              </Avatar.Group>
            </Row>
            <Row>
              <span className='span-content'>39 review</span>
            </Row>
          </Col>

          <Col className='lorem'>
            <span className='span-content '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta at ipsum quae iste totam quam illum officia blanditiis. Ullam voluptas et magnam totam quia facere vitae illo culpa minus eum?</span>
            <span className='span-content' style={{ marginTop: '15px', fontWeight: '500', textDecoration: 'underline' }}>Xem thêm</span>
          </Col>
          <Col className='service'>
            <img className='service-img' src='https://ss4.vercel.app/assets/feature-163723e0.svg' />
          </Col>
          <Col className='space-time'>
            <Space direction="vertical" size={12}>
              <RangePicker />
            </Space>
          </Col>
          <Col className='action' >
            <Button className='action-button-room'>Chọn phòng</Button>
          </Col>

        </Row>

      </Row>
    </Layout>
  )
}

export default RoomDetail