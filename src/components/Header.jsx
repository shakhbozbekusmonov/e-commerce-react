import { Link, NavLink } from "react-router-dom";
import "../styles/header.scss";
import Button from "./Button";
import { useState } from "react";

const Header = () => {
    const [changeMenu, setChangeMenu] = useState(false);

    return (
        <header className='site-header bg-dark py-4'>
            <div className='container'>
                <div className='site-header__wrapper d-flex align-items-center justify-content-between'>
                    <Link to='/home'>
                        <img
                            src='./logo.png'
                            width='40'
                            height='40'
                            alt='Ecommerce logo img'
                        />
                    </Link>

                    <ul className='nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/home'>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about'>
                                About
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/contacts'>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>

                    <div className='d-flex'>
                        <Link className='btn btn-light' to='/cart'>
                            <span className='cart-count badge bg-primary rounded-circle'>
                                0
                            </span>
                            🛒
                        </Link>

                        <Button
                            className='site-header__burger-menu'
                            icon={changeMenu ? "./close.svg" : "./menu.svg"}
                            onClick={() => setChangeMenu(!changeMenu)}
                        />
                    </div>
                </div>
            </div>

            <div
                className={`hidden-header bg-dark ${
                    changeMenu && "show-header"
                }`}>
                <ul className='nav flex-column'>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/home'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink className='nav-link' to='/contacts'>
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
