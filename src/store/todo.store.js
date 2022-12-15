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

    ],
    filter: Filters.All,

}

const initStore = () => {
    console.log(state);
    console.log('InitStore');
}

export default {
    initStore,
}