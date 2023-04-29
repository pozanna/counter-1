import "./Header.css";
import calcIcon from "../assets/img/counter.png";

const Header = () => {
  return (
    <header className="headerCounter">
      <img src={calcIcon} alt="calc" />
      <h1>React Counter</h1>
    </header>
  );
};

export default Header;
