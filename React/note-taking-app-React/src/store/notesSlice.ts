import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
  id: number;
  title: string;
  content: string;
  categories: number[];
}

interface Category {
  id: number;
  name: string;
  icon: string;
}

interface NotesState {
  notes: Note[];
  categories: Category[]; // ✅ Add categories in the Redux store
}

const initialState: NotesState = {
  notes: JSON.parse(localStorage.getItem("notes") || "[]"),
  categories: [ // ✅ Ensure default categories exist
    { id: 1, name: "work", icon: "💼" },
    { id: 2, name: "study", icon: "📚" },
    { id: 3, name: "personal", icon: "🏡" },
    { id: 4, name: "inspiration", icon: "💡" },
  ],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.notes.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
