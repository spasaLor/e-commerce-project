import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer(){
    return(
        <footer>
            <div className="footer-container">
                <div id="collection">
                    <h3>collection</h3>
                    <Link to={"/catalogue/women"}>Women</Link>
                    <Link to={"/catalogue/men"}>Men</Link>
                    <Link to={"/catalogue/kids"}>Kids</Link>
                    <p>Coming Soon</p>
                </div>
                <div id="site">
                    <h3>Site</h3>
                    <p>Terms of service</p>
                    <p>Privacy Policy</p>
                    <p>Copyright Policy</p>
                    <p>Press Kit</p>
                    <p>Support</p>
                </div>
                <div id="shop">
                    <h3>shop</h3>
                    <p>About us</p>
                    <p>Shipping Methods</p>
                    <p>Career</p>
                    <p>Contact</p>
                </div>
                <div id="social">
                    <h3>Social</h3>
                    <p>Shoper is made with love in Messina,<br></br> 2025 &copy; All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}