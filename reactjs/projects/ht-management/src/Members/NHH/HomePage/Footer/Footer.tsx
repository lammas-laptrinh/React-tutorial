import "./Footer.css";
export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>About</h4>
                            <ul>
                                <li><a href="#">Lorem Ipsum is simply dummy text <br />
                                    of the printing and typesetting <br />
                                    industry. Lorem Ipsum has been the <br />
                                    industry's standard dummy text <br />
                                    ever since the 1500s,</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Room</h4>
                            <ul>
                                <li><a href="#">Sigle</a></li>
                                <li><a href="#">King</a></li>
                                <li><a href="#">Queen</a></li>
                                <li><a href="#">Double</a></li>
                                <li><a href="#">Lainai</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Links</h4>
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Service</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Term & Condition</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Social</h4>
                            <ul>
                                <li><a href="#">Facebook</a></li>
                                <li><a href="#">Twister</a></li>
                                <li><a href="#">Tiktok</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact</h4>
                            <ul>
                                <li><a href="#">address</a></li>
                                <li><a href="#">0900000000</a></li>
                                <li><a href="#">info@yourmain.com</a></li>
                            </ul>
                        </div>
                        <h1 style={{textAlign: "center", marginTop: 30}}>Copyright 2023. design by dtd</h1>
                    </div>
                </div>
               
            </footer>
        </>

    );
}