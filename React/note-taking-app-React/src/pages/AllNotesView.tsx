// AllNotesView.tsx

import NoteList from "../components/NoteList"

interface AllNotesViewProps {}

function AllNotesView(props: AllNotesViewProps) {
  return (
    <>
      <h2>All notes</h2>
      <NoteList />
    </>
  )
}

export default AllNotesView
