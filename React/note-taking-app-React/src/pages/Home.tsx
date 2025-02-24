import React from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import useLocalStorage from '../hooks/useLocalStorage';
import { faBriefcase, faBook, faHome, faLightbulb } from '@fortawesome/free-solid-svg-icons';

interface Note {
  id: number;
  title: string;
  content: string;
  categories: number[];
}

const categories = [
  { id: 1, name: 'work', icon: faBriefcase },
  { id: 2, name: 'study', icon: faBook },
  { id: 3, name: 'personal', icon: faHome },
  { id: 4, name: 'inspiration', icon: faLightbulb }
];

const Home: React.FC = () => {
  const [notes, setNotes] = useLocalStorage<Note[]>('notes', []);

  return (
    <>
        <h2>Create a note</h2>
      <section className='card w-full'>
        <NoteForm />
      </section>
      <h2>Recent notes</h2>
      <NoteList limit={2} /> {/* ✅ Pass categories */}
    </>
  );
};

export default Home;
