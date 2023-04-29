import minusIcon from "../assets/img/minus.png";
const Decrement = (props) => {
  return (
    <div
      className="decrementButton"
      onClick={() => {
        // Je donne comme nouvelle valeur à counter, se valeur actuelle + 1
        props.setCounter(props.counter - 1);
      }}
    >
      <img src={minusIcon} alt="minus icon" />
    </div>
  );
};

export default Decrement;
