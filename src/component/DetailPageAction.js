import React, { useState } from "react";
import { FaTrash, FaArchive } from "react-icons/fa";
import { TbArchiveOff } from "react-icons/tb";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  archiveNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/network-data";

function DetailPageAction({ idAction, onDelete }) {
  const [unarchive, setUnarchive] = useState([]);

  React.useEffect(() => {
    async function fetchWithData() {
      const { data } = await getArchivedNotes();

      setUnarchive(
        data.filter((archiveData) => {
          return archiveData.id === idAction;
        })
      );
    }

    fetchWithData();
  }, []);

  return (
    <div className="detail-page__action">
      {unarchive.length >= 1 ? (
        <Link to="/archives">
          <button
            className="action"
            type="button"
            title="Balikin"
            onClick={() => unarchiveNote(idAction)}
          >
            <TbArchiveOff />
          </button>
        </Link>
      ) : (
        <Link to="/">
          <button
            className="action"
            type="button"
            title="Arsipkan"
            onClick={() => archiveNote(idAction)}
          >
            <FaArchive />
          </button>
        </Link>
      )}
      <button
        className="action"
        type="button"
        title="Hapus"
        onClick={() => onDelete(idAction)}
      >
        <FaTrash />
      </button>
    </div>
  );
}

DetailPageAction.propTypes = {
  idAction: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailPageAction;
