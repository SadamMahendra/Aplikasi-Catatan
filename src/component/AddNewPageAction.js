import React from "react";
import { FiCheck } from "react-icons/fi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function AddNewPageAction({ onAddHandler }) {
  return (
    <div className="homepage__action">
      <Link to="/">
        <button
          className="action"
          type="button"
          title="simpan"
          onClick={onAddHandler}
        >
          <FiCheck />
        </button>
      </Link>
    </div>
  );
}

AddNewPageAction.propTypes = {
  onAddHandler: PropTypes.func.isRequired,
};

export default AddNewPageAction;
