import  React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


export const People =() =>{
   const {store} = useContext ( Context);

   
        {store.characters.map((item)=>{
            return(
                <>
                <div className="card mb-3" style={{width: "540px"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="img-fluid rounded-start" alt=""></img>
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
                            <li className="nav-item">Birth year</li>
                            <li className="nav-item">Gender</li>
                            <li className="nav-item">Height</li>
                            <li className="nav-item">Skin color</li>
                        </ul>
                    </footer>
                </div>
                </>
           
            )
        })}
}

