import '../styles/arrivals.css';
import ClothingItem from "./Clothingitem";

export default function Newarrivals({cart,setCart,allData,loading}){
    let toShow=[0,1,2,3,4];

    return(
        <section>
            <div className="arrivals-container">
                <h2 className="title">New Arrivals</h2>
                <div className="items-container">
                    {loading && <p>Loading Items...</p>}
                    {toShow.map((i)=>{
                        let item = allData[i];
                        return item ? <ClothingItem item={item} cart={cart} setCart={setCart}/>: null;
                    })}
                </div>
            </div>
        </section>
    );
}