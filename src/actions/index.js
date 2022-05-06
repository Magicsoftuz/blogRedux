import axios from "axios";

export const fetchDataAction = () => {
  return async (dispatch) => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: "FETCH_DATA",
      payload: data,
    });
  };
};
export const fetchUserAction = (id) => {
  return async (dispatch) => {
    const data = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: "FETCH_USER",
      payload: data,
    });
  };
};
