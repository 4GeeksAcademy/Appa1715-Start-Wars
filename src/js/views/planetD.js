import  React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const planetDetail =() =>{
    const params = useParams()
    console.log(params);;
    const {store} = useContext(Context);
    const planetDetails = ()=>{
        const item = store.planets.find((item)=> item._id === params.id)
        console.log(search);
    }

    useEffect(()=>{
        planetDetails()
    },[])
    return 
    <>
        <h1>la</h1>

    </>
}

export default planetDetail;