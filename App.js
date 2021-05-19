//import { useState } from 'react';
import React , {useContext} from 'react';
import AddTodo from './AddTodo';
import todoContextCreated from './ContextTodo';

//import ContextTodoProvider from './ContextTodo';

const App = ()=>{


const context = useContext(todoContextCreated);
console.log(context)  
 /*const [todos , setTodos] = useState([
    {
      text:'pay Bills' , id:1
    },{
      text:'Do your Homework' , id:2
    },{
      text:'Feed the cat' , id:3
    }
  ])
*/
  
const addTask = (textProp)=>{

  //setTodos([...todos , {text:textProp , id:4}])
}


return(
  <div>
     <ul>
       {
       /*  todos.map( element =>{
           return(
             <li key={element.id}>{element.text}</li>
           )
         })*/
       }
    </ul>  
   <AddTodo addTask={ addTask } />
    </div>
)
}

export default App;