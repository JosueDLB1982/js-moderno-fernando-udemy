 
import { Todo } from '../todos/models/todo.model'

const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}

const state = {
    todos: [
        new Todo('Gema del Alma'),
        new Todo('Gema del Tiempo'),
        new Todo('Gema de la Realidad'),
        new Todo('Gema del Poder'),
        new Todo('Gema del Espacio'),
        new Todo('Gema de la Mente'),
    ],
    filter: Filters.All
}

const initStore = () => {
    loadStore() // al iniciar invocamos la función loadStore y cragamos el state
    console.log('InitStore 🥑')
}

const loadStore = () => {
    if(!localStorage.getItem('state')) return // verificamos si hay contenido en el localStorage

        const { todos = [], filter = Filters.All } = JSON.parse(localStorage.getItem('state')) // desestructuramos del objeto state los todos y el filter
        state.todos   = todos; // asignamos los todos
        state.filter = filter; // asignamos el filter
}

const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state)) // guardo el contenido del objeto state en localStorage. Esta función convierte en string el objeto para que pueda ser leido por el localStorage
}

const getTodos = (filter = Filters.All) => {
    switch(filter) {
        case Filters.All:
            return [...state.todos]
        case(Filters.Completed):
            return state.todos.filter(todo => todo.done)
        case(Filters.Pending):
            return state.pending.filter(todo => todo.done === false)
        default:
            throw new Error(`Option ${filter} is not valid`)
    }
}


/**
 * @param {String} description
 */
const addTodo = (description) => {
    if(!description) throw new Error('Description is required')
    state.todos.push(new Todo(description))

    saveStateToLocalStorage()
}


/**
 * 
 * @param {String} todoId Todo indentifier
 */
const toogleTodo = (todoId) => {
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId) {
            todo.done = !todo.done
        }
        return todo
    })
    saveStateToLocalStorage()
}

const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId)
    saveStateToLocalStorage()
}

const deleteCompleted = () => {
    state.todos = state.todos.filter(todo => todo.done)
    saveStateToLocalStorage()
}


/**
 * 
 * @param {Filters} newFilter debe estar contemplado en las opciones
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter
    saveStateToLocalStorage()
}

const getCurrentFilter = () => {
    return state.filter
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toogleTodo,
}