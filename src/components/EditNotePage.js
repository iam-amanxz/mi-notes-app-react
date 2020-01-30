import React from "react";
import { connect } from "react-redux";
import NoteForm from "./NoteForm";
import { startEditNote, startRemoveNote } from "../actions/notes";

export class EditNotePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: true
    };
  }

  handleClose = () => {
    this.setState(() => ({ showModal: false }));
    this.props.history.push("/");
  };

  onSubmit = note => {
    this.props.startEditNote(this.props.note.id, note);
    this.props.history.push("/");
  };

  onClick = () => {
    this.props.startRemoveNote({ id: this.props.note.id });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <NoteForm
          note={this.props.note}
          onSubmit={this.onSubmit}
          click={this.state.showModal}
          handleClose={this.handleClose}
          handleRemove={this.onClick}
        />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  note: state.notes.find(note => note.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditNote: (id, note) => dispatch(startEditNote(id, note)),
  startRemoveNote: data => dispatch(startRemoveNote(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditNotePage);
