import React, { useState } from 'react'
import Todocard from '../components/Todocard'






export default function Todofunc() {
    const [todos, setTodos] = useState([]);

    const [newToDo, setNewToDo] = useState([]);

    function handleSubmit(event){
        event.preventDefault();
        if (newToDo !== '') {
            setTodos([...todos, newToDo]);
            setNewToDo('');
        }
    }

  return (
    <div>
    <div className="form-group col-md-4 offset-md-4 text-center">
      <label><b>Todo List</b></label>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-control"
            type="text"
            placeholder="Todo"
            value={newToDo}
            onChange={(event) => setNewToDo(event.target.value)}
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-success w-100 mt-3"
          />
        </div>
      </form>
    </div>
    <div>
      {todos.map((todo, idx) => (
        <Todocard todo={todo} key={idx} />
      ))}
    </div>
  </div>
  )
}
