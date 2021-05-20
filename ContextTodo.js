import React , { useState,  createContext } from 'react';

export const todoContext = createContext(); 

const TodoContextProvider = (props) => {

const [texto , setText] = useState([{text:'Learn React' , id:1}, {text:'Learn NodeJs' , id: 2 } , {text:'Learn MongoDb', id:3 }])

return(
<todoContext.Provider value={{ texto }}>
  {props.children}
  </todoContext.Provider>

)
}

export default TodoContextProvider;