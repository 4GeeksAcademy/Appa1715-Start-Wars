import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		
		<nav className="navbar navbar-black bg-black mb-3">
			<div className="container">
			<Link to="/">
				<img src="https://pngimg.com/d/star_wars_logo_PNG34.png" style={{ width: "70px", height: "70px" }}></img>
			</Link>
			<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-warning dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							<li><a className="dropdown-item" href="#">Action</a></li>
							<li><a className="dropdown-item" href="#">Another action</a></li>
							<li><a className="dropdown-item" href="#">Something else here</a></li>
						</ul>
					</div>
				
			</div>
			</div>
			
		</nav>
	);
};
