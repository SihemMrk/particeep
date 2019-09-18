// ACTION TYPES

const GET_DATA = "GET_DATA";

// INITIAL STATE

const initialState = {
  dataSource: []
};

// ACTION CREATORS

const getData = data => ({
  type: GET_DATA,
  payload: data
});

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
    default:
      return state;
  }
}
