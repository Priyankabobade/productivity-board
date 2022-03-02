import './style.css';
import TaskCard from '../TaskCard';
import Typography from '@mui/material/Typography';

export default function Column(props){
    
    const tasks= props.tasks.filter((task)=> task.status === props.type);
    console.log(tasks);
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
                            description={task.description}
                            onEditTaskClicked={props.onEditTaskClicked}
                        />
            })
        }

        
        </div>
    )
}