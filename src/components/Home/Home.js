import React from 'react';
import './Home.css';
import logo from '../../assets/Logo.png';
import {Link} from 'react-router-dom';

export default function Home(props) {
    return (
        <header className="header">
            <div className="header__cards">
                
                <div className="header__card card1">
                    <div className="heading">Eat at our service </div>
                    <Link to="/book" className="btn btn-home">Book Now</Link>
                    <div className="text">
                        We here serve you with the best food made with love and care, we envy you
                    </div>
                </div>
                <div className="header__card card2">
                    <div className="heading">Eat at your home </div>
                    <Link to="/menu" className="btn btn-home">Order Now</Link>
                    <div className="text">
                        We here serve you with the best food made with love and care, we envy you
                    </div>
                </div>
            </div>
            <div className="header__text">
                Checkout our dining time
            </div>
            <div className="header__timing">
                <div className="timing__header">
                    Dine out
                </div>
                <div className="timing__para">Monday To Friday at : 2:30pm to 4:30pm (IST) Lunch</div>
                <div className="timing__para">Saturday/Sunday at: 2:00pm to 5:00pm (IST) Lunch</div>
                <div className="timing__para">Monday To Friday at : 4:30pm to 11:30pm (IST) Dinner</div>
                <div className="timing__para">Saturday/Sunday at : 7:30pm to 12:00pm (IST) Dinner</div>
                <div className="timing__header">
                    Order at home
                </div>
                <div className="timing__para">Monday To Friday at : 2:30pm to 4:30pm (IST) Lunch</div>
                <div className="timing__para">Saturday/Sunday at: 2:00pm to 5:00pm (IST) Lunch</div>
                <div className="timing__para">Monday To Friday at : 4:30pm to 11:30pm (IST) Dinner</div>
                <div className="timing__para">Saturday/Sunday at : 7:30pm to 12:00pm (IST) Dinner</div>
            </div>
            <div className="header__footer">
                <img src={logo} alt=""/>
                <div className="social__icons">
                    <div className="icon"><i class="fa fa-facebook-official" aria-hidden="true"></i></div>
                    <div className="icon"><i class="fa fa-twitter-square" aria-hidden="true"></i></div>
                    <div className="icon"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                    <div className="icon"><i class="fa fa-pinterest" aria-hidden="true"></i></div>
                </div>
                <div className="copyright">Bhojmans.com © 2020 All rights reserved</div>
            </div>
        </header>
    )
}
