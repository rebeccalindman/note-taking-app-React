// ToDo.tsx
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddToDo from './components/AddToDo/AddToDo';
import ToDoItem from './components/ToDoItem/ToDoItem';

const ToDo = () => {
    const heading = "To Do App";
    const [todos, setTodos] = useState<{ id: number; text: string; done: boolean }[]>([
        {
            id: 1,
            text: "Köp kaffe",
            done: false,
        },
        {
            id: 2,
            text: "Köp kaka",
            done: true,
        },
        {
            id: 3,
            text: "Brygg kaffe",
            done: false,
        },
        {
            id: 4,
            text: "Drick kaffe",
            done: false,
        },
    ]);

    useEffect(() => {
        async function fetchToDos() {
            try {
                const response = await fetch("https://dummyjson.com/todos");
                if (!response.ok) throw new Error("Failed to fetch todos");
                const data = await response.json();
                // Merge original and fetched todos
                setTodos((prevTodos) => [
                    ...prevTodos,
                    ...data.todos.map((todo: any) => ({
                        id: uuidv4(), // Generate a unique ID
                        text: todo.todo, // Map API's field to "text"
                        done: todo.completed, // Map API's field to "done"
                    })),
                ]);
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        }
        fetchToDos();
    }, []);

   /*  useEffect(() => {
        console.log("todos: ", todos);
    }, [todos]); // runs when todos changes */

    function updateToDos(newToDo: string) {
        console.log("newToDo: ", newToDo);

        const todo = {
            id: todos.length + 1,
            text: newToDo,
            done: false,
        };

        // Update todos state with the new todo
        setTodos((prevTodos) => [todo, ...prevTodos]);
        console.log("todos: ", [...todos, todo]);
    }

    const removeToDo = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    const toggleDone = (id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    return (
        <main className="App">
            <h1>{heading}</h1> {/* Allt inom {} tolkas som vanilla JS */}
            <AddToDo updateToDos={updateToDos} />
            <ul>
                {todos.map((todo) => (
                    <ToDoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        done={todo.done}
                        removeToDo={removeToDo}
                        toggleDone={toggleDone} // Pass the toggle function
                    />
                ))}
            </ul>
        </main>
    );
};

export default ToDo;

