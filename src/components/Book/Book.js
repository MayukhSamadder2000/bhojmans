import React from 'react';
import './Book.css';

function Book(props) {


    const totalCalculation=(tax,total)=>{
        return tax+total;
    }
    const total=props.adult*15+props.child*10;
    return (
        <div className="book">
           <div className="book__heading">
               Book Table
           </div>
           <div className="book__content">
               <div className="book__content__left">
                   <div className="content__heading">Select the no of people</div>
                   <div className="book__content__adult">
                       <h3>Adults</h3>
                       <div className="content__number">
                           <div className="btn btn-math" onClick={props.addAdult}>+</div>
                            <div className="qty">{props.adult}</div>
                           <div className="btn btn-math" onClick={props.remAdult}>-</div>
                       </div>
                   </div>
                   <div className="book__content__kids">
                       <h3>Kids</h3>
                       <div className="content__number">
                           <div className="btn btn-math" onClick={props.addChild}>+</div>
                            <div className="qty">{props.child}</div>
                           <div className="btn btn-math" onClick={props.remChild}>-</div>
                       </div>
                   </div>
               </div>
               <div className="book__content__right">
                   <div className="content__heading">Total cost $</div>
                   <div className="cost__adult">
                       Adult : {props.adult*15}$
                       
                   </div>
                   <div className="cost__child">
                       Child : {props.child*10}$
                   </div>
                   <div className="total__cost">
                       Total tax: {total*0.05}$ <br/>
                      Total money : {totalCalculation(total*0.05,total)}$
                   </div>
                   <hr/>
                   <div className="btn btn-payment">
                        Pay the money
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Book
