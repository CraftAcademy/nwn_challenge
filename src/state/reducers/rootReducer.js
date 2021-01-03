const rootReducer = (state = { newsFeed: [] }, action) => {
  switch (action.type) {
    case "SET_NEWS_FEED":
      return {
        ...state,
        newsFeed: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
