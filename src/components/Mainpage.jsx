import Newarrivals from "./Newarrivals";
import '../styles/mainpage.css';
import { useState,useEffect } from "react";
import Young from "./Young";
import Onsale from "./Onsale";
import { useOutletContext } from "react-router-dom";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";

export default function Mainpage(){
    const[loading,setLoading]=useState(true);
    const[menData,setMenData]=useState([]);
    const[womenData,setWomenData]=useState([]);
    const [error,setError]=useState('');
    let allData=[...menData,...womenData];
    const [cart,setCart]=useOutletContext();

    useEffect(()=>{
        const getData = async(setter,url)=>{
            try {
                let res = await fetch("https://fakestoreapi.com/products/category/"+url);
                if (!res.ok){
                    throw new Error('HTTP error: '+res.status);
                }
                else{
                    let json = await res.json();
                    setter(json);
                    setError(null);
                }
            
            } catch (error) {
                setError(error.message);
                setter([]);
            }
        }
        
        const fetchAll= async()=>{
            await Promise.all([
                getData(setMenData,"men's%20clothing"),
                getData(setWomenData,"women's%20clothing")
            ]);
            setLoading(false);
        }

        fetchAll();
    },[])
    return(
        <main>
            <div className="main-container">
                <div className="hero">
                    <div className="top">
                    <img src={image1} alt="" />
                        <div className="text">
                            <h2>Summer get away holiday sales</h2>
                            <p>Fona has everything you need to start selling online</p>
                            <button type="button">Discover now</button>
                        </div>
                    </div>                    
                    <div className="little-images">
                        <img src={image2} alt="" /><img src={image3} alt="" /><img src={image4} alt="" />
                    </div>
                </div>
                <Newarrivals cart={cart} setCart={setCart} allData={allData} loading={loading}/>
                <Young />
                <Onsale cart={cart} setCart={setCart} allData={allData} loading={loading}/>
            </div>
        </main>
    );
}