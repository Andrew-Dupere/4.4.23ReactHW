import React from 'react';


export default function Todoform() {


  return (
    <div className="form-group col-md-4 offset-md-4 text-center">
    <label><b>Todo List</b></label>
    <form action="" id="todoform">
    <div>
      <input className="form-control" type="text" placeholder="Todo" />
      <input type="submit" value="Submit" className="btn btn-success w-100 mt-3"/>
    </div>
    </form>
    </div>
     
  )
}
