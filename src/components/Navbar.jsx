import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBasketShopping, faMagnifyingGlass, faBars} from '@fortawesome/free-solid-svg-icons';
import "../styles/navbar.css";
import { useRef } from "react";

export default function Navbar({cart}){
    const sideRef = useRef();
    const overRef = useRef();
    const openSidebar =()=>{
        sideRef.current.classList.add('show');
        overRef.current.classList.add('show')
    }
    const closeSidebar =()=>{
        sideRef.current.classList.remove('show');
        overRef.current.classList.remove('show');
    }

    return(
        <>
            <div className="nav-controls">
                <div className="logo-shop">
                    <Link to={"/"}>SH</Link>
                </div>
                <div className="right">
                    <FontAwesomeIcon icon={faBasketShopping}/>
                    <Link to={"/basket"}>({cart.length})</Link>
                    <FontAwesomeIcon icon={faBars} onClick={openSidebar}/>
                </div>
            </div>
            <nav className="navbar" ref={sideRef}>
                <div className="left">
                    <div className="logo-shop">
                        <Link to={"/"}>SH</Link>
                        <p onClick={closeSidebar}>Close</p>
                    </div>
                    <Link to={"/catalogue/women"}>Women</Link>
                    <Link to={"/catalogue/men"}>Men</Link>
                    <Link to={"/catalogue/electronics"}>Electronics</Link>
                    <p>Coming soon</p>
                    <Link to={"/about"}>About</Link>
                </div>   
                <div className="right">
                    <div className="basket">
                        <FontAwesomeIcon icon={faBasketShopping} />
                        <Link to={"/basket"}>Basket ({cart.length})</Link>
                    </div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </nav>
            <div className="modal" onClick={closeSidebar} ref={overRef}></div>
        </>
        
    );
}