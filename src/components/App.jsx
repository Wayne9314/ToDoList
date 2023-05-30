import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Note, NotePara } from "./Note";
import CreateArea from "./CreateArea";
import { v4 } from "uuid";

function App() {
  const [notes, setNotes] = useState([{
    id: 0,
    title: "Intro",
    content: ["This is the simple ToDoList",
      "Simply add title and content into list.",
      "Add more than one content in a title.",
      "Click the content to cross the thing that have done.",
      "Finally click the delete icon to delete all."]
  }]);

  function addNote(newNote) {
    const istitle = notes.findIndex((note) => {
      return note.title === newNote.title;
    });
    if (istitle !== -1) {
      const prevContent = notes[istitle].content;
      prevContent.push(newNote.content);
      setNotes([...notes]);
    } else {
      setNotes((prevNotes) => {
        return [
          ...prevNotes,
          {
            id: v4(),
            title: newNote.title,
            content: [newNote.content]
          }
        ];
      });
    }
  }

  console.log(notes);

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem) => {
        return noteItem.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem) => {
        return (
          <Note
            key={noteItem.id}
            id={noteItem.id}
            title={noteItem.title}
            content={noteItem.content.map((content) => (
              <NotePara p={content} />
            ))}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
