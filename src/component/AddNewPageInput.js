import React, { useState } from "react";
import AddNewPageAction from "./AddNewPageAction";
import { addNote } from "../utils/network-data";
import useInput from "../hooks/useInput";

function AddNewPageInput() {
  const [title, onTitleChange] = useInput();
  const [body, setBody] = useState("");
  const onbodyHandler = (event) => {
    setBody(event.target.innerHTML);
  };

  function onAddHandler() {
    addNote({ title, body });
  }

  return (
    <div className="add-new-page__input">
      <input
        className="add-new-page__input__title"
        placeholder="Catatan rahasia"
        value={title}
        onChange={onTitleChange}
      />
      <div
        className="add-new-page__input__body"
        contentEditable="true"
        data-placeholder="Sebenarnya saya adalah ..."
        onInput={onbodyHandler}
      />
      <AddNewPageAction onAddHandler={onAddHandler} />
    </div>
  );
}
export default AddNewPageInput;

// class AddNewPageInput extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       title: "",
//       body: "",
//     };

//     this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
//     this.onInputHandler = this.onInputHandler.bind(this);
//     this.onAddHandler = this.onAddHandler.bind(this);
//   }

//   onTitleChangeHandler(event) {
//     this.setState(() => {
//       return {
//         title: event.target.value,
//       };
//     });
//   }

//   onInputHandler(event) {
//     this.setState(() => {
//       return {
//         body: event.target.innerHTML,
//       };
//     });
//   }

//   onAddHandler() {
//     addNote(this.state);
//   }

//   render() {
//     return (
//       <div className="add-new-page__input">
//         <input
//           className="add-new-page__input__title"
//           placeholder="Catatan rahasia"
//           value={this.state.title}
//           onChange={this.onTitleChangeHandler}
//         />
//         <div
//           className="add-new-page__input__body"
//           contentEditable="true"
//           data-placeholder="Sebenarnya saya adalah ..."
//           onInput={this.onInputHandler}
//         />
//         <AddNewPageAction onAddHandler={this.onAddHandler} />
//       </div>
//     );
//   }
// }
