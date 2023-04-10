import { useEffect, useState } from "react"
import UserData from "./UserData";
import Navbar from "./Navbar";

const API = "https://64307b10d4518cfb0e50e555.mockapi.io/workflow"

const home = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setUsers(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchUsers(API);
    },[])

  return (
    <>
    <Navbar/>
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col justify-center items-center">
    <table className="shadow-2xl border-2 border-cyan-200 w-3/4 mt-20 mb-20">
        <thead className="text-white">
            <tr>
                <th className="py-3 bg-cyan-500">Name</th>
                <th className="py-3 bg-cyan-500">Input Type</th>
                <th className="py-3 bg-cyan-500">Created at</th>
            </tr>
        </thead>  
        <UserData users={users}/>
    </table>
    </div>
    </>
  )
}

export default home