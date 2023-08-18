import React, {useContext} from "react";
import { Context } from "../store/appContext";
// import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store} = useContext (Context);
	return (
		<>
		<div className="container mt-5">
			<h1 className="text-warning">Characters</h1>
			<div className="my-carousel rounded">
				{store.characters.map((item)=>{
					return (
						<div className="my-card">
					<div>
						<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt=""></img>
					</div>
					<div>
					<p className="text-"><strong>Name:</strong> {item.properties.name}</p>	
					<p className="text-"><strong>Gender:</strong> {item.properties.gender}</p>
					<p className="text-"><strong>Hair color:</strong> {item.properties.hair_color}</p>
					<p className="text-"><strong>Eye color:</strong> {item.properties.eye_color}</p>
					</div>
					<div className="buttons">
  						<Link  to={`/characters/${item._id}`}className="btn btn-outline-primary" >Learn more!</Link>
						<button className="btn btn-outline-warning">♡</button>
					</div>
				</div>
					)
				})}
			</div>
			<h1 className="text-warning">Planets</h1>
			<div className="my-carousel">
				{store.planets.map((item)=>{
					return (
						<div className="my-card border border-primary"  >
					<div>
						<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt=""></img>
					</div>
					<div>
					<p><strong>Name:</strong> {item.properties.name}</p>
					<p><strong>Terrain:</strong>{item.properties.terrain}</p>
					<p><strong>Gravity:</strong>{item.properties.gravity}</p>
					</div>
					<div className="buttons">
					<Link  to={`/planets/${item._id}`}className="btn btn-outline-primary" >Learn more!</Link>
						<button className="btn btn-outline-warning">♡</button>
					</div>
				</div>)
				})}
			</div>
			<h1 className="text-warning">Starships</h1>
			<div className="my-carousel">
				{store.starships.map((item)=>{
					return (
						<div className="my-card border border-primary">
					<div>
						<img src={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`} alt=""></img>
					</div>
					<div>
					<p><strong>Name:</strong> {item.properties.name}</p>
					<p><strong>Model:</strong>{item.properties.model}</p>
					<p><strong>Manufacture:</strong>{item.properties.manufacture}</p>
					</div>
					<div className="buttons">
					<Link  to={`/starships/${item._id}`}className="btn btn-outline-primary" >Learn more!</Link>
						<button className="btn btn-outline-warning">♡</button>
					</div>
				</div>)
				})}
			</div>
		</div>
	</>
	)
	
	
	};
