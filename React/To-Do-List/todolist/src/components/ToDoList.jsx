import react from "react";
import {useState} from "react";

const ToDoList=()=>{
    const [task,setTask]=useState("");
    const [taskArray,setTaskArray]=useState([]);

    const handleTextChange=(e)=>{
        setTask(e.target.value);
    };

    const handleClick=()=>{
        setTaskArray([...taskArray,{task:task,id:Date.now()}]);
        setTask("");
    }

    const handleDelete=(id)=>{
        let filteredTask=taskArray.filter((taskObj)=>taskObj.id!==id);
        setTaskArray(filteredTask);
    }

    return(
        <div>
            <div>
                <input onChange={handleTextChange} type="text" value={task} />
                <button onClick={handleClick}>Add</button>
            </div>
            {taskArray.map((taskObj)=>
                 (
                <div key={taskObj.id}>
                    <p>{taskObj.task}</p>
                    <button onClick={()=>{                             //dont call handleDelete Directly (reasons unknown)
                        handleDelete(taskObj.id);                       //(i know now) if "handleDelete(taskObj.id);"then react will IMMIDATELY CALL THE FUNCTION DURING RENDERING NOT WHEN YOU CLICK thats why use arrao function
                    }}>Delete</button>                           
                </div>
            ))}
        </div>
    );
}

export default ToDoList;