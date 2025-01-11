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

  const AddIngredient = (nameIngred: string) => {
    const countIngredients = ingredients.map(ingred => {
      if(ingred.name === nameIngred) {
        return {
          ...ingred,
          count: ingred.count + 1,
        }
      }
      return ingred;
    });
  }

  return (
      <>
        <div className="container my-2">
          <div className="row justify-content-between">
            <div className="border border-black col m-2 ">
              <h5 className="mt-2 text-primary">Add Items</h5>
              <div className="row row-cols-2">
                <div className="col">
                  {Menu.map((item) => (
                      <div key={item.name} className="mb-2 rounded">
                        <button onClick={() => AddIngredient(item.name)} type="button"
                                className="btn btn-outline-primary w-100">
                          <img width={60} src={item.image} alt={item.name}/>
                          <div>{item.name}</div>
                          <div>{item.price} Som</div>
                        </button>
                      </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border border-black col align-self-center">
              <h4 className="mt-2 text-primary">Order Details</h4>
              <hr/>
              Здесь Будет Заказ
              <hr/>
              <h5 className="text-primary">Total Price: Som</h5>
            </div>
          </div>
        </div>
      </>
  )
};

export default App
