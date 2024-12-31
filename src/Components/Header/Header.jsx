import { useState } from 'react';
import '../Header/Header.css';
import DehazeIcon from '@mui/icons-material/Dehaze';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import ClearIcon from '@mui/icons-material/Clear';
// import Contact from './Contact';
import { Link } from 'react-router-dom';
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
            <div>
                <nav className="main-nav">
                    {/* Logo Section */}
                    <div className="logo">
                        <img
                            src="https://colibrisodm.com/wp-content/uploads/2024/07/colibris-logo.svg"
                            alt="Logo"
                        />
                    </div>
                    <div className="call_email_icon">
                        <div className="buttons">
                            <button className="buttons" onClick={toggleMenu}>Get Quote</button>
                        </div>
                        <div className="call">
                            <PhoneEnabledIcon />
                        </div>
                        <div className="email">
                            <EmailIcon />
                        </div>
                        {/* Toggle Button */}
                        <div className="icon" onClick={toggleMenu}>
                            <DehazeIcon />
                        </div>
                    </div>

                    {/* Nav Links */}
                    <ul className={menuOpen ? "true" : "navlink"}>
                        <div className="clear" onClick={toggleMenu}>
                            <ClearIcon />
                        </div>
                        <li className='li'>
                            <Link to="/"  className='li' >Product</Link>
                        </li>
                        <li className='li'>
                            <Link to="/process"  className='li'>Process</Link>
                        </li>
                        <li className='li'>
                            <Link to="/contact"  className='li'>Contact Us</Link>
                        </li>
                    </ul>
                </nav>
            </div>
    );
}
