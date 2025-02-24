import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { deleteNote } from "../store/notesSlice";
import Button from "./Button";
import ButtonContainer from "./ButtonContainer";

interface NoteListProps {
  limit?: number; // ✅ Optional prop to limit the number of notes displayed
}

const NoteList: React.FC<NoteListProps> = ({ limit }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);
  const categories = useSelector((state: RootState) => state.notes.categories);

  if (!notes || notes.length === 0) {
    return <p>No notes available.</p>;
  }

  // ✅ If `limit` is provided, only show the most recent `limit` notes
  const displayedNotes = limit ? [...notes].reverse().slice(0, limit) : notes;

  return (
    <ul className="flex flex-col w-full justify-center">
      {displayedNotes.map((note) => (
        <li className="card w-full h-fit" key={note.id}>
          <div className="flex flex-col">
            <div className="flex flex-row justify-end h-0">
              {/* ✅ Display category icons */}
              {note.categories.map((categoryId) => {
                const category = categories.find((c) => c.id === categoryId);
                return category ? <span key={category.id}>{category.icon} </span> : null;
              })}
            </div>
            <h3 className="font-bold text-xl">{note.title}</h3>
            <p>{note.content}</p>
          </div>
          <ButtonContainer buttons={[
            { text: "View", 
              onClick: () => console.log("View note"), 
              type: "button", 
              variant: "primary" },
              { text: "Edit", 
              onClick: () => console.log("Edit note"), 
              type: "button", 
              variant: "primary" },
              { text: "Delete", 
              onClick: () => dispatch(deleteNote(note.id)), 
              type: "button", 
              variant: "secondary" },
            ]} />
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
