import React, { useState } from 'react'

export  const TodoForm = () => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        console.log(value)
    }

    return  (
        <form className ='TodoForm' onSubmit={handleSubmit}>
            <input 
                value={value}
                type="text" 
                className ='todo-input' 
                placeholder = 'What is the task today?' 
                onChange= {(e) => setValue(e.target.value)}
            />
            <button type='submit' className ='todo-btn'>Add Task</button> 
        </form> 
    );
}