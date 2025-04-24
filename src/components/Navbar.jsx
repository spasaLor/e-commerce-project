import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBasketShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import "../styles/navbar.css";

export default function Navbar(){

    return(
            <nav className="navbar">
            <div className="left">
                <div className="logo-shop">SH</div>
                <Link to={"/catalogue/women"}>Women</Link>
                <Link to={"/catalogue/men"}>Men</Link>
                <Link to={"/catalogue/kids"}>Kids</Link>
                <p>Coming soon</p>
                <Link to={"/about"}>About</Link>
            </div>   
            <div className="right">
                <div className="basket">
                    <FontAwesomeIcon icon={faBasketShopping} />
                    <Link to={"/basket"}>Basket (0)</Link>
                </div>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>         
        </nav>
    );
}