import plusIcon from "../assets/img/plus.png";

const Increment = (props) => {
  return (
    <div
      className="incrementButton"
      onClick={() => {
        // Je donne comme nouvelle valeur à counter, se valeur actuelle + 1
        props.setCounter(props.counter + 1);
      }}
    >
      <img src={plusIcon} alt="plus icon" />
    </div>
  );
};

export default Increment;
