import { useSelector } from "react-redux";
import { getCities } from "../API";

const CityForm = () => {
  const { citiesList } = useSelector((state) => state.cities);

  const click = () => {
    getCities("London");
  };

  return (
    <div className="city-form__wrapper">
      <div className="city-form__group">
        <input
          className="city-form__input"
          placeholder="Введите название города"
        ></input>
        <button onClick={click} className="city-form__button">
          Добавить
        </button>
      </div>
    </div>
  );
};

export default CityForm;
