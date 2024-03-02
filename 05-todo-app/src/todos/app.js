import html from './app.html?raw'
import todoStore from '../store/todo.store'
import { renderTodos } from './useCases'

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
}

/**
 * 
 * @param {String} elementId 
 */


export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter())
        renderTodos(ElementIDs.TodoList, todos)
    }


    // cuando la App se llama
    (() => {
        const app = document.createElement('div')
        app.innerHTML = html
        document.querySelector(elementId).append( app )
        displayTodos()
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput)
    const todoListUL = document.querySelector(ElementIDs.TodoList)

    // Listeners
    newDescriptionInput.addEventListener('keyup', (e) => {
        
        if((e.keyCode !== 13) || (e.target.value.trim().length === 0)) return
        
        todoStore.addTodo(e.target.value)
        displayTodos()
        e.target.value = ''
    })

    todoListUL.addEventListener('click', (e) => {
        const elementLI = e.target.closest('[data-id]') //closest método que permite seleccionar al elemento padre más cercano que cumpla con el criterio. En este caso el id
        const elementId = elementLI.getAttribute('data-id') // permite obtener el atributo que cumpla con el parámetro
        todoStore.toogleTodo(elementId) // se aplica el cambio al todo que coincida con el id
        displayTodos()
    })

    todoListUL.addEventListener('click', (e) => {
        const elementLI = e.target.closest('[data-id]') //closest método que permite seleccionar al elemento padre más cercano que cumpla con el criterio. En este caso el id
       
        if(!elementId || !e.target.classList.contains('destroy')) return // si no se encuentra la class destry o el elementId return
             todoStore.deleteTodo(elementLI.getAttribute('data-id')) // eliminamos el todo que coincida con el id
             displayTodos() 

        // const isDestroyElement = e.target.className === 'destroy'
        // const element = e.target.closest('[data-id]')
        // if(!element || !isDestroyElement) return
        //     todoStore.deleteTodo(element.getAttribute('data-id'))
        //     displayTodos() LÓGICA FERNANDO
    })

}
