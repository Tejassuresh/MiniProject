import {useEffect, useState} from "react";
import UserData from "./UserData.js";

const API = "https://jsonplaceholder.typicode.com/users";

const Table = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])
    return <>
        <table>
            <thead>
            <tr>
                <th>SL.no</th>
                <th>Name</th>
                <th>USN</th>
                <th>Pref 1</th>
                <th>Pref 2</th>
                <th>Pref 3</th>
                <th>Pref 4</th>
                <th>Pref 5</th>
                <th>Pref 6</th>
                <th>Pref 7</th>
                <th>Pref 8</th>
                <th>Pref 9</th>
                <th>Pref 10</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
    </>
}

export default Table;