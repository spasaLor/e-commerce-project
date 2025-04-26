import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/cart.css";

function CartItem({item, deleteClick}){
    const [qty,setQty] = useState(1);

    return(
        <div className="cart-item">
            <div className="left">
                <div className="img">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="desc">
                    <b>{item.title}</b>
                </div>
            </div>
            <div className="right">
                <p>{item.category}</p>
                <p>{item.id}</p>
                <div className="quantity">
                    <input type="num" min={1} max={5} value={qty} onChange={(e)=>setQty(e.target.value)}/>
                    <div className="qty-controls">
                        <div onClick={()=>setQty(prev=> prev <5 ? prev+1 : prev)}>+</div> 
                        <div onClick={()=>setQty(prev=> prev === 1 ? prev : prev-1)}>-</div>
                    </div>
                </div>
                <p>€{item.price}</p>
                <p onClick={deleteClick}>X</p>
            </div>
            
        </div>
    );
}

export default function Cart(){
    const {cart, deleteItem} = useOutletContext();
    const [total,setTotal] = useState(0.0);

    return(
        <>
            <div className="top">
                <h2>your shopping bag</h2>
                <i>Items reserved for limited time only</i>
            </div>
            <div className="main-cart">
                <div className="top-row">
                    <div className="left">
                        <p>product</p>
                        <p>description</p>
                    </div>
                    <div className="right">
                        <p>category</p>
                        <p>id</p>
                        <p>qty</p>
                        <p>amout</p>
                        <p>delete</p>
                    </div>
                    
                </div>
                {cart.map(item =>(
                    <CartItem item={item} deleteClick={()=>deleteItem(item)} key={item.id} setTot={setTotal} />
                ))}
                <div className="bottom">
                    <div className="tot">
                        <p>Subtotal: {total}</p>
                    </div>
                </div>
            </div>
        </>
    );
}