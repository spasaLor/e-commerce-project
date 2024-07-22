import '../styles/mainpage.css';
import image5 from "../assets/5.jpg";

export default function Young(){
    return(
        <div className="banner">
            <div className="img">
                <img src={image5} alt="" />
            </div>
            <div className="text">
                <h2>Young & Crazy</h2>
                <p>Get 20% off to ready go back to school</p>
                <button>Shop Now</button>
            </div>
        </div>
    );
}