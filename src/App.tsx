import './App.css'
import cheeseburger from './assets/cheeseburger.png';
import fries from './assets/fries.png';
import cola from './assets/cola.png';
import tea from './assets/tea.png';
import coffee from './assets/coffee.png';
import burger from './assets/burger.png';
import {MenuItems} from "./types";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

const App = () => {
  const Menu: MenuItems[] = [
    {name: 'Burger', price: 80, image: burger},
    {name: 'CheeseBurger', price: 100, image: cheeseburger},
    {name: 'Fries', price: 60, image: fries},
    {name: 'Coffee', price: 70, image: coffee},
    {name: 'Tea', price: 50, image: tea},
    {name: 'Cola', price: 65, image: cola},
  ];

  const [orderItems, setOrderItems] = useState([
    {name: 'Burger', count: 0},
    {name: 'CheeseBurger', count: 0},
    {name: 'Fries', count: 0},
    {name: 'Coffee', count: 0},
    {name: 'Tea', count: 0},
    {name: 'Cola', count: 0},
  ]);


  return (
    <>

    </>
  )
};

export default App
