import React from "react";
import NotesList from "./NotesList";
import NoteListFilters from "./NoteListFilters";

export default () => (
  <div>
    <NoteListFilters />
    <NotesList />
  </div>
);
