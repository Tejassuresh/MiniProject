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
            {/* <UserData users={users} query={query}/> */}
            <>
            {users
                .filter((user)=>
                    user.name.toLowerCase().includes(query))
                .map((curUser) => {
                    const {SL_no,name,USN,Pref1,Pref2,Pref3,Pref4,Pref5,Pref6,Pref7,Pref8,Pref9,Pref10} = curUser;
                    

                    return (
                        <tr key={USN}>
                            <td>{SL_no}</td>
                            <td>{name}</td>
                            <td>{USN}</td>
                            <td>{Pref1}</td>
                            <td>{Pref2}</td>
                            <td>{Pref3}</td>
                            <td>{Pref4}</td>
                            <td>{Pref5}</td>
                            <td>{Pref6}</td>
                            <td>{Pref7}</td>
                            <td>{Pref8}</td>
                            <td>{Pref9}</td>
                            <td>{Pref10}</td>
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
