import { useState, useEffect } from "react";

export default function useSortedTodo(todos, searchQuery) { 
    const [isSorted, setIsSorted] = useState(false);
	const [isSortedTodos, setIsSortedTodos] = useState([]);
	const [isFiltered, setIsFiltered] = useState(false);
	const [isFilteredTodos, setIsFilteredTodos] = useState([]);
    
    const sortTodo = () => {
		if (!isSorted) {
			const sortedTodos = [...todos].sort((a, b) => a.title.localeCompare(b.title));
			setIsSortedTodos(sortedTodos);
		}
		setIsSorted(!isSorted);
	};


    useEffect(() => {
        if (searchQuery) {
            const filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(searchQuery.toLowerCase()))
            setIsFilteredTodos(filteredTodos)
            setIsFiltered(true)
        } else {
            setIsFilteredTodos(todos)
            setIsFiltered(false)
        }

    }, [todos, isSorted, searchQuery])

    return { isSorted, isSortedTodos, isFiltered, isFilteredTodos, sortTodo }
} 