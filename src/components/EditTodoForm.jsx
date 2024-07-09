import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context";

export function EditTodoForm({todo}) {
    const { editTitle } = useContext(AppContext)
    const [value, setValue] = useState(todo.title);

    const handleSubmit = (event) => {
        event.preventDefault();
        editTitle(value, todo.id)
    }

    return(
        <form onSubmit={handleSubmit} className='todoForm'>
            <input type='text' value={value} onChange={(event) => setValue(event.target.value)} className='todo-input' />
            <button type='submit' className='btn-accept'>Изменить</button>
        </form>
    )
}
