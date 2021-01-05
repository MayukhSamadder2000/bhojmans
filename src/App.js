import {Switch,Route} from 'react-router-dom';
import React,{useState} from 'react'
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Book from './components/Book/Book';
import Menu from './components/Menu/Menu';
import Orders from './components/Orders/Orders';


function App() {
  var [adult, setAdult] = useState(0);
  var [child, setChild] = useState(0);

  var [mycart,setMyCart]=useState(()=>[]);


  const returnQty=(item)=>{
    return item.qty;
  }

  const addItem=(item)=>{
    var check=0;
    console.log(mycart)
    for(let i=0;i<mycart.length;i++){
      if(item.name===mycart[i].name){
        if(item.qty!=5){
        item.qty+=1
        mycart[i].qty=item.qty;
        setMyCart([...mycart]);
        check=1;
        }
        else{
          check=1;
        }
        break;
      }
    }
    if(check===0){
      item.qty+=1;
      setMyCart([...mycart,item]);
    }
  }



  const remItem=(item)=>{
    if(item.qty >1){
      for(let i=0;i<mycart.length;i++){
        if(item.name===mycart[i].name){
          mycart[i].qty-=1;
          setMyCart([...mycart]);
          console.log("Removed item is",item)
        }
      }
    }
    else if(item.qty===1){

      item.qty-=1

      const newState=mycart.filter((e)=>{
        
        return e.qty>0
      })
      console.log("Item popped")
      setMyCart([...newState])
    }
  }


  const addAdult=()=>{
    if(adult<5){
    const newDine=adult+1;
    setAdult(newDine);
    }

    console.log(adult);

  }

  const addChild=()=>{
        if(child<5){
    const newDine=child+1;
    setChild(newDine);
    }
    console.log(child);

  }


  const remChild=()=>{
    if(child>0){
    const newDine=child-1;
    setChild(newDine);
    }
    console.log(child);
  }

    const remAdult=()=>{
    if(adult>0){
    const newDine=adult-1;
    setAdult(newDine);
    }
    console.log(adult);
  }

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/book">
          <Book adult={adult} child={child} addAdult={addAdult} addChild={addChild} remChild={remChild} remAdult={remAdult}/>
        </Route>
        <Route path="/menu">
          <Menu myCart={mycart} addItem={addItem} remItem={remItem}/>
        </Route>
        <Route path="/orders">
          <Orders myCart={mycart} addItem={addItem} remItem={remItem} retQty={returnQty}/>
        </Route>
        <Route path="/">
          <Home adult={adult} child={child} addAdult={addAdult} addChild={addChild}/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
