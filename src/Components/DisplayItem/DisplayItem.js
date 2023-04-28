import Electronics from "../Electronics/Electronics";
import Food from "../Food/Food";
import Skin from "../Skin/Skin";
const DisplayItem = (props) => {
  return (
    <div>
      <Electronics
        deleteElectronics={props.deleteElectronics}
        electronics={props.electronics}
      />
      <Food deleteFood={props.deleteFood} food={props.food} />
      <Skin deleteSkin={props.deleteSkin} skin={props.skin} />
    </div>
  );
};
export default DisplayItem;
