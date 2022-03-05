import './style.css';
import TaskCard from '../TaskCard';
import Typography from '@mui/material/Typography';

export default function Column(props){
   // console.log("props.tasks",props.tasks);
    const tasks= props.tasks.filter((task)=> task.status === props.type);
   // console.log(tasks);
    return(
        <div className="column">
         <Typography 
            variant="h5" 
            component="div" 
            color= "white"
            align ="center"
            gutterBottom
         >
               {props.title}
        </Typography>
        {
            tasks.map((task,index)=>{
                return <TaskCard 
                            key={index} 
                            title={task.title} 
                            taskId={task.id}
                            type={props.type}
                            description={task.description}
                            onTaskStatusChange = {props.onTaskStatusChange}
                            onEditTaskClicked={props.onEditTaskClicked}
                            onDeleteTaskClicked={props.onDeleteTaskClicked} 
                        />
            })
        }

        
        </div>
    )
}