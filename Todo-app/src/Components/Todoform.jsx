import React, { useState } from 'react'
import { useTodo } from '../Contexts/Context'

function Todoform() {
const [todo , setTodo] = useState("")
const {AddTodo} = useTodo()

 const add = (e)=>{
 e.preventDefault()

 if(!todo) return
 AddTodo({todo , complete : false})
 setTodo("")
 } 


    return (
        <form className="flex gap-3 mb-7 "
        onSubmit={add}>

            <input
              type="text"
              placeholder="What do you want to do?"
              className="flex-1 min-w-0 rounded-xl px-5 py-4
                outline-none border border-slate-200 text-black
                bg-white
                placeholder:text-slate-400

                focus:border-purple-500

                dark:bg-[#151e31]
                dark:border-slate-700
                dark:text-white
                dark:placeholder:text-slate-500
                dark:focus:border-purple-500
                transition ease-in-out
                "
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />

            <button
              type="submit"
              className="px-6 rounded-xl
                bg-gradient-to-r from-purple-500 to-indigo-600
                text-white font-semibold
                hover:scale-[1.02] transition ease-in-out" 
            >
              <span className="md:hidden text-2xl">
                +
              </span>

              <span className="hidden md:block">
                + Add Task
              </span>
            </button>

          </form>
        
    )
}

export default Todoform
