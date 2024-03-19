import { useSelector } from "react-redux";

export const IcecreamView = () => {
  const numOfIcecreams = useSelector(state => state.icecream.numOfIcecreams);
  return (
    <div>
      <h2>Number of ice creams - {numOfIcecreams}</h2>
      <button>Order Ice cream</button>
      <button>Restock Ice creams</button>
    </div>
  );
};
