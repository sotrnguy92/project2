import React, {useEffect, useState} from 'react'
import axios from 'axios';

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

export default function TodoView(props) {
    const classes = useStyles();
    console.log("I have rendered!!!")


    const [todoList, setTodoList] = useState([]);
    const [ todo, setTodo] = useState('');

    useEffect(async () => {
        const dbTodos = await axios.get(`/api/todos/user/${null}`, { headers: { authorization: localStorage.getItem('token') }})
        console.log("I am in useEffect", dbTodos.data)
        console.log('I am in useEffect as well!!', props);
        setTodoList([...dbTodos.data]);
    },[]);

    const handleAddTodo = async (event) => {
        count = count + 1;
        event.preventDefault();

        if (todo) {
            const addedTodo = await axios.post('api/todos/', {todo}, {headers: {authorization: localStorage.getItem('token')}})
            console.log('I am the added Todo from the front end!!!',addedTodo.data);
            const todoId = addedTodo.data.id;
            setTodoList([...todoList, {todo: todo, id: todoId}]);
            setTodo('');
        }
    }

    const handleDelete = (event) => {
        console.log(event.target.innerText);
        const allTodos = todoList
        allTodos.forEach((item) => {
            if (event.target.innerText === item.todo) {
                axios.delete(`api/todos/todo/${item.id}`,{headers: {authorization: localStorage.getItem('token')}})
                setTodoList(allTodos.filter((value, index, allTodos) =>{
                    return value !== item;
                }))
            }
        })
    };



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
                                   await setTodo(event.target.value);
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
                            <ListItem
                                key={item.id}
                                data-index={item.id}
                                onClick={handleDelete}
                                button>
                                <ListItemText id={item.id} primary={item.todo}/>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        </Container>
    );
}
