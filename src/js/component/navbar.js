import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		
		<nav className="navbar navbar-black bg-black mb-3">
			<div className="container">
			<Link to="/">
				<img src="https://pngimg.com/d/star_wars_logo_PNG34.png" style={{ width: "70px", height: "70px" }}></img>
			</Link>
			<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-warning dropdown-toggle"  id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites {store.favorites.length}
						</button>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
							{
								store.favorites.length == 0 ? "(none)": 
								store.favorites.map((item)=>{
									return (
										<li key={item._id}><Link className="dropdown-item" to={""}>{item.properties?.name}</Link></li>

									)
								})
							}
						</ul>
					</div>
				
			</div>
			</div>
			
		</nav>
	);
};
