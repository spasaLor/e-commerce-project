export default function CatalogueItem({item}){
    return(
        <div className="item">
            <div className="img-div">
                <img src={item.image} alt={item.title} />
                <div className="overlay">
                    <div className="text">Add to cart</div>
                </div>
            </div>
            <p className="description"><b>{item.title}</b><br></br>€{item.price} </p>
        </div>
    );
    
}