const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "REMOVE":
      return state - 1;
    case "ADDTEN":
      return state + 10;
    case "REMOVETEN":
      return state - 10;
    default:
      return (state = 0);
  }
};

export default counterReducer;
