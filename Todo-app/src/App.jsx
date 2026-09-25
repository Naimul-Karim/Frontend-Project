import { useEffect, useState , nanoid} from 'react'
import Themebtn from './Components/Themebtn'


import './App.css'
import { TodoProvider } from './Contexts/Context'
import Todoform from './Components/Todoform'
import TodoItem from './Components/Todoitem'
import TodoFilter from './Components/TodoFilter'
import PrograssBar from './Components/PrograssBar'
function App() {
  const [themeMode, setThemeMode] = useState('light')
  const [todos, setTodos] = useState([])
  const[filter , setFilter] = useState("All")

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
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id == id? todo : prevTodo ))
  }

  const ToggleComplete =(id) =>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id == id? {...prevTodo , completed:  !prevTodo.completed } : prevTodo)
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
  
  // TOdo filter

  

    const filteredTodos = todos.filter((todo)=>{
        if (filter === 'Completed') {
            return todo.completed
            
        }
        if (filter === 'Active') {
            return !todo.completed
            
        }
        return true
    })

  return (
    <TodoProvider value={{themeMode , darkMode, lightMode , todos , AddTodo , DeleteTodo, UpdateTodo , ToggleComplete}}>
     <div className="bg-[url('https://static.vecteezy.com/system/resources/thumbnails/040/168/387/small_2x/ai-generated-huge-snowy-mountain-peak-above-the-clouds-with-blue-sky-landscape-snow-target-goal-ice-photo.jpg')] 
      dark:bg-[url('https://4kwallpapers.com/images/walls/thumbs_3t/21130.jpg')]
      w-full h-screen bg-cover bg-center bg-no-repeat absolute inset-0 flex items-center justify-center"
     >

      <div className='bg-white/30 backdrop-blur-sm border border-white/20 p-6 rounded-4xl max-w-2xl w-full max-h-full h-180 text-center'> 
      
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
          <div className='w-full'>
            <TodoFilter
            filter={filter}
            setFilter={setFilter}
            />
          </div>

            <div className="h-[300px] overflow-y-auto space-y-3 pr-2">
             {filteredTodos.map((todo) => (
             <div key={todo.id} className="w-full">
              <TodoItem todo={todo} />
           </div>
          ))}
        </div>
            <div className=' flex max-w-full '>
              <PrograssBar className='max-w-1/3' todos={todos} />
              <div className='text-gray-400 mt-5 ml-5 px-3' >A Productive day leads to a better tommorow</div>
            </div>


      </div>

     </div>
     </div>

    
    </TodoProvider>
  )
}

export default App
