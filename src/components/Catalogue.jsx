import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import "../styles/catalogue.css";
import CatalogueItem from "./CatalogueItem";

export default function Catalogue(){
    const params = useParams();
    const [items, setItems] = useState([]); 
    const [error, setError] = useState(null);
    const {cart,addToCart} = useOutletContext();
    
    useEffect(()=>{
        let url ='https://fakestoreapi.com/products/category/';
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
    return(
        <>
            <div className="mid">
                <p>home / {params.section}</p>
                <div className="main">
                    <h2>{params.section}</h2>
                    <i>All products</i>
                </div>
            </div>
            <div className="item-container">
                {items.map(item=>(
                    <CatalogueItem item={item} key={item.id} itemClicked={addToCart} cart={cart}/>
                ))}
            </div>
        </>
            
    );
}