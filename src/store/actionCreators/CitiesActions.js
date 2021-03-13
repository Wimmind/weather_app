export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "DELETE_CITY";

export const addCity = (city) => {
  return {
    type: ADD_CITY,
    payload: city,
  };
};

export const deleteCity = (id) => {
  return {
    type: DELETE_CITY,
    payload: id,
  };
};
