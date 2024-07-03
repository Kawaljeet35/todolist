import Header from "./Header";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Footer from "./Footer";
import { useState } from "react";

export default function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes((prevNotes) => {
           return [...prevNotes, newNote]
        })
    }

    function deleteNote(id){
        setNotes((prevNotes) => {
            return prevNotes.filter((noteItem,index) => {
                return index !== id;
            });
        });
    }

    return <>
    <Header />
    <CreateArea onAdd={addNote}/>
    {notes.map((noteItem, index) => 
    <Note 
    key={index}
    id={index}
    title={noteItem.title} 
    content={noteItem.content} 
    onDelete={deleteNote}/>)}
    <Footer />
    </>;
}