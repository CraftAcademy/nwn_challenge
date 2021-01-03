const rootReducer = (state = { newsFeed: { articles: [] } }, action) => {
  switch (action.type) {
    case "SET_NEWS_FEED":
      return {
        ...state,
        newsFeed: {
          articles: action.payload,
        },
      };

    default:
      return state;
  }
};

export default rootReducer;
