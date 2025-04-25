import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/catalogue.css";
import CatalogueItem from "./CatalogueItem";

export default function Catalogue(){
    const params = useParams();
    const [items, setItems] = useState([]); 
    const [error, setError] = useState(null);
    let url ='https://fakestoreapi.com/products/category/';
    
    useEffect(()=>{
        params.section === 'men' ? url+= "men's clothing" : params.section === 'women' ? url+="women's clothing" : url+='electronics';
        fetch(url).then(response => {
            if (response.status >= 400)
                throw new Error("Error loading data");
            return response.json()
        })
        .then(re=>setItems(re))
        .catch((error)=>setError(error));

    },[params.section]);

    if(error)
        return <p>An error was encountered: {error}</p>

    console.log(params.section);
    return(
        <div className="container">
            <Navbar/>
            <div className="mid">
                <p>home / {params.section}</p>
                <div className="main">
                    <h2>{params.section}</h2>
                    <i>All products</i>
                </div>
            </div>
            <div className="item-container">
                {items.map(item=>(
                    <CatalogueItem item={item} key={item.id}/>
                ))}
            </div>
            <Footer/>
        </div>        
    );
}