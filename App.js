//import { useState } from 'react';
import React from 'react';
import AppContext from './AppContext';
import TodoContextProvider from './ContextTodo';
 
const App = ()=>{

return(
  <div>
 <TodoContextProvider>
 <AppContext />
</TodoContextProvider>
  </div>
  )//end of the return
}//end of the App

export default App;