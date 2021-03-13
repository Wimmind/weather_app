import { ADD_CITY, DELETE_CITY } from "../actionCreators/CitiesActions";

const initialState = {
  citiesList: [],
};

export const citiesReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case DELETE_CITY: {
      return { ...state, address: action.payload };
    }
    case ADD_CITY: {
      return { ...state, citiesList: [...state.citiesList, action.payload] };
    }
    default:
      return state;
  }
};
