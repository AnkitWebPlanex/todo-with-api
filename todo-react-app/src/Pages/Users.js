import React, { useEffect, useState } from 'react'
import UserComp from '../components/UserComp';
import axios from 'axios';
const Users = () => {
    const [users, setUsers] = useState([]);
    const [isFetching, setIsFetching] = useState(true);

    const getUsers = async () => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setTimeout(() => {
            setIsFetching(false);
        }, 1000);
    };

    useEffect(() => {
        let API = 'https://jsonplaceholder.typicode.com/users';
        getUsers(API);
    }, [])
    return (
        <UserComp users={users} isFetching={isFetching} />
    )
}

export default Users
