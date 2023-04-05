import React from 'react'

export default function Todocard({todo}) {
  return (
    <div><div class ='col-4 offset-4'>
        <div className="card h-100 mt-2">
            <h4>{todo}</h4>

        </div>
        </div>
      
    </div>
  )
}
