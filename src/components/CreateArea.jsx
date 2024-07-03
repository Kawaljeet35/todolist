import { useState } from "react";

export default function CreateArea(props){

    const [note, setNote] = useState({
      title: "",
      content: ""
    })

    function handleChange(event){
      const { value, name } = event.target;
      setNote(prevNote => {
        return {
          ...prevNote,
          [name] : value,
        };
      });
    }

    function submitNote(event){
      props.onAdd(note);
      setNote({ title: "", content: "" });
      event.preventDefault();
    }

    return <div>
    <form>
      <input value={note.title} onChange={handleChange} name="title" placeholder="Title" />
      <textarea value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
      <button onClick={submitNote}>Add</button>
    </form>
  </div>;
}