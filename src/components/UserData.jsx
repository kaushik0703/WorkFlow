import { useNavigate } from "react-router-dom";

const UserData = ({users}) => {

  const navigate = useNavigate();
  
  return (
    <>
    {
        users.map((curr, index) => {
            const {createdAt, name, input_type} = curr;

            return (
                <tbody className="text-cyan-900 text-center" key={name}>
                <tr className={`${index%2===0?"bg-white":"bg-gray-200"} hover:scale-105 cursor-pointer duration-300`}
                                onClick={()=> navigate(`/workflow/${name}`)}>
                    <td className="py-3 px-6">{name}</td>
                    <td className="py-3 px-6">{input_type}</td>
                    <td className="py-3 px-6">{new Date(createdAt).toUTCString()}</td>
                </tr>
                </tbody>
            )
        })
    }
    </>
  )
}

export default UserData;