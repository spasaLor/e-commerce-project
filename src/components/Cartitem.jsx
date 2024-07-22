import { useState } from 'react';
import '../styles/cart.css';

export default function CartItem({item,handleRemove,update}){
    const[size,setSize]=useState('M');
    const[quantity,setQuantity]=useState(1);

    const handleIncrement = ()=>{
        const newQ=quantity+1;
        setQuantity(newQ);
        update(item.id,newQ);
    }

    const handleDecrement = ()=>{
        const newQ=quantity-1;
        if(quantity>0){
            setQuantity(newQ);
            update(item.id,newQ);
        }
        else{
            setQuantity(0);
            update(item.id,0);
        }
    }

    return(
        <div className='cart-item'>
            <div className="first">
                <img src={item.image} alt="" />
                <div className="text">
                    <b>{item.title}</b>
                    <p>Product Code: {item.id}</p>
                </div>
            </div>
            <div className="second">
                <input type="text" maxLength={3} required value={size} onChange={(e)=>(setSize(e.target.value))}/>
            </div>
            <div className="third">
                <button type="button" onClick={handleIncrement}>+</button>
                <input type="num" maxLength={2} required value={quantity} onChange={(e)=>(setQuantity(e.target.value))}/>
                <button type="button" onClick={handleDecrement}>-</button>
            </div>
            <div className="fourth">
                <button type="button" onClick={()=>handleRemove(item)}>X</button>
            </div>
            <div className="fifth">
                <p>€{item.price}</p>
            </div>
        </div>
    );
}