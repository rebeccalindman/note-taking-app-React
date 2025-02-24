import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
/* import { RootState } from "../store/store"; */
import { addNote } from "../store/notesSlice";
import ButtonContainer from "./ButtonContainer";
import Checkboxes from "./Checkboxes";
import { ButtonConfig } from "../types/buttonTypes";

const NoteForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);


  const handleSave = () => {
    const newNote = { id: Date.now(), title, content, categories: selectedCategories };
    dispatch(addNote(newNote));
    setTitle("");
    setContent("");
    setSelectedCategories([]);
  };


  const buttons: ButtonConfig[] = [
    { text: "Save", onClick: handleSave, type: "button", variant: "primary" },
    { text: "Cancel", onClick: () => console.log("Cancelled"), type: "button", variant: "secondary" },
  ];
  
  return (
    <form className="flex flex-col gap-3 m-4 min-h-100">
      <input className="outline p-2 rounded" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea className="outline p-2 flex-1 rounded" placeholder="A place for your thoughts..." value={content} onChange={(e) => setContent(e.target.value)} />
      {/* ✅ No longer passing categories as a prop */}
      <Checkboxes selectedCategories={selectedCategories} setSelectedCategories={setSelectedCategories} />
      <ButtonContainer buttons={buttons} />
    </form>
  );
};

export default NoteForm;
