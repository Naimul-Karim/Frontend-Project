import { useEffect, useState , nanoid} from 'react'
import Themebtn from './Components/Themebtn'


import './App.css'
import { TodoProvider } from './Contexts/Context'
import Todoform from './Components/Todoform'
import TodoItem from './Components/Todoitem'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const [todos, setTodos] = useState([])

  const darkMode=()=>{
    setThemeMode("dark")
  }
  const lightMode= ()=>{
    setThemeMode("light")
  }

  useEffect(()=>{
    document.documentElement.classList.remove("light" ,"dark")
    document.documentElement.classList.add(themeMode)
  },[themeMode])

  // todoList

  const AddTodo = (todo)=> {
    setTodos((Prev)=> [{id: Date.now(), ...todo}, ...Prev])
  }
  const DeleteTodo =(id)=>{
    setTodos((prev)=> prev.filter((todo)=>todo.id !== id ))
  }

  const UpdateTodo =(id , todo )=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id == id? todo : prev ))
  }

  const ToggleComplete =(id) =>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id == id? {...prevTodo , complete:  !prevTodo.complete } : prevTodo)
  )
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
      
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))
  }, [todos])
  

  return (
    <TodoProvider value={{themeMode , darkMode, lightMode , todos , AddTodo , DeleteTodo, UpdateTodo , ToggleComplete}}>
     <div className="bg-[url('https://static.vecteezy.com/system/resources/thumbnails/040/168/387/small_2x/ai-generated-huge-snowy-mountain-peak-above-the-clouds-with-blue-sky-landscape-snow-target-goal-ice-photo.jpg')]  w-full h-screen bg-cover bg-center bg-no-repeat absolute inset-0 flex items-center justify-center"
     >

      <div className='bg-white/30 backdrop-blur-sm border border-white/20 p-6 rounded-sm max-w-2xl w-full max-h-200 h-150 text-center'> 
      
      <div className='w-full max-w-3xl rounded-3xl p-3 md:p-5
          bg-white border border-purple-100 shadow-2xl
          dark:bg-[#0d1425] dark:border-slate-700'>
           
           <div>

            {/* header */}
             <div className="flex ">

            <div className="flex  gap-4">

              {/* Logo */}
              <div className="w-14 h-14 rounded-2xl
                bg-gradient-to-br from-purple-500 to-indigo-600
                flex items-center justify-center">

                <span className="text-3xl text-white">
                  ✓
                </span>

              </div>

              <div>
                <h1 className="text-3xl text-black dark:text-white md:text-4xl font-bold flex items-start ">
                  Todo
                </h1>

                <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
                  Small steps, big progress.
                </p>
              </div>

            </div>

            {/* Theme button */}
            <div className='absolute right-13 '>
              <Themebtn  />
            </div>

           </div>
           
          </div>
          
       {/* Form */}
            <div className='mt-3'>
              <Todoform/>
            </div>
            <div className="flex flex-wrap gap-y-3"> 
              <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem key={todo.id} todo={todo} />
                          </div>
                        ))}
                    </div>
            </div>


      </div>

     </div>
     </div>

    
    </TodoProvider>
  )
}

export default App
