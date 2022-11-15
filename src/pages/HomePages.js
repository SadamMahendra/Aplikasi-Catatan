import React from "react";
import SearchBar from "../component/SearchBar";
import NoteList from "../component/NoteList";
import HomePageAction from "../component/HomePageAction";
import { getActiveNotes } from "../utils/network-data";
import { useSearchParams } from "react-router-dom";
// import PropTypes from "prop-types";

function HomePages() {
  const [notes, setNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  React.useEffect(() => {
    async function fetchWithData() {
      const { data } = await getActiveNotes();
      setNotes(data);
      console.log(data);
    }

    fetchWithData();
  }, []);

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <NoteList notes={filteredNotes} />
      <HomePageAction />
    </section>
  );
}
// function HomePageWrapper() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const title = searchParams.get("title");

//   function changeSearchParams(keyword) {
//     setSearchParams({ title: keyword });
//   }
//   return (
//     <HomePages onkeywordChangeHandler={changeSearchParams} keyword={title} />
//   );
// }

// class HomePages extends React.Component {
//   constructor(props) {
//     super(props);

//     let keywordTitle;

//     if (props.keyword === null) {
//       keywordTitle = "";
//     } else {
//       keywordTitle = props.keyword;
//     }
//     this.state = {
//       notes: getActiveNotes(),
//       keyword: keywordTitle,
//     };

//     this.onkeywordChangeHandler = this.onkeywordChangeHandler.bind(this);
//   }

//   onkeywordChangeHandler(keyword) {
//     this.setState(() => {
//       return { keyword };
//     });

//     this.props.onkeywordChangeHandler(keyword);
//   }

//   render() {
//     const notes = this.state.notes.filter((note) => {
//       return note.title
//         .toLowerCase()
//         .includes(this.state.keyword.toLowerCase());
//     });

//     return (
//       <section className="homepage">
//         <h2>Catatan Aktif</h2>
//         <SearchBar
//           keyword={this.state.keyword}
//           keywordChange={this.onkeywordChangeHandler}
//         />
//         <NoteList notes={notes} />
//         <HomePageAction />
//       </section>
//     );
//   }
// }

// HomePages.propTypes = {
//   onkeywordChangeHandler: PropTypes.func.isRequired,
//   keyword: PropTypes.string,
// };

export default HomePages;
// export default HomePageWrapper;
