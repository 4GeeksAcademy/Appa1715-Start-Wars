import  React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const detail =() =>{
    const params = useParams()
    console.log(params);;
    const {store} = useContext(Context);
    const Details = ()=>{
        const item = store.characters.find((item)=> item._id === params.id)
        console.log(search);
    }

    useEffect(()=>{
        Details()
    },[])
    return 
    <>
    </>
}

export default detail;