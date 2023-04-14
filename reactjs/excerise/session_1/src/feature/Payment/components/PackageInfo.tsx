import React from 'react';
import onTopImage from '../../../assets/image/onTop.png'
import OshiImage from '../../../assets/image/oshi.jpg'
import { PaymentPriceProps } from '../types';

export default function PackageInfo(props: PaymentPriceProps) {
    const { rows } = props
    return (
        <div style={{ position: 'relative' }}>
            <div >
                {/*  Hộp trên */}
                <div
                    style={{
                        height: '280px',
                        width: '350px',
                        backgroundImage: `url(${onTopImage})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        display: 'block',
                    }}
                />
                {/* Hộp dưới */}
                <div
                    style={{
                        height: '300px',
                        width: '350px',
                        backgroundColor: '#f3f5f9',
                        display: 'block',
                    }}
                >
                </div>

            </div>
            {/*  Hộp ở giữa 2 hình vuông lớn */}
            <div
                style={{
                    height: '70px',
                    width: '280px',
                    backgroundColor: 'white',
                    position: 'absolute',
                    top: '235px',
                    left: '35px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
                    flexDirection: 'column',
                    lineHeight: '0.2'
                }}
            >
                <div style={{ marginTop: '20px' }}>
                    <span>Professionl Plan</span>
                </div>
                <div>
                    <h4>${rows?.subtotal} / month</h4>
                </div>
            </div>
            {/*  Hộp nhỏ nằm trong hộp ở giữa */}
            <div
                style={{
                    height: '55px',
                    width: '55px',
                    backgroundImage: `url(${OshiImage})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    position: 'absolute',
                    top: '242px',
                    left: '45px',
                }}
            />
            {/*  Đoạn text của hộp dưới */}
            <div
                style={{
                    height: '250px',
                    width: '300px',
                    backgroundColor: '#f3f5f9',
                    position: 'absolute',
                    top: '320px',
                    left: '25px',
                }}
            >
                <div>
                    {/*  Đây là dấu chấm xanh */}
                    <span
                        style={{
                            position: "absolute",
                            top: '7px',
                            left: "-20px",
                            height: "10px",
                            width: "10px",
                            backgroundColor: "#34a7c1",
                            borderRadius: "50%",
                        }}
                    />
                    {/* Đây là text */}
                    <span style={{ color: '#7f8ba4' }}>All features in </span>
                    <span style={{ fontWeight: 'bold' }}>basic included</span>
                </div>
                <div className='text-item' style={{ marginTop: '20px' }}>
                    <span
                        style={{
                            position: "absolute",
                            top: '50px',
                            left: "-20px",
                            height: "10px",
                            width: "10px",
                            backgroundColor: "#34a7c1",
                            borderRadius: "50%",
                        }}
                    />
                    <span style={{ color: '#7f8ba4' }}>Easy and flexible business with </span>
                    <span style={{ fontWeight: 'bold' }}>invoice management</span>
                </div>
                <div className='text-item' style={{ marginTop: '20px' }}>
                    <span
                        style={{
                            position: "absolute",
                            top: '118px',
                            left: "-20px",
                            height: "10px",
                            width: "10px",
                            backgroundColor: "#34a7c1",
                            borderRadius: "50%",
                        }}
                    />
                    <span style={{ color: '#7f8ba4' }}>Full time </span>
                    <span style={{ fontWeight: 'bold' }}>support</span>
                </div>
                <div className='text-item' style={{ marginTop: '20px' }}>
                    <span
                        style={{
                            position: "absolute",
                            top: '160px',
                            left: "-20px",
                            height: "10px",
                            width: "10px",
                            backgroundColor: "#34a7c1",
                            borderRadius: "50%",
                        }}
                    />
                    <span style={{ fontWeight: 'bold' }}>20TB</span>
                    <span style={{ color: '#7f8ba4' }}>cloud storage </span>
                </div>
                <div className='text-item' style={{ marginTop: '30px' }}>
                    <span style={{ fontWeight: 'bold', marginRight: '120px', borderBottom: "#C1C1C1 1px solid", borderColor: 'blue' }}>Modify plan</span>
                </div>

            </div>
        </div >
    )
}


