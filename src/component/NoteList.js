import React from "react";
import EmptyList from "./EmptyList";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

function NoteList({ notes }) {
  return notes.length !== 0 ? (
    <section className="notes-list">
      {notes.map((note) => {
        return <NoteItem key={note.id} {...note} />;
      })}
    </section>
  ) : (
    <EmptyList />
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
