// SET_TEXT
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SET_START_DATE
export const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
export const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

// SORT_BY_CREATED
export const sortByCreatedDate = () => ({
  type: "SORT_BY_CREATED_DATE"
});

// SORT_BY_MODIFIED
export const sortByModifiedDate = () => ({
  type: "SORT_BY_MODIFIED_DATE"
});
