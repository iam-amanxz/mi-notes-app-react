import moment from "moment";

const filtersReducerDefaultState = {
  text: "",
  sortBy: "",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month")
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };

    case "SORT_BY_CREATED_DATE":
      return {
        ...state,
        sortBy: "created"
      };
    case "SORT_BY_MODIFIED_DATE":
      return {
        ...state,
        sortBy: "modified"
      };
    default:
      return state;
  }
};
