import React from 'react'
import Navbar  from './components/Navbar';
import Content from './components/Content';
import ThemeContextProvider from './contexts/ThemeContext';


class App extends React.Component{
  
render(){
  
return( <div>
 <ThemeContextProvider>
  <Navbar />
  <Content />
  </ThemeContextProvider>
 
</div>
)//end of the main return of the div
}//end of the render
}//end of the class App 

export default App;