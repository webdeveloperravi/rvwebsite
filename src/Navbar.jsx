

import { NavLink } from 'react-router-dom';
const Navbar = () => {


    return (
        <>
            <div className='container-fluid bg-light'>
                <div className='row'>
                    <div className='col-10 mx-auto bg'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item text-center">
                                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item text-center">
                                            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                                        </li>

                                        <li className="nav-item dropdown text-center">
                                            <a className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuNavLink" role="button" data-toggle="dropdown" aria-expanded="false">
                                                Categories
                                           </a>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuNavLink">
                                                <li><NavLink className="dropdown-item text-center" to="/gallery">Netflix</NavLink></li>
                                                <li><NavLink className="dropdown-item text-center" to="/gallery">Movies</NavLink></li>
                                                <li><NavLink className="dropdown-item text-center" to="/gallery">Amazon</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item text-center">
                                            <NavLink className="nav-link" to="/contactus">Contact us</NavLink>
                                        </li>
                                        <li className="nav-item text-center">
                                            <NavLink className="nav-link" to="aboutus">About us</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* <ul>
                <li><NavLink to='/contactus'>one</NavLink></li>
                <li><NavLink to='/NavLinkboutus'>two</NavLink></li>
                <li><NavLink to='/contactus'>three</NavLink></li>
            </ul> */}

        </>
    );
}

export default Navbar;