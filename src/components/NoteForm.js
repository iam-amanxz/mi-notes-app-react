import React from "react";
import "react-dates/initialize";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Modal from "react-modal";

export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.note ? props.note.title : "",
      description: props.note ? props.note.description : "",
      createdAt: props.note ? moment(props.note.createdAt) : moment(),
      modifiedAt: props.note ? moment() : moment(),
      calenderFocused: false,
      error: ""
    };
  }

  onTitleChange = e => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onDateChange = createdAt => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.title || !this.state.description) {
      this.setState(() => ({
        error: "Please provide a title and a description"
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        title: this.state.title,
        description: this.state.description,
        createdAt: this.state.createdAt.valueOf(),
        modifiedAt: this.state.modifiedAt.valueOf()
      });
    }
  };

  //   Render Component
  render() {
    return (
      <Modal
        isOpen={!!this.props.click}
        contentLabel="Modal"
        onRequestClose={this.props.handleClose}
        closeTimeoutMS={200}
        ariaHideApp={false}
        className="modal"
      >
        <div className="head">
          {this.props.page === "add" ? <h2>Add a note</h2> : <h2>Edit note</h2>}
          <i
            className="fas fa-times-circle"
            onClick={this.props.handleClose}
          ></i>
        </div>
        <div className="error-message">
          {this.state.error && <p>{this.state.error}</p>}
        </div>

        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
            className="title-input"
          />
          <textarea
            placeholder="Add a description"
            value={this.state.description}
            onChange={this.onDescriptionChange}
            className="description-input"
          ></textarea>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
            id="single-date-picker"
          />
          <button className="button save-button">Save</button>
          {this.props.page === "add" ? null : (
            <button
              className="button remove-button"
              onClick={this.props.handleRemove}
            >
              Remove
            </button>
          )}
        </form>
      </Modal>
    );
  }
}
