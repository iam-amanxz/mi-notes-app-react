import React from "react";
import { connect } from "react-redux";
import NoteListItem from "./NoteListItem";
import selectNotes from "../selectors/notes";

const NotesList = props => (
  <div className="notes-list">
    {props.notes.map(note => {
      return <NoteListItem key={note.id} {...note} />;
    })}
  </div>
);

const mapStateToProps = state => {
  return {
    notes: selectNotes(state.notes, state.filters)
  };
};

export default connect(mapStateToProps)(NotesList);
