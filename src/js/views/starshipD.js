import  React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const Starships =() =>{
   const {store} = useContext ( Context);
   let params = useParams();
   const [detail, setDetail] = useState({});

  let findStarship = ()=>{
   let starshipDetails = store.starships.find((item)=> item._id == params.id)
   setDetail(starshipDetails)
  }
  
  useEffect(()=>{findStarship()},[store.starships])

   
      
            return(
                <>
                <div className="card mb-3 container" style={{width: "500px"}}>
                    <div className="row">
                        <div className="col-md-4">
                            <img  className="" src={`https://starwars-visualguide.com/assets/img/starships/${detail?.uid}.jpg`} alt=""></img>
                        </div>
                        <div className="container">
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
                                    <li className="nav-item">Model
                                    </li>
                                    <div>
                                    <strong>{detail?.properties?.model}</strong>
                                    </div>
                                </div>
                                <div className="col">
                                    <li className="nav-item">length
                                    </li>
                                    <div>
                                    <strong>{detail?.properties?.length}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
                </>
            )
        }


