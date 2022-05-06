const fetchUserReducer = (history = [], data) => {
  switch (data.type) {
    case "FETCH_USER":
      return data.payload;
    default:
      return history;
  }
};
export default fetchUserReducer;
