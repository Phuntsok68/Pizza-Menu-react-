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
  // Inline styling
  // return <h1 style={{ color: "red", fontSize: "40px" }}>React Pizza Co.</h1>;
  // const style = {
  //   color: "blue",
  //   fontSize: "20px",
  // };
  // return <h1 style={style}>React Pizza Co.</h1>;
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
          {/* react fragment <> </> */}
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
      {/* <Pizza
        name="Spinaci"
        img="pizzas/spinaci.jpg"
        price={13}
        ingredients="Tomato mushroom spinach"
      />
      <Pizza
        name="Funghi"
        img="pizzas/funghi.jpg"
        price={11}
        ingredients="Tomato beans brocolli"
      /> */}
    </main>
  );

  // function Pizza({props}) {
  //   // if (props.pizzaObj.soldOut) return null;
  //   // Conditional rendering with multiple returns
  //   return (
  //     <li className="pizza">
  //       <img src={props.pizzaObj.photoName} alt="spinaci"></img>
  //       <div>
  //         <h3>{props.pizzaObj.name}</h3>
  //         <p>{props.pizzaObj.ingredients}</p>
  //         <span>{props.pizzaObj.price}</span>
  //       </div>
  //     </li>
  //   );
  // }

  function Pizza({ pizzaObj }) {
    //  Destructuring props

    // if (props.pizzaObj.soldOut) return null;
    // Conditional rendering with multiple returns
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
  // we can write js logic inside react components
  const year = new Date().getFullYear();
  const isOpen = true;
  return (
    <footer className="footer">
      {/* Ternary operator */}
      {isOpen ? <Order year={year} /> : <p>We're closed! Come back tomorrow</p>}
      {/* {isOpen && (
        <div className="order">
          <button className="btn">Order</button>
          <p>&copy; {year} React Pizza Menu</p>
        </div>
      )} */}
      {/* Short-circuiting: if the first condition is true it will automatically execute the second condition */}
    </footer>
  );
};
function Order({ year }) {
  // extracting JSX into a new component
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
// 1 RENDERING THE ROOT COMPONENT AND STRICT MDOE
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // In React, React.StrictMode is a tool that helps developers identify potential issues in their code. It doesn’t render anything visible in the UI; instead, it provides additional checks and warnings to catch common mistakes or deprecated practices, particularly in development.
);
// React before version 18
ReactDOM.render(<App />);

// 2 DEBUGGING
// start the app npm start
// stop and rerun control c

// 3 COMPONENTS
/*
React applications are entirely made out of components
We build complex UIs by building multiple components and combining them
Components can be reused,nested inside each other and pass data between them
Component tree
*/

// 4 JSX
/*
Declarative syntax to describe what components look like and how they work
Allow us to embed javascript,css and react in html
Well react is a framework of js, then how does it understand jsx? A tool called Babel converts it to js
Why Babel in React?

	1.	JSX Compilation: React uses JSX, which is a syntax extension that allows you to write HTML-like code in JavaScript. Browsers can’t directly interpret JSX, so Babel transforms it into plain JavaScript. For example, <h1>Hello, world!</h1> in JSX would be converted into React.createElement('h1', null, 'Hello, world!').
	2.	Modern JavaScript Features: React projects often use the latest JavaScript syntax (e.g., ES6+ features like const, let, arrow functions, destructuring, etc.). Babel helps transform these features so that your React app can run on older browsers that don’t support them.

*/

//5 STYLING REACT APPLICATIONS

// PROPS: passing and receiving props
// Props are used to pass data from parent components to child components
// Props are immutable, they are read only
// Component includes data(props,state), logic and appearance(UI)
// One way data flow (parent to child)

// 6 CONDITIONAL RENDERING WITH &&
// short-circuiting eg: true && console.log('Hello') since the first condition is true, it prints the hello string
//  false && console.log('world') since the first condition is false, it will never console log the string

// 7 CONDITIONAL RENDERING WITH TERNARIES (recommended)
// 8 CONDITIONAL RENDERING WITH MULTIPLE RETURNS

// Inside the component we can write any javascript code but in the JSX we can write only js expression not statements like if-else

// 9 EXTRACTING JSX INTO A NEW COMPONENT
// 10 DESTRUCTURING PROPS
// 11 REACT FRAGMENTS <> </>
// In react fragments, we can wrap more than one element inside the frament <> </> without adding new HTML tag like div which might disturb the flow of structure
// Elements added inside fragment act as a separate entity
// <React.Fragment key={}></React.Fragment>

// 12 SETTING CLASSES AND TEXT CONDITIONALLY
