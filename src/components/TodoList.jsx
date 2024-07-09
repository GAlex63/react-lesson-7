import { AppContext } from "../context";
import { EditTodoForm } from "./EditTodoForm";
import { Todo } from "./Todo";
import { useContext } from "react";

export function TodoList() {
    const { todos } = useContext(AppContext)

   return( 
    todos.map((todo) => todo.isEditing ? 
    (<EditTodoForm todo={todo} />
) : 
(<Todo 
    key={todo.id} 
    title={todo} 
    />))
)}