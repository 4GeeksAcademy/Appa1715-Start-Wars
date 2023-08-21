import React, {useContext} from "react";
import { Context } from "../store/appContext";
// import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const {store, actions} = useContext (Context);
	
	let myCarousel={
		display: "flex",
		overflowX: "scroll",
		border:" 1px solid rgb (240, 240, 240)",
	};
	let myCard={
		border: "1px solid grey",
		minWidth: "300px",
		marginRight: "10px",
	};
	return (
		<>
		<div className="container mt-5">
			<h1 className="text-warning">Characters</h1>
			<div className="my-carousel rounded" style={myCarousel}>
				{store.characters.map((item)=>{
					return (
						<div className="my-card" style={myCard}>
					<div>
						<img className="w-100" src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt=""></img>
					</div>
					<div className="p-3">
					<p className="text-"><strong>Name:</strong> {item.properties.name}</p>	
					<p className="text-"><strong>Gender:</strong> {item.properties.gender}</p>
					<p className="text-"><strong>Hair color:</strong> {item.properties.hair_color}</p>
					<p className="text-"><strong>Eye color:</strong> {item.properties.eye_color}</p>
					</div>
					<div className="buttons d-flex justify-content-between p-3">
  						<Link  to={`/character/${item._id}`}className="btn btn-outline-primary" >Learn more!</Link>
						<button className="btn btn-outline-warning"
						onClick={()=>actions.addFavorites(item)}
						>♡</button>
					</div>
				</div>
					)
				})}
			</div>
			<h1 className="text-warning">Planets</h1>
			<div className="my-carousel" style={myCarousel}>
				{store.planets.map((item)=>{
					return (
						<div className="my-card" style={myCard} >
					<div>
						<img className="w-100" src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt=""></img>
					</div>
					<div className="p-3">
					<p><strong>Name:</strong> {item.properties.name}</p>
					<p><strong>Terrain:</strong>{item.properties.terrain}</p>
					<p><strong>Gravity:</strong>{item.properties.gravity}</p>
					</div>
					<div className="buttons p-3 d-flex justify-content-between">
					<Link  to={`/planet/${item._id}`}className="btn btn-outline-primary" >Learn more!</Link>
						<button className="btn btn-outline-warning"
						onClick={()=> actions.addFavorites(item)}>♡</button>
					</div>
				</div>)
				})}
			</div>
			<h1 className="text-warning">Starships</h1>
			<div className="my-carousel" style={myCarousel}>
				{store.starships.map((item)=>{
					return (
						<div className="my-card" style={myCard}>
					<div>
						<img className="w-100" src={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`} alt=""></img>
					</div>
					<div className="p-3">
					<p><strong>Name:</strong> {item.properties.name}</p>
					<p><strong>Model:</strong>{item.properties.model}</p>
					<p><strong>Manufacture:</strong>{item.properties.manufacture}</p>
					</div>
					<div className="buttons p-3 justify-content-between d-flex">
					<Link  to={`/starships/${item._id}`}className="btn btn-outline-primary" >Learn more!</Link>
						<button className="btn btn-outline-warning"
						onClick={()=> actions.addFavorites(item)}
						>♡</button>
					</div>
				</div>)
				})}
			</div>
			
		</div>
	</>
	)
	
	
	};
