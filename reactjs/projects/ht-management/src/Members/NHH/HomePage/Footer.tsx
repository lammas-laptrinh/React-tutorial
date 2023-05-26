export default function Footer() {
    return (
        <>
        <div className="Footer">
              <div style={{ height: 210, marginTop: 100, display: 'flex', justifyContent: 'center' }}>
                <div className="Col" style={{ marginRight: 90 }}>
                    <div className="title">About</div>
                    <p className="desc">
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s.
                    </p>
                </div>
                <div className="Col">
                    <h2 className="title">Room</h2>
                    <p className="desc">
                        Single
                        <br />
                        King
                        <br />
                        Queen
                        <br />
                        Double
                        <br />
                        Lanai
                    </p>
                </div>
                <div className="Col">
                    <h2 className="title">Links</h2>
                    <p className="desc">
                        About
                        <br />
                        Service
                        <br />
                        FAQ
                        <br />
                        Term & Condition

                    </p>
                </div>
                <div className="Col">
                    <h2 className="title">Social</h2>
                    <p className="desc">
                        Facebook
                        <br />
                        Twitter
                        <br />
                        Instagram
                    </p>
                </div>
                <div className="Col">
                    <h2 className="title">Contact</h2>
                    <p className="desc">
                        Address
                        <br />
                        090000000
                        <br />
                        info@yourmain.com
                    </p>
                </div>
            </div>
            <div className='copy' >
                Copyright 2023. design by dtd
            </div>
        
            </div>
        </>

    );
}
