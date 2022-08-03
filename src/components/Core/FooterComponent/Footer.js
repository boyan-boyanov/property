import { ImFacebook, ImTwitter,  ImLinkedin2 } from 'react-icons/im';
import { BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom'


import "./footer.css"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__container__row">
                    <div className="footer__container__row__footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><Link to="/">about us</Link></li>
                            <li><Link to="/">our services</Link></li>
                            <li><Link to="/">privacy policy</Link></li>
                            <li><Link to="/">affiliate program</Link></li>
                        </ul>
                    </div>
                    <div className="footer__container__row__footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><Link to="/">FAQ</Link></li>
                            <li><Link to="/profile">My profile</Link></li>
                            <li><Link to="/">returns</Link></li>
                            <li><Link to="/">order status</Link></li>
                            <li><Link to="/">payment options</Link></li>
                        </ul>
                    </div>
                    <div className="footer__container__row__footer-col">
                        <h4>My place</h4>
                        <ul>
                            <li><Link to="/profile">My profile</Link></li>
                            <li><Link to="/create">Create</Link></li>
                            <li><Link to="/">shoes</Link></li>
                            <li><Link to="/">dress</Link></li>
                        </ul>
                    </div>
                    <div className="footer__container__row__footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <Link to="/"><ImFacebook /></Link>
                            <Link to="/"><ImTwitter /></Link>
                            <Link to="/"><BsInstagram /></Link>
                            <Link to="/"><ImLinkedin2 /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}