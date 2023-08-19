import  React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const Starships =() =>{
   const {store} = useContext ( Context);

   
        {store.characters.map((item)=>{
            return(
                <>
                <div className="card mb-3" style={{width: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`} className="img-fluid rounded-start" alt=""></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{item.properties.name}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <footer className="py-3 my-4">
                        <ul className="nav justify-content-center border-top pb-3 mb-3">
                            <li className="nav-item">Name</li>
                            <li className="nav-item">Model</li>
                            <li className="nav-item">Manufacture</li>
                            <li className="nav-item">Passengers</li>
                            <li className="nav-item">Length</li>
                        </ul>
                    </footer>
                </div>
                </>
            )
        })}
}

