import React from 'react'
import Navbar  from './components/Navbar';
import Content from './components/Content';
import ThemeProviderContext from './contexts/ThemeContext';
import LoggedContextProvider from './contexts/LoggedUser';


class App extends React.Component{
  
render(){
  
return( <div>
  <LoggedContextProvider> {/*this are nested context it doesnt matter the order of the contexts as long they 
  wrap the components 
  you want*/}
  <ThemeProviderContext>
  <Navbar />
  <Content />
  </ThemeProviderContext>
  </LoggedContextProvider>
</div>
)//end of the main return of the div
}//end of the render
}//end of the class App 

export default App;