import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { lists } from "../App";

function List() {

 const {taskList} = useContext(lists);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/newtask")
  }  

  // const sortLists = taskList.sort(function(a, b) {
  //   return a.name > b.name;
  // });
  // console.log(sortLists);
  return (
    <main className="flex w-full bg-white h-[90vh]">
        <aside className="bg-white w-1/3 py-[20px] flex justify-between flex-col">
            <h2>Tasks</h2>
            <div>
              {taskList?.length && taskList.map((list,id)=><p key={id}>{list.name}</p>)}
            </div>
            <div>
               <button onClick={handleClick} className="bg-green-400 py-4 px-6 rounded-lg text-white">Create New Task</button>
            </div>
            
        </aside>
        <section className="bg-green-200 w-2/3 py-[20px] ">
            <h2>Description</h2>
        </section>
    </main>
  )
}
export default List