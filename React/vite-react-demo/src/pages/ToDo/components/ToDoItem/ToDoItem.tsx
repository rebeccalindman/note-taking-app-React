import './ToDoItem.css';

import IconButton from '../../../../../../vite-react-demo/src/components/IconButton/IconButton';
import TrashCanIcon from '../../../../../../vite-react-demo/src/assets/icons/TrashCanIcon';
import Checkbox from '../Checkbox/Checkbox';

const ToDoItem = ({ id, text, done, removeToDo, toggleDone }: { id: number; text: string; done: boolean; removeToDo: (id: number) => void; toggleDone: (id: number) => void }) => {
    return (
        <li className={`to-do-item ${done ? 'done' : ''}`}>
                {/* Checkbox to toggle "done" state */}
                <Checkbox
                    checked={done}
                    onChange={() => toggleDone(id)} // Call toggleDone when changed
                />

                {/* Text content */}
                <span>{text}</span>

                {/* IconButton for removing the todo */}
                <IconButton
                    ariaLabel="delete"
                    onClick={() => removeToDo(id)}
                    icon={<TrashCanIcon />}
                />
        </li>
    );
};

export default ToDoItem;

