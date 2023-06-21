const UserData = ({users},{query}) => {

    return (
        <>
            {users
                // .filter((user)=>
                //     user.name.toLowerCase().includes(query))
                .map((curUser) => {
                    const {SL_no,name,USN,Pref1,Pref2,Pref3,Pref4,Pref5,Pref6,Pref7,Pref8,Pref9,Pref10} = curUser;
                    

                    return (
                        <tr key={name}>
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
    )
}
export default UserData;