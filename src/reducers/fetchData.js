const fetchData = (history = [], data) => {
  switch (data.type) {
    case "FETCH_DATA":
      return data.payload;
    default:
      return history;
  }
};

export default fetchData;
