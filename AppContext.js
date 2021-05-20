import React , { useContext } from 'react';
import { todoContext }  from './ContextTodo';


const AppContext = ()=>{

const { texto } = useContext(todoContext);


return(
    <div>{
        texto.map(element =>{
            return(
                <li key={element.id}>{element.text}</li>
            )
        })
        }</div>
)//end of the return
}//end of the AppContext


export default AppContext;