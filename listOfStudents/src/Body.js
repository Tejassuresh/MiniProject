import {useEffect, useState} from "react";
// import UserData from "./UserData.js";

const API = "https://jsonplaceholder.typicode.com/users";

// import Table from './Table';
const Body = () => {
    const [users, setUsers] = useState([]);
    const [query,setQuery]=useState("");

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            // console.log(data);
        } catch (e) {
            console.error(e)
        }
    }


    useEffect(() => {
        fetchUsers(API);
    }, [])

    // console.log(users.filter(user=>user.name.toLowerCase().includes("leanne")));

    return ( 
        <div className="Body">
            <div className="search-container">
                    <input 
                        type="text" 
                        placeholder="Search.." 
                        name="search"
                         onChange={(e) => setQuery(e.target.value)}
                    />
                    {/* <button type="submit"><i className="fa fa-search">Submit</i></button> */}
            </div>
            <hr/>
            <div className="table">
            <table>
            <thead>
            <tr>
                <th>SL.no</th>
                <th>Name</th>
                <th>USN</th>
                <th style={{fontWeight:'bold'}}>Result</th>
            </tr>
            </thead>
            <tbody>
            {/* <UserData users={users} query={query}/> */}
            <>
            {users
                .filter((user)=>
                    user.name.toLowerCase().includes(query))
                .map((curUser) => {
                    const {SL_no,name,USN,Result} = curUser;
                    

                    return (
                        <tr key={USN}>
                            <td>{SL_no}</td>
                            <td>{name}</td>
                            <td>{USN}</td>
                            <td>{Result}</td>
                        </tr>
                    )
                })

            }
        </>
            </tbody>
        </table>
        </div>
        </div>
    );
}

export default Body;
