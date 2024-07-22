import ClothingItem from "./Clothingitem";
import '../styles/sale.css';

export default function Onsale({allData,cart,setCart,loading}){
    let toShow=[5,6,7,8];
    return(
        <section>
            <div className="sale-container">
                <h2 className="title">On sale</h2>
                <div className="items-container">
                    {loading && <p>Loading Items...</p>}
                    {toShow.map((i)=>{
                        let item = allData[i];
                        return item ? <ClothingItem item={item} cart={cart} setCart={setCart} sale="20"/>: null;
                    })}
                </div>
            </div>
        </section>
    );
}