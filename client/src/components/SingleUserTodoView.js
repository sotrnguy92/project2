import React, {useEffect, useState} from 'react'
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from "@material-ui/core/Container";
import Chip from '@material-ui/core/Chip';

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

export default function SingleUserView(props) {
    const classes = useStyles();


    const [todoList, setTodoList] = useState([]);
    const [user, setUser] = useState('')

    useEffect(async () => {
        const userId = props.match.params.userId
        const dbTodos = await axios.get(`/api/todos/user/${userId}`, { headers: { authorization: localStorage.getItem('token') }})
        const singleUser = await axios.get(`/api/users/${userId}`, { headers: { authorization: localStorage.getItem('token') }})
        setUser(singleUser.data.username);
        setTodoList([...dbTodos.data]);
    },[]);




    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Chip size="small" label={`User: ${user}`} />
                <List className={classes.root} component="nav" aria-label="secondary mailbox folders">
                    {todoList.map(item => {
                        return(
                            <ListItem
                                key={item.id}
                                data-index={item.id}
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
