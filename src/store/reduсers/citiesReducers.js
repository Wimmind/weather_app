export const ADD_CITY = "ADD_CITY";
export const DELETE_CITY = "DELETE_CITY";

const initialState = {
  citiesList: [],
};

export const citiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_CITY: {
      return {
        ...state,
        citiesList: [
          ...state.citiesList.filter((city) => city.id !== action.payload),
        ],
      };
    }
    case ADD_CITY: {
      return { ...state, citiesList: [...state.citiesList, action.payload] };
    }
    default:
      return state;
  }
};
