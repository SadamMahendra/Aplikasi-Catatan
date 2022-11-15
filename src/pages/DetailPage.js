import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotesDetail from "../component/NotesDetail";
import { deleteNote, getActiveNotes, getNote } from "../utils/network-data";

function DetailPage() {
  const { idUrl } = useParams();
  const [note, setNote] = useState({
    title: "",
    createdAt: "",
    body: "",
    id: "",
  });
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchWithData() {
      const { data } = await getNote(idUrl);
      setNote(data);
    }

    fetchWithData();
  }, [idUrl]);

  async function onDeleteHandler(idUrl) {
    await deleteNote(idUrl);

    // update the Notes state from network.js
    const { data } = await getActiveNotes();
    setNote(data);
    navigate("/");
  }

  return (
    <section className="detail-page">
      {note.id !== "" && <NotesDetail {...note} onDelete={onDeleteHandler} />}
    </section>
  );
}

export default DetailPage;

// function DetailPageWrapper() {
//   const { id } = useParams();

//   return <DetailPage id={id} />;
// }

// class DetailPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       note: getNote(props.id),
//     };

//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//   }

//   //fungsi delete
//   onDeleteHandler(id) {
//     deleteNote(id);

//     //refresh
//     this.setState(() => {
//       return {
//         note: getAllNotes(),
//       };
//     });
//   }

//   render() {
//     return (
//       <section className="detail-page">
//         <NotesDetail {...this.state.note} onDelete={this.onDeleteHandler} />
//       </section>
//     );
//   }
// }

// DetailPage.propTypes = {
//   id: PropTypes.string.isRequired,
// };

// export default DetailPageWrapper;
