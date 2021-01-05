import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/Logo.png';
import './NavBar.css';

export default function NavBar() {



    
    var hamLogo=document.querySelector(".hamLogo");
    const addMenu=()=>{
        var bignav=document.querySelector(".BigNav");
        var myHome=document.querySelector("#myHome");
        var myMenu=document.querySelector("#myMenu");

        var myOrders=document.querySelector("#myOrders");
        var myBook=document.querySelector("#myBook");
        var cross=document.querySelector(".cross");

        
        bignav.classList.add("menu_open");
        myHome.classList.add("animateInFade1");
        myMenu.classList.add("animateInFade2");

        myOrders.classList.add("animateInFade3");
        myBook.classList.add("animateInFade4");
        cross.classList.add("animateInFade5");
    }
    const remMenu=()=>{
        var bignav=document.querySelector(".BigNav");
        bignav.classList.remove("menu_open")
        var myHome=document.querySelector("#myHome");
        var myMenu=document.querySelector("#myMenu");

        var myOrders=document.querySelector("#myOrders");
         var myBook=document.querySelector("#myBook");
         var cross=document.querySelector(".cross");
        
        myHome.classList.remove("animateInFade1");
        myMenu.classList.remove("animateInFade2");

        myOrders.classList.remove("animateInFade3");
        myBook.classList.remove("animateInFade4");
        cross.classList.remove("animateInFade5");
    }
    
    return (
        <div className="navContainer">
            <div className="navTop">Life is short, live happy live freely and eat freely</div>
        <nav id="navbar">
            
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="hamLogo" onClick={addMenu}>
                <div className="hamLine"></div>
                <div className="hamLine"></div>
                <div className="hamLine"></div>
            </div>
            <ul>
                <li>
                    <NavLink to="/" >Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" >Menu</NavLink>
                </li>

                <li>
                    <NavLink to="/orders" >Orders</NavLink>
                </li>
                <li>
                    <NavLink to="/book" >Book Dine</NavLink>
                </li>
            </ul>
        </nav>

        <div className="BigNav">
            <div className="cross" onClick={remMenu}>
                <div className="line"></div>
                <div className="line"></div>
                
            </div>
            <ul className="bignavUl">
                <li>
                    <NavLink to="/" id="myHome" onClick={remMenu}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/menu" id="myMenu" onClick={remMenu} >Menu</NavLink>
                </li>

                <li>
                    <NavLink to="/orders" id="myOrders" onClick={remMenu}>Orders</NavLink>
                </li>
                <li>
                    <NavLink to="/book" id="myBook" onClick={remMenu}>Book Dine</NavLink>
                </li>
            </ul>
        </div>
        </div>

    )
}
