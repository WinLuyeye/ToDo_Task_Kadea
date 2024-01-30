import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { lists } from "../App";

function NewTask() {
  const [name, setName] = useState('');
  const {newList,setNewList}=useContext(lists);
  const navigate = useNavigate()
  const handleClick = () => {
   navigate(-1);
  } 
  
  const handleChange = (e)=>{
    setName(e.target.value);
  }
  const handleAddTask = ()=>{
    const newTodo = {name:name, description:[]}
    setNewList([newTodo, ...newList]);
    navigate("/");
  }
  return (
    <div className="bg-white pt-2 rounded-sm h-[200px] w-3/4 mt-[100px] ml-[80px]">
        <h1 className="text-green-400 font-bold">Create New Task</h1>
        <form className="py-12">
          <input type="text"  className="border border-green-400 rounded-sm font-bold py-2 px-4" value={name} onChange={handleChange} />
          <button type="button" onClick={handleAddTask} className="bg-green-400 text-white border rounded-sm font-bold py-2 px-4">Create</button>
          <button type="button" className="py-2 px-4" onClick={handleClick}>Cancel</button>
        </form>
    </div>
  )
}
export default NewTask