import logo from '../../img/logo-2.png';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	return (
		<header className="navbar">
			<div className="navbar-content">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>
				<div>
					<h1>Super Heroes App</h1>
				</div>
				<nav>
					<ul className="list-links">
						<li className="list-item">
							<NavLink exact to="/">
								home
							</NavLink>
						</li>
						<li className="list-item">
							<NavLink to="/favorites">favorites</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default NavBar;
