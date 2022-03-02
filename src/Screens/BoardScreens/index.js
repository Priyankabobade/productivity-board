import './style.css';
import Column from '../../Components/Column';
import CreateEditTask from '../../Components/CreateEditTask';

import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useState } from 'react';


export default function BoardScreen(props) {
   
    const [isModelopen, setModelOpen]=useState(false);
    const onClose = ()=>{setModelOpen(false),
    setmodalTitle("Create New Task")}
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription]= useState('');
    const [modalTitle, setmodalTitle]= useState('Create New Task');

    const [tasks, setTasks]=useState(
        [
            {
                id:1,
                title : "Complete Rect Course",
                description : "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                status : "TODO"
            },
            {
                id:2,
                title : "Complete Rect Course",
                description : "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                status : "DOING"
            },
            {
                id:3,
                title : "Complete Rect Course",
                description : "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
                status : "TODO"
            }
        ]
    );

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
            status : "TODO"
        };
        
        const tasksCopy =[newTask,... tasks];
        //tasksCopy.push(newTask);
        setTasks(tasksCopy);
        setModelOpen(false);
        setTaskTitle('');
        setTaskDescription(''); 
    }

    const onEditTaskClicked = (taskId)=>{
        setmodalTitle("Edit Task");
        setModelOpen(true);
    }
    return (
        <div className="board-container">
        <CreateEditTask modalTitle={modalTitle} open={isModelopen} handleClose={onClose} taskTitle={taskTitle} 
        taskDescription={taskDescription} 
        onTaskTitleChnage={onTaskTitleChnage}
        onTaskDescriptionChnage={onTaskDescriptionChnage}
        onCreateTaskClick={onCreateTaskClick}
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
                    <Column title="ToDo"  tasks={tasks} type="TODO" onEditTaskClicked={onEditTaskClicked} />
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Column title="Doing" tasks={tasks}  type="DOING" onEditTaskClicked={onEditTaskClicked}/>
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <Column title="Done" tasks={tasks} type="DONE" onEditTaskClicked={onEditTaskClicked}/>
                </Grid>
            </Grid>
        </div>
    )
}