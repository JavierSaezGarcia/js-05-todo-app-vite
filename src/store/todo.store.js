import { Todo } from "../todos/models/todo.model";
/**
 * Filters esta en mayusculas porque es una enumeracion
 * 
*/
const Filters = {
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
    console.log(state);
    console.log('InitStore');
}



const loadStore = () => {
    throw new Error('Not Implemented');
}

const getTodos = ( filter = Filters.All ) => {
    switch( filter ) {
        case Filters.All:
            return [...state.todos];
        case Filters.Completed:
            return state.filter( todo => todo.done );
        case Filters.Pending:
            return state.filter( todo => !todo.done);
        default:
            throw new Error(`Option ${ filter } is not valid`);
    }
}

/**
 * Addtodo: addTodo  function
 * @param {String} description
 */
const addTodo = ( description ) => {
    if( !description ) throw new Error('Not Implemented');
    state.todos.push( new Todo( description ) );
}

/**
 * Update Todo:  toggleTodo function
 * @param {String} todoId 
 * return  
 */
const toggleTodo = (todoId) => {
    state.todos = state.todos.map( todo => {
       if (todo.id === todoId ){
        todo.done = !todo.done;
       }
       return todo;
    })
}

/**
 * Delete Todo: {deleteTodo} function
 * @param {String} todoId 
 */
const deleteTodo = (todoId) => {
    state.todos = state.filter( todo => todo.id !== todoId );
}

const deleteComleted = () => {
    state.todos = state.filter( todo => todo.done );
}
 /**
  * 
  * @param {Filters} newFilter 
  */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
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
    deleteComleted,
    setFilter,
    getCurrentFilter,
    getTodos,
}