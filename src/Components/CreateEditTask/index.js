import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { bottom } from '@popperjs/core';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CreateEditTask(props) {
    const onClickCreate = () => {
        console.log("onclicked");

    };

   
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography
                    variant="h4"
                    component="div"
                    align="center"
                    style={{ marginBottom: "20px" }}
                >
                   {props.modalTitle}
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Task"
                    variant="outlined"
                    style={{ marginBottom: "20px" }}
                    fullWidth
                    value={props.taskTitle}
                    onInput={(e)=>{props.onTaskTitleChnage(e)}}
                    />

                <TextField
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth 
                    value={props.taskDescription}
                    onInput={(e)=>{props.onTaskDescriptionChnage(e)}}
                    />

                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    fullWidth
                    style={{ marginTop: "20px" }}
                    onClick={props.onCreateTaskClick}
                >
                    Create Task
                </Button>
            </Box>
        </Modal>
    )
}