import './introduce.css';
import { Space } from 'antd';
function Introduce() {
  return (
    <Space className="introduce-wrapper">
      <Space className="introduce-title-content">
        <h2 className="title-introduce">Our Gallery</h2>
        <p className="introduce-content">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </Space>
      <img className="img-introduce" src="https://res.cloudinary.com/dpdzbuiml/image/upload/v1684831746/pexels-pixabay-210604_r4yrjj.jpg" alt="Image 1" />
      <img className="img-introduce" src="https://res.cloudinary.com/dpdzbuiml/image/upload/v1684831587/spacious-room-with-bed_o3me0p.jpg" alt="Image 2" />
      <img className="img-introduce" src="https://res.cloudinary.com/dpdzbuiml/image/upload/v1684740404/double_luxury_oo4vov.jpg" alt="Image 3" />
    </Space>
  );
}

export default Introduce;
