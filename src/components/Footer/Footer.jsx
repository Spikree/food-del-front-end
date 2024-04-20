import { assets } from '../../assets/assets'
import './Footer.css'

export default function Footer() {
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
                <div className="footer-content-right">

                </div>
                <div className="footer-content-center">

                </div>
            </div>
        </div>
    </>
}