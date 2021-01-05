import React,{useState} from 'react';
import './Menu.css';
const food=require('../../Resources');

export default function Menu(props) {

    const [btnText,setbtnText]=useState(0);
    const addCartHandaler=(event,item)=>{

        let check=0;

        for(let i=0;i<props.myCart.length;i++){

            if(props.myCart[i].name===item.name){
                check=1;
                break;
            }

        }
        if(check === 0)
        {
            event.target.classList.add('card__color__change');
            
            console.log(event.target.value);

            setbtnText(1)

            props.addItem(item);
        }
        

        

    }

    return (
        <div className="menu">
            <div className="menu__container">
                <div className="menu__header">French cuisine</div>
                <div className="menu__para">
                    Dive in the execuite flavours of french beauty of cuisines. <br></br> Be sucked into the flavours of french life
                </div>

                <div className="menu__content">
                    {
                        food.french.map((item)=>{
                            return (
                                <div className="food__item" key={item.name}>

                                    <div className="food__image">
                                        <img src={item.url} alt=""/>
                                    </div>
                                    <div className="food__name">
                                        {item.name}

                                    </div>
                                    <div className="food__desc">
                                        {item.desc}
                                    </div>
                                    <div className="food__price">
                                        {item.price}€
                                    </div>
                                    <div className="btn btn-add" onClick={e=>{addCartHandaler(e,item)}}>
                                        Add to card
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className="menu__container">
                <div className="menu__header">English cuisine</div>
                <div className="menu__para">
                    Dive in the execuite flavours of french beauty of cuisines. <br></br> Be sucked into the flavours of french life
                </div>

                <div className="menu__content">
                    {
                        food.english.map((item)=>{
                            return (
                                <div className="food__item" key={item.name}>

                                    <div className="food__image">
                                        <img src={item.url} alt=""/>
                                    </div>
                                    <div className="food__name">
                                        {item.name}

                                    </div>
                                    <div className="food__desc">
                                        {item.desc}
                                    </div>
                                    <div className="food__price">
                                        {item.price}€
                                    </div>
                                    <div className="btn btn-add" onClick={e=>{addCartHandaler(e,item)}}>
                                        add to cart
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="menu__container">
                <div className="menu__header">Italian cuisine</div>
                <div className="menu__para">
                    Dive in the execuite flavours of french beauty of cuisines. <br></br> Be sucked into the flavours of french life
                </div>

                <div className="menu__content">
                    {
                        food.italy.map((item)=>{
                            return (
                                <div className="food__item" key={item.name}>

                                    <div className="food__image">
                                        <img src={item.url} alt=""/>
                                    </div>
                                    <div className="food__name">
                                        {item.name}

                                    </div>
                                    <div className="food__desc">
                                        {item.desc}
                                    </div>
                                    <div className="food__price">
                                        {item.price}€
                                    </div>
                                    <div className="btn btn-add" onClick={e=>{addCartHandaler(e,item)}}>
                                        add to cart
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
