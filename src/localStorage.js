const init = ()=>{
    localStorage.setItem('tasks', JSON.stringify([]));
}

const setTasks = (tasks)=>{
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

const getTasks = () =>{
    if(localStorage.getItem('tasks'))
    return JSON.parse(localStorage.getItem('tasks'));
    else 
    return []
}

export default{
    init,
    setTasks  ,
    getTasks 
}
