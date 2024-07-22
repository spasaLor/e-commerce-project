import { useOutletContext } from "react-router-dom";
import '../styles/cart.css';
import CartItem from "./Cartitem";

export default function CartPage(){
    const [cart,setCart]=useOutletContext();

    const handleRemove = (item)=>{
        const newCart=cart.filter((it)=>(it.id!==item.id));
        setCart(newCart);
    }

    const updateQuantity = (id, newQuantity) => {
        setCart(cart.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        ));
      };

    const total = cart.reduce((sum, item) => sum += item.price * item.quantity, 0);
    return(
        <section className="cart">
            <div className="cart-container">
                <div className="top-part">
                    <p>Description</p>
                    <p>Size</p>
                    <p>Quantity</p>
                    <p>Remove</p>
                    <p>Price</p>
                </div>

                <div className="cart-items">
                    {cart.map((item,id)=>{
                        return <CartItem key={id} item={item} handleRemove={handleRemove} update={updateQuantity}/>
                    })}
                </div>
                
                <div className="bottom-boxes">
                    <div className="discount">
                        <p>Discount</p>
                        <p><b>€0.00</b></p>
                    </div>
                    <div className="delivery">
                        <p>Delivery</p>
                        <p><b>€0.00</b></p>
                    </div>                    
                    <div className="subtotal">
                        <p>Subtotal</p>
                        <p><b>{total}</b></p>
                    </div>
                    <div className="total">
                        <p>Total</p>
                        <p><b>{total}</b></p>
                    </div>
                </div>
                <div className="last-row">
                    <div className="left">
                        <input type="text" placeholder="Please enter a promo code"/>
                        <button type="button"> Apply discount</button>
                    </div>
                    <button type="button">Checkout</button>
                </div>
            </div>
        </section>
    );
}