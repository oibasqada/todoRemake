import {useState} from 'react'
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

const App = () => {
    
    const [todos, setTodos] = useState([])
    const [text, setText] = useState('')

    const addTodo = () => {
        if (text.trim().length) {
            setTodos([
                ...todos,
                {
                    id: new Date().toISOString(),
                    text,
                    completed: false,
                }
            ])
            setText('')
        }

    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    const toggleTodoComplete = (todoId) => {
        setTodos(
            todos.map(
                todo => {
                    if (todo.id !== todoId) return todo

                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
            )
        )
    }

    return (
        <div>
            <InputField
                text={text}
                handleInput={setText}
                handleSubmit={addTodo}
            />

            <TodoList
                todos={todos}
                toggleTodoComplete={toggleTodoComplete}
                removeTodo={removeTodo}
            />
        </div>
    );
};

export default App;