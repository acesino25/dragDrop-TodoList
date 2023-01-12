import React, { useEffect } from 'react'
import List from './components/List'
import { useState } from 'react'
import data from './data/todos'

const App = () => {

  // STATES

  const [todo, setTodo] = useState(data)

  const todoSet = (arg) =>{
    setTodo(arg);
  }

  // EFFECTS

  useEffect(()=>{
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo])


  return (
    
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', flexDirection: 'column', overflow: 'hidden'}}>

      <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column', overflow: 'hidden'}}>
        <h1 style={{fontSize: '48px', marginBottom: 0, width: 500, display: 'flex', justifyContent: 'center'}}>Hey there!</h1>
        <h2 style={{fontSize: '28px', marginTop: 1 + 'rem'}}>This is a list</h2>

        <List todo={todo} todoSet={todoSet}></List>
      </div>


    </div>
  )
}

export default App
