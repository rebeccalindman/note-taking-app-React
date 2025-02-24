import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { deleteNote } from "../store/notesSlice";

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
    <ul>
      {displayedNotes.map((note) => (
        <li key={note.id}>
          <strong>{note.title}</strong>: {note.content}
          <div>
            {/* ✅ Display category icons */}
            {note.categories.map((categoryId) => {
              const category = categories.find((c) => c.id === categoryId);
              return category ? <span key={category.id}>{category.icon} </span> : null;
            })}
          </div>
          <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
