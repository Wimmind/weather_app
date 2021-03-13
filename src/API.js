import { addCity } from "./store/actionCreators/CitiesActions";

export const getCities = (city) => {
  return async (dispatch) => {
    const url = `https://api.openweathermap.org/data/2.5//weather?q=${city}&appid=69b220222265f10cd300e1f1680f5938&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    dispatch(addCity(data));
  };
};
