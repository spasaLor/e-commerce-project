import { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import CategoryObjects from "./Categoryobjects";
import Defaultshop from "./Deafultshop";
import '../styles/shop.css';

export default function Shoppage({}){
    const [cat,setCat]=useState([]);
    const[loading,setLoading]=useState(true);
    const [error,setError]=useState('');
    const {name} =useParams();
    const [cart,setCart]=useOutletContext();
    
    useEffect(()=>{
        const getData = async ()=>{
            try{
                let res = await fetch('https://fakestoreapi.com/products/categories');
                if(!res.ok)
                    throw new Error("HTTP error: "+res.status);
                else{
                    let json=await res.json();
                    setCat(json);
                    setError(null);
                }
            }
            catch (error){
                setCat([]);
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        }
        getData();
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
                {name === 'electronics' ? <CategoryObjects category={name} cart={cart} setCart={setCart}/> : 
                name === 'jewelery' ? <CategoryObjects category = {name} cart={cart} setCart={setCart}/>:
                name === "men's clothing" ? <CategoryObjects category = {name} cart={cart} setCart={setCart}/>:
                name === "women's clothing" ? <CategoryObjects category = {name}cart={cart} setCart={setCart}/>:<Defaultshop/>
                }
            </div>
        </div>
    );
}