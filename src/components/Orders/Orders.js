import React,{useState} from 'react';
import './Orders.css';

export default function Orders(props) {

    const [Cart, setCart] = useState(0)

    const plus=()=>{
        Cart+=1;
        setCart(Cart);
    }

    const returnTotal=()=>{
        var total=0;
        for(let i=0;i<props.myCart.length;i++){
            total=total+props.myCart[i].qty*props.myCart[i].price;

        }
        return total;
    }
    const money=returnTotal();
    const tax=returnTotal()*0.05;

    return (
        <div className="order">
            <div className="order__header">
                Check out
            </div>
            <div className="order__container">
                <div className="order__left">
                    <div className="menu__header">
                        <div className="head">Name</div>
                        <div className="head">Image</div>
                        <div className="head">Description</div>
                        <div className="head">quantity</div>
                        <div className="head">Total cost</div>
                    </div>
                    {
                        props.myCart.map((item)=>{
                            return (
                            <div className="menu__content">
                                <div className="item">{item.name}</div>
                                <div className="item"><img src={item.url} alt=""/></div>
                                <div className="item">{item.desc}</div>
                                <div className="item"><span onClick={e=>props.addItem(item)}>Add</span>{item.qty}<span onClick={e=>props.remItem(item)}>Rem</span></div>
                                <div className="item">{item.price*item.qty}€</div>
                            </div>
                            )
                        })
                    }

                </div>
                <div className="order__right">
                    <div className="payment__header">Payment options</div>
                    <div className="payment__amount">Total cost:- {money}€</div>
                    <div className="payment__amount">Total Tax:- {tax.toFixed(2)}€</div>
                    <hr/>
                    <div className="btn btn-payment">Pay {(money+tax).toFixed(2)}€</div>
                </div>
            </div>
        </div>
    )
}
