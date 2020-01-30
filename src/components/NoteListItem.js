import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const NoteListItem = ({ id, title, description, createdAt, modifiedAt }) => (
  <div className="list-item">
    <Link to={`/edit/${id}`} className="list-item--title">
      <h3>{title}</h3>
    </Link>
    <p className="list-item--description">{description}</p>
    <div className="list-item--dates">
      <p>Created: {moment(createdAt).format("DD MMM YYYY")}</p>
      <p>Last Modified: {moment(modifiedAt).format("DD MMM YYYY")}</p>
    </div>
  </div>
);

export default NoteListItem;
