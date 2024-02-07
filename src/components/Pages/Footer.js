import React from "react";
import "../../styles/Footer.css";


function Footer() {
    return (
        <footer id="footer">
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="social-links">
                            <a href="https://twitter.com/ieeecsbs" className="twitter" target="_blank"><i
                                    className="fa fa-twitter"></i></a>
                            <a href="https://facebook.com/ieeecsbsc" className="facebook" target="_blank"><i
                                    className="fa fa-facebook"></i></a>
                            <a href="https://instagram.com/ieeecsbc" className="instagram" target="_blank"><i
                                    className="fa fa-instagram"></i></a>
                          
                            <a href="https://www.linkedin.com/in/ieeecsbs/" className="linkedin" target="_blank"><i
                                    className="fa fa-linkedin"></i></a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
            <hr />
        <div className="container">
            <div className="copyright">
                &copy; 2024 <a href="https://www.icdds.org">ICDDS</a>. All Rights Reserved.<br/>
                Organized By <a href="https://www.cs.ieeebangalore.org/">IEEE Computer Society Banglore Chapter</a>
            </div>
        </div>
    </footer>
    );
};

export default Footer;