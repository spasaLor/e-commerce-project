import ClothingItem from "./Clothingitem";
import { useState,useEffect } from "react";
export default function CategoryObjects({category,cart,setCart}){
    const [obj,setObj]=useState([]);
    const[loading,setLoading]=useState(true);
    const [error,setError]=useState('');

    useEffect(()=>{
        const getData = async ()=>{
            try{
                let res = await fetch('https://fakestoreapi.com/products/category/'+category);
                if(!res.ok)
                    throw new Error("HTTP error: "+res.status);
                else{
                    let json=await res.json();
                    setObj(json);
                    setError(null);
                }
            }
            catch (error){
                setObj([]);
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        }
        getData();
    },[category]);
    
    return(
        <div className="inner-container">
            {obj.map((item)=>(<ClothingItem key={item.id} item={item} cart={cart} setCart={setCart}/>))}
        </div>
    );
}