import "./App.css";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = (action) => {
    if (action === "minus") {
      setCounter(counter - 1);
    } else if (action === "plus") {
      setCounter(counter + 1);
    } else if (action === "reset") {
      setCounter(0);
    }
  };
  return (
    <>
      <div className="container">
        <Header />
        <div className="counterContainer">
          <Counter />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
