import { useActions } from "../hooks/useActions";
import { useState } from "react";

const CityForm = () => {
  const { fetchCity } = useActions();
  const [cityField, setCityField] = useState("");

  const handleChange = (event) => {
    const currentValue = event.target.value;
    setCityField(currentValue);
  };

  const addCity = () => {
    fetchCity(cityField);
    setCityField("");
  };

  return (
    <div className="city-form__wrapper">
      <div className="city-form__group">
        <input
          className="city-form__input"
          placeholder="Введите название города"
          value={cityField}
          onChange={handleChange}
        ></input>
        <button onClick={addCity} className="city-form__button">
          Добавить
        </button>
      </div>
    </div>
  );
};

export default CityForm;
