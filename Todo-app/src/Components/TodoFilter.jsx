import React, { useState } from 'react'

function TodoFilter({filter , setFilter}) {
    
  return (
    <div className="flex gap-3 mb-5">

        <button 
        onClick={()=>setFilter("All")}
        className={`px-4 py-2 rounded-lg border transition
            ${
              filter === "All"
                ? "bg-gray-600 text-white border-gray-600"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700"
            }
          `}
        >
            All
        </button>

        <button
        onClick={()=>setFilter("Completed")}
        className={`px-4 py-2 rounded-lg border transition
            ${
            filter === "Completed"
            ?  "bg-gray-600 text-white border-gray-600"
            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 dark:hover:bg-gray-700"
        }
             `}

        >Completed</button>

        <button
        onClick={()=>setFilter('Active')}
        className={` px-4 py-2 rounded-lg border transition
            ${ 
            filter ===  "Active"
             ? "bg-gray-600 text-white border-gray-600"

             : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300  dark:border-gray-700 dark:hover:bg-gray-700"
 
            }
            
            `} 
        
        >Active</button>




    </div>
  )
}

export default TodoFilter