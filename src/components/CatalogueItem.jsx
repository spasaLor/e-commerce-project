export default function CatalogueItem({item, itemClicked, cart}){
    return(
        <div className="item" onClick={()=>itemClicked(item)}>
            <div className="img-div">
                <img src={item.image} alt={item.title} />
                <div className="overlay">
                    <div className="text">{cart.find(cartItem=>cartItem.id === item.id) === undefined ? 'Add to cart' : 'Object in cart'}</div>
                </div>
            </div>
            <p className="description"><b>{item.title}</b><br></br>€{item.price} </p>
        </div>
    );
    
}