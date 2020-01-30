import React from "react";
import { connect } from "react-redux";
import NoteForm from "./NoteForm";
import { startAddNote } from "../actions/notes";

export class AddNotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true,
      page: "add"
    };
  }

  handleClose = () => {
    this.setState(() => ({ showModal: false }));
    this.props.history.push("/");
  };

  onSubmit = note => {
    this.props.startAddNote(note);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <NoteForm
          onSubmit={this.onSubmit}
          click={this.state.showModal}
          handleClose={this.handleClose}
          page={this.state.page}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddNote: note => dispatch(startAddNote(note))
});

export default connect(undefined, mapDispatchToProps)(AddNotePage);
