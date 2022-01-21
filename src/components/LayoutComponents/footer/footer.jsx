import React from 'react'
import './footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Lottie from 'react-lottie';
import animationData from '../../lottie/footerLottie.json';
import 'bootstrap/dist/css/bootstrap.min.css';
function footer() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
        <footer className="footer-section">
        <div className="container">
            <div className="footer-cta py-5">
                <div className="row">
                    <div className="col-sm-6 col-xl-4 mb-30">
                        <div className="single-cta">
                            <FontAwesomeIcon icon={["fas", "map-marker-alt"]} />
                            <div className="cta-text">
                                <h4>Find us</h4>
                                <span>Nehru Nagar, Ring Road, New Delhi-110065</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 mb-30">
                        <div className="single-cta">
                            <FontAwesomeIcon icon={["fas", "phone"]} />
                            <div className="cta-text">
                                <h4>Call us</h4>
                                <span>99999-11111</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4 mb-30">
                        <div className="single-cta">
                            <FontAwesomeIcon icon={["fas", "envelope"]} />
                            <div className="cta-text">
                                <h4>Mail us</h4>
                                <span>techwhiz@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <a href="#"><img src="./techwhiz.png" className="img-fluid"alt=""/></a>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto impedit fuga expedita quas voluptate! Natus delectus eos molestiae a possimus?</p>
                            </div>
                            <div className="footer-social-icon">
                                <span>Follow us</span>
                                 <a href="https://www.facebook.com/pgdavit/"  target="_blank"> <div className="facebook-bg icon-div"> <FontAwesomeIcon className='social-icon' icon={["fab", "facebook-f"]} /></div></a>
                                 <a href="https://www.instagram.com/techwhizpgdav/"  target="_blank"><div className="instagram-bg icon-div"><FontAwesomeIcon className='social-icon' icon={["fab", "instagram"]} /> </div></a>
                                 <a href="https://www.youtube.com/channel/UCuqe3HGPRdASNGOBR3NPonA/featured"  target="_blank"><div className="youtube-bg icon-div"><FontAwesomeIcon className='social-icon ' icon={["fab", "youtube"]} /></div></a>
                                 <a href="https://www.linkedin.com/company/techwhiz" target="_blank"><div className="linkedin-bg icon-div"><FontAwesomeIcon className='social-icon ' icon={["fab", "linkedin"]} /> </div> </a>
                                 <a href="https://www.reddit.com/r/TechWhiz/"  target="_blank"><div className="reddit-bg icon-div"><FontAwesomeIcon className='social-icon' icon={["fab", "reddit"]} /></div></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Our team</a></li>
                                <li><a href="#">Our team</a></li>
                                <li><a href="#">Our team</a></li>
                                <li><a href="#">Our team</a></li>
                                <li><a href="#">Our team</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                            <Lottie options={defaultOptions}
                            height={300}
                            />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2021, All Right Reserved <a href="#">TechWhiz</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default footer
