import { AppContext } from './context';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import useSearch from './components/hooks/useSearch';
import { useAddTodo } from './components/hooks/useAddTodo';
import useSortedTodo from './components/hooks/useSortedTodo';
import useEdit from './components/hooks/useEdit';

export const App = () => {
	const { searchQuery, handleSearch } = useSearch();
	const { todos, setTodos, addTodo, deleteTodo } = useAddTodo();
	const { isSorted, isSortedTodos, isFiltered, isFilteredTodos, sortTodo } =
		useSortedTodo(todos, searchQuery);
	const { editTodo, editTitle } = useEdit(todos, setTodos);

	return (
		<AppContext.Provider value={{ addTodo, editTitle, deleteTodo, editTodo, todos }}>
			<div className="App">
				<h1>Список добрых дел:</h1>
				<TodoForm />
				<div>
					<input
						className="search-input"
						type="text"
						value={searchQuery}
						onChange={handleSearch}
						placeholder="Поиск по фразе"
					></input>
					<button className="btn-sort" onClick={() => sortTodo()}>
						{isSorted ? 'Изначальный порядок' : 'По алфавиту'}
					</button>
				</div>
				<TodoList
					todos={
						isFiltered ? isFilteredTodos : isSorted ? isSortedTodos : todos
					}
				/>
			</div>
		</AppContext.Provider>
	);
};

// return (
// 	<AppContext.Provider value={{addTodo, searchQuery, handleSearch, editTitle, deleteTodo, editTodo}}>
// 		<div className="App">
// 			<h1>Список добрых дел:</h1>
// 			<TodoForm addTodo={addTodo} />
// 			<div>
// 				<input
// 					className="search-input"
// 					type="text"
// 					value={searchQuery}
// 					onChange={handleSearch}
// 					placeholder="Поиск по фразе"
// 				></input>
// 				<button className="btn-sort" onClick={() => sortTodo()}>
// 					{isSorted ? 'Изначальный порядок' : 'По алфавиту'}
// 				</button>
// 			</div>
// 			<TodoList
// 				todos={
// 					isFiltered ? isFilteredTodos : isSorted ? isSortedTodos : todos
// 				}
// 				editTitle={editTitle}
// 				deleteTodo={deleteTodo}
// 				editTodo={editTodo}
// 			/>
// 		</div>
// 	</AppContext.Provider>
// );
