import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Container from "@material-ui/core/Container";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


export const UserListView = () => {

    const classes = useStyles();
    const [ allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users', { headers: { authorization: localStorage.getItem('token') }})
            .then(res => {
                const users = res.data;
                setAllUsers([...allUsers].concat(users));
            });
    },[])


    console.log("I am the users array!!!!", allUsers);

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <List component="nav" className={classes.root} aria-label="contacts">
                    <h3>All Users</h3>
                    {
                        allUsers.map(user => {
                            return (
                                <ListItem key={user.id} component={Link} to={`/users/user/${user.id}`} button>
                                    <ListItemText primary={user.username}/>
                                </ListItem>
                            );
                        })
                    }
                </List>
            </div>
        </Container>

    );
};
