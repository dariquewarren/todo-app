// Set up filters default object
let filters = {
    searchText: '',
    hideCompleted: false
    } 
const getFilters =() =>{
    return filters
} 
// destructure updates object: change code accordingly



const setFilters =(updates)=>{
    const{ searchText, hideCompleted } = updates

    if (typeof searchText === 'string') {
        filters.searchText = searchText
    } if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
    }
}
// Make sure to set up the exports

export { getFilters, setFilters }