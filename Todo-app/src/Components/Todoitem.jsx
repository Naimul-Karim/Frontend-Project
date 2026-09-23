import React, { useState } from 'react'
import {useTodo } from '../Contexts/Context'

function Todoitem({todo}) {
  const [isTodoEditable , setisTodoEditable] = useState(false)
  const[todoMsg , setTodoMsg] = useState(todo.todo)
  const{UpdateTodo , DeleteTodo , ToggleComplete} = useTodo()


   const EditTodo =()=>{
    UpdateTodo(todo.id , {...todo , todo: todoMsg  })
   }

    const ToggleCompleted = (id)=>{
      ToggleComplete(todo.id)
    }
    
  return (
    <div className="space-y-3">
      <div className={`flex border border-black/10 dark:border-white/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black dark:text-white 
        ${ 
         todo.completed 
         ? "bg-[#c6e9a7] dark:bg-[#3b5c32]" 
         : "bg-[#ccbed7] dark:bg-[#4a3f52]" }`}>

                <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={ToggleCompleted}
            />

            
<input
    type="text"
    className={`border outline-none w-full bg-transparent rounded-lg
        ${isTodoEditable
            ? "border-black/10 dark:border-white/20 px-2"
            : "border-transparent"
        }
        text-black dark:text-white
        ${todo.completed ? "line-through" : ""}
    `}
    value={todoMsg}
    onChange={(e) => setTodoMsg(e.target.value)}
    readOnly={!isTodoEditable}
/>

<button
    className="inline-flex w-8 h-8 rounded-lg text-sm
    border border-black/10 dark:border-white/20
    justify-center items-center
    bg-gray-50 dark:bg-gray-800
    hover:bg-gray-100 dark:hover:bg-gray-700
    text-black dark:text-white
    shrink-0 disabled:opacity-50"
    onClick={() => {
        if (todo.completed) return;

        if (isTodoEditable) {
            EditTodo();
        } else setisTodoEditable((prev) => !prev);
    }}
    disabled={todo.completed}
>
  {isTodoEditable ? "✔️" : "✏️"}
            </button>

            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => DeleteTodo(todo.id)}
            >
                ❌
            </button>





      </div>
      </div>
  )
}

export default Todoitem