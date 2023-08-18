import  React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const starDetail =() =>{
    const params = useParams()
    console.log(params);;
    const {store} = useContext(Context);
    const starshipDetail = ()=>{
        const item = store.starships.find((item)=> item._id === params.id)
        console.log(search);
    }

    useEffect(()=>{
        starshipDetail()
    },[])
    return (
    <>
        <h1>ola</h1>

    </>)
    
}

export default starDetail;