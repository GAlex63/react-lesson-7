import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context";

export function TodoForm() {
    const [value, setValue] = useState('')

    const { addTodo } = useContext(AppContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (value) {
            addTodo(value)
            setValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="todoForm">
        <input 
        type='text' 
        value={value} 
        onChange={(event) => setValue(event.target.value)} 
        className='todo-input' 
        placeholder="Новая задача" 
        />
        <button type='submit' className='btn-create'>Добавить</button>
        </form>
    )
}