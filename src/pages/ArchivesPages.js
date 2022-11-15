import React, { useState } from "react";
import SearchBar from "../component/SearchBar";
import { getArchivedNotes } from "../utils/network-data";
import NoteList from "../component/NoteList";
import { useSearchParams } from "react-router-dom";

function ArchivesPages() {
  const [archived, setArchived] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    async function fetchWithData() {
      const { data } = await getArchivedNotes();
      setArchived(data);
    }
    fetchWithData();
  }, []);

  const filteredArchive = archived.filter((archive) => {
    return archive.title.toLowerCase().includes(keyword.toLowerCase());
  });

  function onkeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  return (
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <SearchBar keyword={keyword} keywordChange={onkeywordChangeHandler} />
      <NoteList notes={filteredArchive} />
    </section>
  );
}
// class ArchivesPages extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       keyword: "",
//     };

//     this.onkeywordChangeHandler = this.onkeywordChangeHandler.bind(this);
//   }

//   onkeywordChangeHandler(keyword) {
//     this.setState(() => {
//       return { keyword };
//     });
//   }

//   render() {
//     const archives = getArchivedNotes();

//     const notes = archives.filter((note) => {
//       return note.title
//         .toLowerCase()
//         .includes(this.state.keyword.toLowerCase());
//     });

//     return (
//       <section className="archives-page">
//         <h2>Catatan Arsip</h2>
//         <SearchBar
//           keyword={this.state.keyword}
//           keywordChange={this.onkeywordChangeHandler}
//         />
//         <NoteList notes={notes} />
//       </section>
//     );
//   }
// }

export default ArchivesPages;
