import moment from "moment";

export default (notes, { text, sortBy, startDate, endDate }) => {
  return notes
    .filter(note => {
      const createdAtMoment = moment(note.createdAt);

      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = note.title.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "created") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "modified") {
        return a.modifiedAt < b.modifiedAt ? 1 : -1;
      }
    });
};
