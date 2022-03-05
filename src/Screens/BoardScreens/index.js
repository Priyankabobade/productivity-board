import './style.css';
import Column from '../../Components/Column';
import CreateEditTask from '../../Components/CreateEditTask';
import localStorage from '../../localStorage';

import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState } from 'react';


export default function BoardScreen(props) {
   
    const [isModelopen, setModelOpen]=useState(false);
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription]= useState('');
    const [modalTitle, setmodalTitle]= useState('Create New Task');
    const [buttonTitle, setmodelButtonTitle] = useState('Create Task');
    const [editTaskId, setEditTaskId] = useState('');

    const [tasks, setTasks] = useState(localStorage.getTasks());

    const onClose = ()=>{
        setModelOpen(false),
        setmodalTitle("Create New Task");
        setmodelButtonTitle("Create Task");
        setTaskTitle('');
        setTaskDescription(''); 
    }

    const onTaskTitleChnage = (e)=>{
        //console.log(e.target.value) ;
        setTaskTitle(e.target.value) ;    
       }

    const onTaskDescriptionChnage = (e)=>{
        //console.log(e.target.value) ;
        setTaskDescription(e.target.value) ;    
       }

    const onCreateTaskClick = ()=>{
        const newTask={
            title: taskTitle,
            description :taskDescription,
            status : "TODO",
            id: tasks.length+1
        };

    const tasksCopy =[newTask,... tasks];
        //tasksCopy.push(newTask);
        setTasks(tasksCopy);
        localStorage.setTasks(tasksCopy);
        setModelOpen(false);
        setTaskTitle('');
        setTaskDescription(''); 
    }
    
    const onTaskStatusChange =(taskId, status)=>{
        const tasksCopy = [...tasks];
        const taskUpdated = tasksCopy.find(task =>task.id === taskId);
        taskUpdated.status= status;
        //console.log("taskUpdated",taskUpdated);
        setTasks(tasksCopy);
        localStorage.setTasks(tasksCopy);
    };

    const onEditTaskClicked = (taskId)=>{
        setEditTaskId(taskId);
        setmodalTitle("Edit Task");
        setmodelButtonTitle("Edit Task");
        const editingTask = tasks.find(task=> task.id === taskId);
        setTaskTitle(editingTask.title);
        setTaskDescription(editingTask.description); 
        setModelOpen(true);
    }

    const onDeleteTaskClicked = (taskId)=>{
        //console.log("onDeleteTaskClicked",taskId);
        const tasksCopy = tasks.filter(task => task.id !== taskId);
        setTasks(tasksCopy);
        localStorage.setTasks(tasksCopy);
    }

    const onUpdateTaskClicked = (taskId) =>{
        //console.log("Task updated", taskId);
        const tasksCopy = [...tasks];
        const tasksUpdated = tasksCopy.find(task =>task.id === taskId);
        tasksUpdated.title =taskTitle;
        tasksUpdated.description =taskDescription ;
        setTasks(tasksCopy);
        localStorage.setTasks(tasksCopy);
        onClose();
        }

    return (
        <div className="board-container">
        <CreateEditTask modalTitle={modalTitle} open={isModelopen} handleClose={onClose} taskTitle={taskTitle} 
        taskDescription={taskDescription} 
        onTaskTitleChnage={onTaskTitleChnage}
        onTaskDescriptionChnage={onTaskDescriptionChnage}
        onCreateTaskClick={onCreateTaskClick}
        buttonTitle = {buttonTitle}
        taskId={editTaskId}
        onUpdateTaskClicked={onUpdateTaskClicked}
        
        /> 
            <div className="board-header">
            
                <Typography
                    variant="h4"
                    component="div"
                >
                    {props.boardName}
                </Typography>
                <Button
                    variant="contained"
                    startIcon={< AddCircleIcon />}
                    color="secondary"
                    size="small"
                    onClick={()=>{ setModelOpen(true)}}
                >
                    Task
                </Button>
            </div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }}>
                <Grid item xs={4} sm={4} md={4}>
                    <Column title="ToDo"  tasks={tasks} type="TODO"  onDeleteTaskClicked={onDeleteTaskClicked} onEditTaskClicked={onEditTaskClicked} onTaskStatusChange={onTaskStatusChange} />
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Column title="Doing" tasks={tasks}  type="DOING" onDeleteTaskClicked={onDeleteTaskClicked}  onEditTaskClicked={onEditTaskClicked} onTaskStatusChange={onTaskStatusChange}/>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Column title="Done" tasks={tasks} type="DONE" onDeleteTaskClicked={onDeleteTaskClicked}  onEditTaskClicked={onEditTaskClicked} onTaskStatusChange={onTaskStatusChange}/>
                </Grid>
            </Grid>
        </div>
    )
}