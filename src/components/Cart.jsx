import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/cart.css";

function CartItem({item, deleteClick, setTot,index}){
    const [qty,setQty] = useState(1);

    useEffect(()=>{
        let subtotal = item.price * qty;
        const rounded = Math.round(subtotal * 100) / 100;
        setTot(prev => {
            const updated = [...prev];
            updated[index]=rounded;
            return updated;
        });
    },[qty]);

    const onDelete =()=>{
        setTot(prev => {
            const updated = [...prev];
            updated[index]=0;
            return updated;
        });
        deleteClick();
    }

    return(
        <div className="cart-item">
            <div className="img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="desc">
                <b title={item.title}>{item.title}</b>
            </div>
            <p>{item.category}</p>
            <p>{item.id}</p>
            <div className="quantity">
                <input type="num" min={1} max={5} value={qty} onChange={(e)=>setQty(e.target.value)}/>
                <div className="qty-controls">
                    <div onClick={()=>setQty(prev=> prev <5 ? prev+1 : prev)}> <p>+</p></div> 
                    <div onClick={()=>setQty(prev=> prev === 1 ? prev : prev-1)}> <p>-</p> </div>
                </div>
            </div>
            <b>€{item.price}</b>
            <p onClick={onDelete} style={{cursor:'pointer'}}>X</p>
        </div>
    );
}

function Shipping({total}){
    const [selectedShip,setSelectedShip] = useState('DHL');
    const [selectedCost, setSelectedCost] = useState(15.00);
    const [checked, setChecked] = useState(false);
    const [selectedCard, setSelectedCard] = useState('visa');

    return(
        <section className="shipping">
            <div className="top">
                <h2>shipping address</h2>
                <i>All fields are required</i>
            </div>
            <div className="form-container">
                <form>
                    <div className="form-item">
                        <label htmlFor="delivery">Select delivery method</label>
                        <select name="delivery" value={selectedShip} onChange={(e)=>{
                            const sel = e.target.options[e.target.selectedIndex];
                            const cost = parseFloat(sel.dataset.cost);
                            setSelectedCost(cost);
                            setSelectedShip(e.target.value);
                            }}>
                            <option value="DHL" data-cost={15.00}>DHL International - €15,00</option>
                            <option value="TNT" data-cost={10.00}>TNT International - €10,00</option>
                            <option value="Express" data-cost={25.00}>Express International - €25,00</option>
                        </select>
                    </div>
                    <div className="form-item">
                        <div className="first">
                            <label htmlFor="first">First name</label>
                            <input type="text" name="first" required />
                        </div>
                        <div className="last">
                            <label htmlFor="last">last name</label>
                            <input type="text" name="last" required />
                        </div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="addr1">Address (line 1)</label>
                        <input type="text" name="addr1" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="addr2">Address (line 2)</label>
                        <input type="text" name="addr2" required />
                    </div>
                    <div className="form-item">
                        <div className="city">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" required />
                        </div>                    
                        <div className="code">
                            <label htmlFor="post">Postal code</label>
                            <input type="text" name="post" required />
                        </div>
                    </div>
                    <div className="form-item">
                        <label htmlFor="num">Phone number</label>
                        <input type="num" name="num" required />
                    </div>
                    <div className="form-item">
                        <label htmlFor="mail">Phone number</label>
                        <input type="mail" name="mail" required />
                    </div>
                    <div className="form-item">
                        <input type="checkbox" name="use" value={checked} onChange={()=>setChecked(!checked)} />
                        <label htmlFor="use">Use this address for Billing</label>                        
                    </div>
                </form>
            </div>
            <div className="top">
                <h2>payment options</h2>
                <i>All fields are required</i>
            </div>
            <div className="resume">
                <p>Subtotal: €{total}</p>
                <p>Shipping: €{selectedCost}</p>
                <p style={{color:'orange'}}>Total: €{parseFloat(total+selectedCost)}</p>
            </div>
            <div className="form-item" id="payment">
                <label htmlFor="card">select payment method</label>
                <div className="card-container">
                    <select name="card" value={selectedCard} onChange={(e)=>setSelectedCard(e.target.value)}>
                        <option value="visa">Visa</option>
                        <option value="master">Mastercard</option>
                        <option value="amex">American Express</option>
                        <option value="paypal">Paypal</option>
                    </select>
                    <button type="button">order now</button>
                </div>
            </div>
        </section>
    );
}


export default function Cart(){
    const {cart, deleteItem} = useOutletContext();
    const [subtotals,setSubtotals] = useState([cart.map(item => item.price)]);
    let sum=0;
    
    for(let n in subtotals){
        sum+=subtotals[n];
    }

    return(
        <>
            <div className="top">
                <h2>your shopping bag</h2>
                <i>Items reserved for limited time only</i>
            </div>
            <div className="main-cart">
                <div className="top-row">
                        <p>product</p>
                        <p>description</p>
                        <p>category</p>
                        <p>id</p>
                        <p>qty</p>
                        <p>amout</p>
                        <p>delete</p>
                </div>
                {cart.length === 0 ? 
                <div className="empty-cart">
                    <h2>The cart is currently empty</h2>
                </div>
                : cart.map((item,i) =>(
                    <CartItem item={item} deleteClick={()=>deleteItem(item)} key={item.id} setTot={setSubtotals} index={i} />
                ))}
                <div className="bottom">
                    <div className="tot">
                        <p>Subtotal:</p> <p>€{cart.length === 0 ? 0 : sum}</p>
                    </div>
                </div>
            </div>
            <Shipping total={sum}/>
        </>
    );
}