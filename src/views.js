import { getFilters, setFilters } from './filters'
import { getTodos, toggleTodo, removeTodo } from './todos'
let todos = []
// renderTodos
// Arguments: none
// Return value: none

const renderTodos = () => {
    const todoEl = document.querySelector('#todos') 
   const filters = getFilters()
   
    const filteredTodos = getTodos().filter((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch
    })
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed)

    todoEl.innerHTML = ''
    todoEl.appendChild(generateSummaryDOM(incompleteTodos))

    if (filteredTodos.length > 0) {
        filteredTodos.forEach((todo) => {
            todoEl.appendChild(generateTodoDOM(todo))
        })
    } else {
        const messageEl = document.createElement('p')
        messageEl.classList.add('empty-message')
        messageEl.textContent = 'There are no to-dos to show'
        todoEl.appendChild(messageEl)
    }
}
// generateTodoDOM
// Arguments: todo
// Return value: the todo element
 
const generateTodoDOM = (todo) => {
    
    const todoEl = document.createElement('label')  
    const containerEl = document.createElement('div')
    const checkbox =document.createElement('input') 
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')


    //checkbox if data shows todo is completed
    
// setup todo checkbox
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = todo.completed
    containerEl.appendChild(checkbox)
    checkbox.addEventListener('change', (e) =>{
toggleTodo(id)

renderTodos()
})

// setup the todo text
    todoText.textContent = todo.text
    containerEl.appendChild(todoText)

// setup the container
todoEl.classList.add('list-item')
containerEl.classList.add('list-item__container')
todoEl.appendChild(containerEl)

// setup the remove button
removeButton.textContent = 'REMOVE'
removeButton.classList.add('button', 'button--text')
todoEl.appendChild(removeButton)
removeButton.addEventListener('click', (todo) => {
    removeTodo(todo.id) 
    
    renderTodos() 
    
    
})

return todoEl

 
    
 }
// generateSummaryDOM
// Arguments: incompletedTodos
// Return value: the summary element

const generateSummaryDOM = function(incompleteTodos) {
        
    const summary = document.createElement('p')
    summary.classList.add('list-title')

    if (incompleteTodos.length === 1) {
        summary.textContent = `You have ${incompleteTodos.length} todo left to complete`
        
        
        } else if (incompleteTodos.length > 1){
        
        summary.textContent = `You have ${incompleteTodos.length} todos left to complete`
        
        } else {

        }


        return summary
}
// Make sure to set up the exports
export { generateTodoDOM, renderTodos, generateSummaryDOM }