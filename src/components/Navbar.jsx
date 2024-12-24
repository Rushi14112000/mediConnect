import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">MediConnect</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">{props.home} </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">{props.about}</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/about">ContactUs</NavLink>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">Hospital</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Hosp Login</a></li>
                                <li><a className="dropdown-item" href="#">Hosp Reg</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown"><a className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false">Doctor</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Doc Login</a></li>
                                <li><a className="dropdown-item" href="#">Doc Reg</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
