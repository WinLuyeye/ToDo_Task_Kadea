import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { lists } from "../App";
import { useForm } from "react-hook-form";
import axios from "axios";

function NewTask() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { taskList, handleTasks } = useContext(lists);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  const handleAddTask = ({ title }) => {
    const newTodo = { title, completed: false, userId : 1 };
    // handleTasks([newTodo, ...taskList]);
    axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
         .then((response) => console.log(response)) 
    navigate("/");
  };
  return (
    <div className="bg-white pt-2 rounded-sm h-[200px] w-3/4 mt-[100px] ml-[80px]">
      <h1 className="text-green-400 font-bold">Create New Task</h1>
      <form
        onSubmit={handleSubmit((data) => handleAddTask(data))}
        className="py-12"
      >
        <input
          type="text"
          {...register("title", {required: true, minLength: 5})}
          className="border border-green-400 rounded-sm font-bold py-2 px-4"
        />
        {errors.title && <p className="text-red-700">Ce champ est requis, ou doit avoir au minimum 5 caractères</p>}
        <button
          type="submit"
          className="bg-green-400 text-white border rounded-sm font-bold py-2 px-4"
        
        >Create</button>

        <button type="button" className="py-2 px-4" onClick={handleClick}>
          Cancel
        </button>
      </form>
    </div>
  );
}
export default NewTask;
