import { Todo } from "../todos/models/todo.model";
/**
 * Filters esta en mayusculas porque es una enumeracion
 * 
*/
export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    todos: [
        new Todo('Piedra del Alma'),
        new Todo('Piedra del Infinito'),
        new Todo('Piedra del Tiempo'),
        new Todo('Piedra del Poder'),
        new Todo('Piedra de la Luz'),

    ],
    filter: Filters.All,

}

const initStore = () => {
    loadStore();
}

const loadStore = () => {

    if (!localStorage.getItem('state')) return;
    const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state'));
    state.todos = todos;
    state.filter = filter;
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.todos.filter(todo => todo.done);
        case Filters.Pending:
            return state.todos.filter(todo => !todo.done);
        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
}

/**
 * Addtodo: addTodo  function
 * @param {String} description
 */
const addTodo = (description) => {
    if (!description) throw new Error('Not Implemented');
    state.todos.push(new Todo(description));
    saveStateToLocalStorage();
}

/**
 * Update Todo:  toggleTodo function
 * @param {String} todoId 
 * return  
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if (todo.id === todoId) {
            todo.done = !todo.done;
        }
        return todo;
    })
    saveStateToLocalStorage();
}

/**
 * Delete Todo: {deleteTodo} function
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => !todo.done);
    saveStateToLocalStorage();


}
/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToLocalStorage();
}

const getCurrentFilter = () => {
    return state.filter;
}
export default {
    initStore,
    loadStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodos,
}