import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import ClothingItem from "./Clothingitem";
import '../styles/shop.css';

export default function Defaultshop(){
    const [cat,setCat]=useState([]);
    const[prods,setProds]=useState([]);
    const[loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const[cart,setCart]=useOutletContext();
    
    useEffect(()=>{
        const getData = async (url,setter)=>{
            try{
                let res = await fetch('https://fakestoreapi.com/'+url);
                if(!res.ok)
                    throw new Error("HTTP error: "+res.status);
                else{
                    let json=await res.json();
                    setter(json);
                    setError(null);
                }
            }
            catch (error){
                setter([]);
                setError(error.message);
            }
        }

        const getAll= async()=>{
           await Promise.all([
                getData('products/categories',setCat),
                getData('products',setProds)
            ]);
            setLoading(false);
        }

        getAll();
    },[]);

    return(
        <div className="shop-page">
            <aside className="side-bar">
                <h2>Categories</h2>
                <div className="categories-list">
                    {cat.map((item,id)=>(<p key={id}><Link to={item}>{item}</Link></p>))}
                </div>
            </aside>
            <div className="main-content">
                <div className="inner-container">
                    {prods.map((item)=>(<ClothingItem key={item.id} item={item} cart={cart} setCart={setCart}/>))}
                </div>
            </div>
        </div>
    );
}