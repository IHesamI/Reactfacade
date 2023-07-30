import React, { useState, useEffect } from "react";
export default function useUsersManagement({ URL }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetcher = async () => {
            await fetch(URL)
                .then(response => response.json())
                .then(data => setUsers(data))
                .catch(error => console.log(error))
        }
        fetcher();
    }, [

    ])

    function addUser(user) {
        setUsers([
            ...users,
            user
        ])
    }

    function deleteUser(userId) {
        const userIndex = users.findIndex(user => user.id === userId);
        if (userIndex > -1) {
            const newUsers = [...users];
            newUsers.splice(userIndex, 1);
            setUsers(
                newUsers
            );
        }
    }

    return {
        users,
        addUser,
        deleteUser
    }
}