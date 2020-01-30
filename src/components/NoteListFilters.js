import React from "react";
import { connect } from "react-redux";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

import {
  setTextFilter,
  sortByModifiedDate,
  sortByCreatedDate,
  setStartDate,
  setEndDate
} from "../actions/filters";

class NoteListFilters extends React.Component {
  state = {
    calenderFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = calenderFocused => {
    this.setState(() => ({ calenderFocused }));
  };

  onTextChange = e => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = e => {
    if (e.target.value === "created") {
      this.props.sortByCreatedDate();
    } else if (e.target.value === "modified") {
      this.props.sortByModifiedDate();
    }
  };

  render() {
    return (
      <div className="list-filters">
        <div className="list-filters-container">
          <input
            className="search-box"
            placeholder="Search for notes"
            type="text"
            value={this.props.filters.text}
            onChange={this.onTextChange}
          />
          <select
            className="sort-by-date"
            value={this.props.filters.sortBy}
            onChange={this.onSortChange}
          >
            <option value="created">Created</option>
            <option value="modified">Modified</option>
          </select>
          <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMonths={1}
            isOutsideRange={() => false}
            endDateId="endDate"
            startDateId="startDate"
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByCreatedDate: () => dispatch(sortByCreatedDate()),
  sortByModifiedDate: () => dispatch(sortByModifiedDate()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteListFilters);
