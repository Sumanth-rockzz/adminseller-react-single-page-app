import React ,{useState} from 'react';
import AddItem from './Components/UI/AddItem';
import DisplayItem from './Components/DisplayItem/DisplayItem';


function App() {
  const [electronics, setElectronics] = useState([]);
  const [food, setFood] = useState([]);
  const [skinCare, setskinCare] = useState([]);

  const addElectronics = (data) => {
    setElectronics((prev) => {
      return [data, ...prev];
    });
  };
  const addFood = (data) => {
    setFood((prev) => {
      return [data, ...prev];
    });
  };
  const addSkin = (data) => {
    setskinCare((prev) => {
      return [data, ...prev];
    });
  };

  const deleteElectronics = (id) => {
    const filteredElectronics = electronics.filter((item) => item.id !== id);
    setElectronics(filteredElectronics );
    localStorage.removeItem(id);
  };
  const deleteFood = (id) => {
    const filteredFood = food.filter((item) => item.id !== id);
    setFood(filteredFood);
    localStorage.removeItem(id);
  };
  const deleteSkin = (id) => {
    const filteredSkin = skinCare.filter((item) => item.id !== id);
    setskinCare(filteredSkin);
    localStorage.removeItem(id);
  };

  return (
    <div>
      <AddItem addElectronics={addElectronics} addFood={addFood} addSkin={addSkin} />
      <DisplayItem
        deleteElectronics={deleteElectronics}
        deleteFood={deleteFood}
        deleteSkin={deleteSkin}
        electronics={electronics}
        food={food}
        skin={skinCare}
      ></DisplayItem>
    </div>
  );
}

export default App;
