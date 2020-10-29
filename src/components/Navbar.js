import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = () => {

    return (
            <div data-testid='menuWrap' className='menuWrap'>
                <input data-testid='toggler' type='checkbox' className='toggler'></input>
                <div data-testid='hamburger' className='hamburger'>
                    <div></div>
                </div>
                <div data-testid='menu' className='menu'>
                    <div>
                        <div>
                            <ul>
                                <li>
                                <Link data-testid='navbarListElementHome' className='navbarListElementHome' to='/'>
                                    Home</Link>
                                </li>
                                <li>
                                <Link data-testid='navbarListElementProjects' className='navbarListElementProjects' to='/projects'>
                                    Projects</Link>
                                </li>
                                {/* <li>
                                <Link data-testid='navbarListElementContact' className='navbarListElementContact' to='/contact'>
                                    Contact</Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>  
    )
}

export default Navbar