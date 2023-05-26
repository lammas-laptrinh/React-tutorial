import { OurGallerys } from "@src/HomePages";
import { Col, Row } from 'antd';


export default function OurGallery() {
    return (
        <>
            <Row>
                <Col span={8}>
                    <div className="OurGallery">
                        <div className="OurGallery-title"> Our Gallery</div>
                        <div className="OurGallery-des">orem Ipsum has been <br /> the industry's standard <br /> dummy text ever since <br /> the 1500s,</div>
                    </div>
                </Col>
                <Col span={16}>
                    <div className="OurGallery1">
                        {OurGallerys.map((item) => (
                            <div className="OurGallery-img"><img src={item.img} alt="" /></div>
                        ))}
                    </div>
                </Col>
                <div className="bottom-img" >
                    <img src="https://s3-alpha-sig.figma.com/img/5887/c2bb/e1145d9100c948b89afd047fcada2dab?Expires=1685923200&Signature=KRPlq9NFjGHOi4E97CL0mXjf~tvTLvnJf0y4NhNDoRjOSA9kepmENXClATnJJm893gKXOOMLbE8c97Jl2pYiUQRvEMpTCH1LLq-IpOUajkZqIwGak-xe2gQhFTB~sqPWhKb7zeyBvAzViMcMw7vCv3dIiulltvIRJNvVfzJp093NyND-7ZraG0HEqpJd9Tmw64BVLj-nGXxpEstLOiK~gZ8-65eBJ7JAhBa63gPgA4Cr0JPZSo6EuWpr2RCncQ9NJxKA5N46X4xBrfsb6-EMP3vz~I6vXfZg~w7BS~bnnru8NyjXgCl4h59HkVqa0VG7bqYu~HlQbxJHa31cjsQgkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div>
                    <div className="bottom-img1">
                        <img src="https://s3-alpha-sig.figma.com/img/09f4/f8e8/66c318d7fb59a9f7167835a17c786f19?Expires=1685923200&Signature=P7IoPpWooORNd7~QDRez-ud0sT7VLxIZiy8ytxEeOaQuEo6k9nnI2FIXPFrmYXzQzC4-BKAQXUrJIyZgaMwa5zAnsW1Ijr3kSJL31kZ-T6npeR8Qn4MdQ2CWocGRe~8RaCjafjoOTuQKd4LWMJ5bW-vjhD7zh8chqUrWYUFMY-~Q~PQ~B5KM7P47Ft4hGMDNZ2-LurNXqMuR6h5RyyI1ab-Sznu-yskGwVYdrSQhZJT-qtea~U14N-Ht-hreQqPOrNx8iXNEiMmj0s9RrnMT7Ouqk59Kti0Um9wa1EjScKfotHTUM-1Bn1iUfFaLa~VuVHFBjdUcKdbVW4KSXHjwXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
                    </div>
            </Row>
        </>

    );
}