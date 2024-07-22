import '../styles/arrivals.css';

export default function ClothingItem({item,cart,setCart,sale=0}){

    const handleItemClick = (item,sale)=>{
        item={...item,'sale':sale,'quantity':1};
        if(!cart.includes(item.id))
            setCart([...cart,item]);
     }

    return(
        <div className={"item"} key={item.id} onClick={()=>handleItemClick(item,sale)}>
            {sale >0 ? <div className="sale">{sale}%</div> : null}
            <img src={item.image} alt="" />
            <p className="title">{item.title}</p>
            <p className="price"><b>€ {item.price}</b></p>
            <div className="overlay">Add to the cart</div>
        </div>
    );
}
