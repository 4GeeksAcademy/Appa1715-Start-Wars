import  React, {useContext, useEffect, useState} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";


const detail =() =>{
    const params = useParams();
    const [search, setSearch] = useState ({});
    const {store} = useContext(Context);


    const Details = ()=>{
        if (params.nature === "characters"){
            const search = store.characters.find((item)=> item._id === params.id)
            setSearch (searchFind)
    }

    useEffect(()=>{
        Details()
    },[])
    return 
    <>
    {search?.properties.name}
    </>
}}

export default detail;