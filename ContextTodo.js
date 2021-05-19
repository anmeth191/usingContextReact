import React , { useState , createContext } from 'react';

export const todoContextCreated = createContext();

const ContextTodoProvider = ({ children })=>{

  const [ todos, setState ] = useState([
    {text:'pay Bills' , id:1 }
    ,{text:'Do your Homework',id:2}
    ,{text:'Feed the cat' , id:3}
  ]);

  

  return(
    
      <todoContextCreated.Provider value={{ todos }}>
          { children }
          </todoContextCreated.Provider>
  )

}

export default ContextTodoProvider;