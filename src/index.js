// Set up index.html to load the bundle
// Make sure to load uuid via an npm module when necessary
const { uuid } = require('uuidv4')
import { renderTodos, generateTodoDOM, generateSummaryDOM } from './views'
import { saveTodos, getTodos, createTodo, removeTodo, toggleTodo, loadTodos } from './todos'
import { getFilters, setFilters } from './filters'



renderTodos()


// figure out how the checkboxes appear when the todo is created
// note that whenever any checkbox next to a todo item is clicked, ittoggles the first zzzzzzzzzzzzzzzzzzzzzzzzz


 

document.querySelector('#search-text').addEventListener('input', (e) => {
    
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})



// submit value from form to aray
document.querySelector('#todoForm').addEventListener('submit', (e) => {
   
    var text = e.target.elements.newTodo.value.trim()
    e.preventDefault()
   
    if (text.length > 0) {
      createTodo(text)
       renderTodos()
   
       e.target.elements.newTodo.value = '' 
    }
    
        
   }) 
    
    // determines if checkbox is checked then calls the rendertodo function
    document.querySelector("#hidecompleted").addEventListener('change',(e) => {
        
        setFilters({
            hideCompleted: e.target.checked
        })
        
        renderTodos()
        
    
    })
// Bonus: Add a watcher for local storage


