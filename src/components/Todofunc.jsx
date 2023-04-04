import React, { useState } from 'react'
import Todocard from './Todocard'
import Todoform from './Todoform'




export default function Todofunc() {
    const [todos, setTodos] = useState([])

    function handler(event){
        event.preventDefault();
        let newToDo = event.target.task.value;
        setTodos([...todos, newToDo])
        event.target.task.value = '';
    }

  return (
    <div>
       
        <Todoform handler={handler}/>
        <div>
            {todos.map((todo, idx) => <Todocard todo = {todo} key={idx}/>)}


        </div>

      
    </div>
  )
}
