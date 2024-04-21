import { assets } from '../../assets/assets'
import './Footer.css'

export default function Footer() {

    const date = new Date();

    return <>
        <div className="footer" id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid alias suscipit maxime praesentium illo ratione commodi nemo vitae dicta perferendis reprehenderit, nulla autem quasi aspernatur distinctio voluptatum ut fugit sapiente!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>  
                    <ul>
                        <li>1-22-33-44</li>
                        <li>contact@company.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                copyright {date.getFullYear()} Tomato.com - All Rights Reserveed.
            </p>
        </div>
    </>
}