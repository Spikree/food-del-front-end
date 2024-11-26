import { assets } from '../../assets/assets'
import './Footer.css'

export default function Footer() {

    const date = new Date();

    const year = date.getFullYear();

    return <>
        <div className="footer" id='footer'>
            <div className='footer-left'>
                <h1>Copperleaf</h1>
            </div>

            <div className="date">
                <p>copyright © {year}</p>
            </div>
        </div>
    </>
}