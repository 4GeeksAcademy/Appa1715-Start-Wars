import React, {useContext} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store} = useContext (Context);
	return (
		<>
		<div className="container mt-5">
			<h1 className="text-warning">Characters</h1>
			<div className="carousel">
				{store.characters.map[(item)=>{
					return (
						<div className="the-card border border-primary">
					<div>
						<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt=""></img>
					</div>
					<div>
					<p>Gender: {item.properties.gender}</p>
					<p>Hair color</p>
					<p>Eye color</p>
					</div>
					<div className="buttons">
  						<Link  to={`/characters/${item._id}`}className="btn btn-outline-primary" >Learn more!</Link>
						<button className="btn btn-outline-warning">♡</button>
					</div>
				</div>
					)
				}]}
			</div>
			<h1 className="text-warning">Planets</h1>
			<div className="carousel">
				{store.planets.map[(item)=>{
					return (
						<div className="the-card border border-primary">
					<div>
						<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt=""></img>
					</div>
					<div>
					<p>Name: {item.properties.name}</p>
					<p>Terrain</p>
					<p>Gravity</p>
					</div>
					<div className="buttons">
  						<label className="btn btn-outline-primary" >Learn more!</label>
						<button className="btn btn-outline-warning">♡</button>
					</div>
				</div>)
				}]}
			</div>
			<h1 className="text-warning">Starships</h1>
			<div className="carousel">
				{store.starships.map[(item)=>{
					return (
						<div className="the-card border border-primary">
					<div>
						<img src={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`} alt=""></img>
					</div>
					<div>
					<p>Name: {item.properties.name}</p>
					<p>Model:</p>
					<p>Manufacture:</p>
					</div>
					<div className="buttons">
  						<label className="btn btn-outline-primary" >Learn more!</label>
						<button className="btn btn-outline-warning">♡</button>
					</div>
				</div>)
				}]}
			</div>
		</div>
	</>
	)
	
	
	};
