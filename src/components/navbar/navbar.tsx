import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuContainer from './MenuContainer';
import logo from '@/assets/logo.jpeg';
import './Navbar.css';

const Navbar = () => {


    /**
    *  button media responsive;
    */
    const [statusMenu, setStatusMenu] = useState<boolean>(false);

    const changeStatusMenu = () => {
        setStatusMenu(!statusMenu);
    };


    /**
    *  scroll botton and change color navbar
    */
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarStyle = {
        backgroundColor: `rgba(7, 17, 26, ${scrollPosition > 100 ? 1 : scrollPosition / 200})`,
        transition: 'background-color 0.3s ease',
    };

    return (
        <div className="navbar-container" id='navbarContainerId' style={navbarStyle}>

            <Link to={'/'} className='navbar-logo-container'>
                <img className='navbar-logo' src={logo} />
                <p>{'Forks'}</p>
            </Link>

            <div className={`navbar-contents ${statusMenu ? 'navbar-contents-active' : ''}`}>
                <Link className='navbar-btn' to={'/home'}>{'Inicio'}</Link>
                <Link className='navbar-btn' to={'/Menu'}>{'Menu'}</Link>
                <Link className='navbar-btn' to={'/Contact'}>{'Contacto'}</Link>
            </div>

            <div className='navbar-btn-menu'>
                <MenuContainer statusMenu={statusMenu} changeStatusMenu={changeStatusMenu} />
            </div>

        </div>
    )
}

export default Navbar;