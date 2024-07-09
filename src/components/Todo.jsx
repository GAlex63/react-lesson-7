import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import { useContext } from "react";
import { AppContext } from "../context";


export function Todo({title}) {
    const { deleteTodo, editTodo } = useContext(AppContext)
    return (
        <div className='todo'>
            <div className="btn-block">
                <FontAwesomeIcon
                    icon={faPen} className="pen" onClick={() => editTodo(title.id)} />
                <FontAwesomeIcon
                    icon={faTrash} className="trash" onClick={() => deleteTodo(title.id)} />
            </div>
            
        </div>
    )
}