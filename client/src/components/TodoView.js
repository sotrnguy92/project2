import React, {useState} from 'react'
import { reduxForm, Field } from 'redux-form';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        // maxWidth: 360,
        // backgroundColor: theme.palette.background.paper,
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

let count = 2;

export default function TodoView() {
    const classes = useStyles();
    console.log("I have rendered!!!")


    const [todoList, setTodoList] = useState([]);
    const [ todo, setTodo] = useState('');

    const handleAddTodo = (event) => {
        count = count + 1;
        event.preventDefault();

        if (todo){
            setTodoList([...todoList, {todo: todo, id: count}]);
            setTodo('');
        }

    }



    console.log(todoList);

    return (
        <Container component="main" maxWidth="xs">
            <Snackbar
                anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                open={!todo ? true: false}
                message={<span id = 'message-id'>please input a todo</span>}
            />
            <div className={classes.paper}>
                <form
                    onSubmit={handleAddTodo}
                    className={classes.root}
                    noValidate
                    autoComplete="off">
                    <TextField className={classes.root}
                               id="outlined-basic"
                               value={todo}
                               name = "todo"
                               label="Todo"
                               variant="outlined"
                               onChange={async (event) => {
                                   await setTodo(event.target.value)
                                   console.log(todo);
                               }}
                    />
                    <Button
                        className={classes.root}
                        type={'submit'}
                        variant={'contained'}
                        color={"primary"}
                    > Add Todo </Button>
                </form>
                <List className={classes.root} component="nav" aria-label="secondary mailbox folders">
                    {todoList.map(item => {
                        return(
                            <ListItem key={item.id} button>
                                <ListItemText  primary={item.todo}/>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        </Container>
    );
}
