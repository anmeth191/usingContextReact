import React, { useState } from 'react';


const AddTodo = ({ addTask })=>{

    const [task , addNewTask] = useState('')
    const handleSubmit = (event)=>{

        event.preventDefault();
         addTask(task) 
       
    }

    const handleChange = (event)=>{
     addNewTask(event.target.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'  onChange={handleChange} id='todoInput'/>
                <button type="submit">Add Todo</button>
                </form>
            </div>
    )


}

export default AddTodo;