import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function CreateArea(props){

    const [note, setNote] = useState({
      title: "",
      content: ""
    })
    const [isExpanded, setExpanded] =  useState(false);

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

    function expand(){
      setExpanded(true);
    }

    return <div>
    <form className="create-note">
      {isExpanded && <input value={note.title} onChange={handleChange} name="title" placeholder="Title" />}
      <textarea onClick={expand} value={note.content} onChange={handleChange} name="content" placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
      <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
    </form>
  </div>;
}