// ACTION TYPES

const GET_DATA = "GET_DATA";
const REMOVE_FILM = "REMOVE_FILM";

// INITIAL STATE

const initialState = {
  dataSource: []
};

// ACTION CREATORS

const getData = data => ({
  type: GET_DATA,
  payload: data
});
const removeFilm = film => ({ type: REMOVE_FILM, film });

// THUNK CREATORS

export const fetchData = () => async dispatch => {
  try {
    let data = await require("../datas/movies.json");

    dispatch(getData(data));
  } catch (error) {
    console.error(error);
  }
};

// REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return { ...state, dataSource: action.payload };
    case REMOVE_FILM:
      return {
        ...state,
        dataSource: state.dataSource.filter(data => data !== action.payload)
      };
    default:
      return state;
  }
}
