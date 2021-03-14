import { ADD_CITY, DELETE_CITY } from "../reduсers/citiesReducers";

export const fetchCity = (city) => {
  city = city.length ? city : "London";
  return async (dispatch) => {
    const url = `https://api.openweathermap.org/data/2.5//weather?q=${city}&appid=69b220222265f10cd300e1f1680f5938&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod === 200) {
      data.id = Date.now();
      dispatch({ type: ADD_CITY, payload: data });
    } else {
      alert("некорректное значение");
    }
  };
};

export const deleteCity = (id) => {
  return {
    type: DELETE_CITY,
    payload: id,
  };
};
