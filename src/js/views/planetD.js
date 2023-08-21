import  React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";


export const Planet =() =>{
   const {store} = useContext ( Context);
   let params = useParams();
   const [detail, setDetail] = useState({});

  let findPlanet = ()=>{
   let planetDetails = store.planets.find((item)=> item._id == params.id)
   setDetail(planetDetails)
  }
 
  useEffect(()=>{findPlanet()},[store.planets])
   
        return (
                <>
                <div className="card mb-3 container" style={{width: "500px"}}>
                    <div className="row ">
                        <div className="col-md-4">
                            <img className="w-250 p-3" src={`https://starwars-visualguide.com/assets/img/planets/${detail?.uid}.jpg`}  alt=""></img>
                        </div>
                        <div className="Container" >
                            <div className="card-body">
                                <h5 className="card-title">{detail?.properties?.name}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <footer className="py-3 my-4">
                        <div className="container">
                            <div className="row justify-content-center border-top pb-3 mb-3 text-warning d-flex">
                                <div className="col">
                                    <li className="nav-item">Name
                                    </li>
                                    <div>
                                        <strong>{detail?.properties?.name}
                                        </strong>
                                    </div>
                                </div>
                                <div className="col">
                                    <li className="nav-item">Gravity
                                    </li>
                                    <div>
                                    <strong>{detail?.properties?.gravity}</strong>
                                    </div>
                                </div>
                                <div className="col">
                                    <li className="nav-item">Terrain
                                    </li>
                                    <div>
                                    <strong>{detail?.properties?.terrain}</strong>
                                    </div>
                                </div>
                                <div className="col">
                                    <li className="nav-item">Population
                                   </li>
                                   <div>
                                   <strong>{detail?.properties?.population}</strong>
                                   </div>
                                </div>
                                <div className="col">
                                    <li className="nav-item">Climate
                                    </li>
                                    <div>
                                    <strong>{detail?.properties?.climate}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                </>)
        
        
}

