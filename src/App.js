

import { useState } from "react";

import './app.css'


function App() {

  const [toDos, setTodos] = useState([])
  const [toDo, setTodo] = useState('')
  const [count,setCount] = useState(0)
  
  

  //delete toDo Item
  const DeleteTodo = (id) => {
    const deletes = [...toDos].filter(toDos => toDos.id !== id)
    setTodos(deletes)

  }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading            ">
        <br />                                        
        <h2> Remember. It's Your Day 💖🤞</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => {setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]) 
         setTodo("")
          }} className="fas fa-plus"></i>
         {console.log(count)}
      </div>
      <div className="todos">
        {toDos.map((obj, index) => {
          return (<div className="todo">
            <div className="left">
              <input onChange={(e) => {
                if(e.target.checked){
                setCount(count+1)
              }else{
                setCount(count-1)
               
              }
                setTodos(toDos.filter(obj2 => {
                  if (obj2.id === obj.id) {
                    obj2.status = e.target.checked
                     
                  }
                  return obj2
                }))
              }} value={obj.status}
              type="checkbox" name="" id="" />

              <p >{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={() => DeleteTodo(obj.id)} className="fas fa-times"></i>
            </div>
          </div>)
        })}
        { count  >= 1 ? <h1>Completed List..</h1> : null}
        {toDos.map((obj) => {

          if (obj.status) {
            return (<h1>{obj.text}</h1>)
          }
          return null
        })}
      </div>
      
    </div>
  );
}

export default App;
