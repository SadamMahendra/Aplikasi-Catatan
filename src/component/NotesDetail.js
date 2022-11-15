import React from "react";
import { showFormattedDate } from "../utils/index";
import parser from "html-react-parser";
import DetailPageAction from "./DetailPageAction";
import PropTypes from "prop-types";

function NotesDetail({ title, createdAt, body, id, onDelete }) {
  return (
    <>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{parser(body)}</div>
      <DetailPageAction idAction={id} onDelete={onDelete} />
    </>
  );
}

NotesDetail.propTypes = {
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NotesDetail;
