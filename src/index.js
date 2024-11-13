import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
const Header = function () {

  return (
    <header className="header">
      <h1>React Pizza Co.</h1>
    </header>
  );
};
function Menu() {
  const pizzaMenu = true;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {pizzaMenu ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're currently working on our menu</p>
      )}
    
    </main>
  );



  function Pizza({ pizzaObj }) {
  
    return (
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt="spinaci"></img>
        <div>
          <h3>{pizzaObj.name}</h3>
          <p>{pizzaObj.ingredients}</p>
          <span>{pizzaObj.soldOut ? "SOLD OUT" : `${pizzaObj.price}$`}</span>
        </div>
      </li>
    );
  }
}
const Footer = () => {
  
  const year = new Date().getFullYear();
  const isOpen = true;
  return (
    <footer className="footer">
     
      {isOpen ? <Order year={year} /> : <p>We're closed! Come back tomorrow</p>}
    
    </footer>
  );
};
function Order({ year }) {
  
  const time = new Date().getHours();

  return (
    <div className="order">
      {time >= 9 && time <= 22 ? (
        <p>We're open Our timing: 9 AM to 10 PM </p>
      ) : (
        <p>Sorry we're closed now</p>
      )}
      <button className="btn">Order</button>
      <p>&copy; {year} React Pizza Menu</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




