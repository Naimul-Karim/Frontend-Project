import React, { createContext, useContext } from 'react'


export const TodoContext = createContext({
   
    themeMode : "light",
    darkMode : ()=>{},
    lightMode: ()=>{},

     Todo: [{
        id: 1,
        todo : " HEllO",
        complete : false
    }],
    AddTodo: (todo)=>{},
    DeleteTodo: (id)=>{},
    UpdateTodo: (id ,todo)=>{},
    ToggleComplete: (id)=>{}

})

export const useTodo= ()=>{
 return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider


 

