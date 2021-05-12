/*import React from 'react';
import  { ThemeProvider }  from '../contexts/ThemeContext';

class NavBar extends React.Component{

   static contextType = ThemeProvider; 


render(){
    
    const { isDarkTheme , lightTheme , darkTheme } = this.context;
    const theme = isDarkTheme ? darkTheme : lightTheme;
return(
    <div style={{backgroundColor: theme.background , color:theme.text , height:'150px'}}>
        <ul>
            <li><button>Home</button></li>
            <li><button>Contact</button></li>
            <li><button>Gallery</button></li>
        </ul>
    </div>
)

}
}

export default NavBar;
*/

import React from 'react'; 
import { ThemeProvider } from '../contexts/ThemeContext'; //import the provider that changes the background
import { LoggedContext } from '../contexts/LoggedUser'; // import the provider that changes the logged context
class NavBar extends React.Component{

    //static contextType = LoggedContext;

render(){
      

return(
    //in this case the two contexts are together the according how is declared in the App component
    //the loggedContent need the consumer properties and receives as parameter the context coming from the provider
    //
   <LoggedContext.Consumer>{(logContext)=>{
    //return is always needed when a context is comsuming    
    return(
      // here is the other provider inside the loggedContext provider 
      //this context provider is the one that changes the background  and receives as 
      //params all the properties in the context
        <ThemeProvider.Consumer>{(themeContext)=>{
           
            /*Once you set your context providers you can destructure the properties 
            coming from the providers and use them as you need them */

            //destructuring from themecontext in order to change dark o light theme
            const { isDarkTheme , darkTheme , lightTheme } = themeContext;

            //destructuring the logContext in order to change status to logged in or logged out 
            const { isLogged , changeLog } = logContext;

            //this variables decides what theme use according is the DarkTheme is true or false
            const theme = isDarkTheme ? darkTheme : lightTheme;
       
            return( 
                //return some JSX to display 
                <div style={{ backgroundColor:theme.background , color:theme.textColor}}>
                    <li> <h1>Hello from navbar </h1> </li> 
                    <span onClick={changeLog}>{ isLogged ? 'Logged in' : 'Logged Out'}</span>
                    </div>
                 )
          }//end of the function of themeProvider 
          /*end of the themeprovder general tag*/
          }
        
        </ThemeProvider.Consumer>
       )//end of the return
   }} 
   </LoggedContext.Consumer> 
    
)
}
}//end of the class Component

export default NavBar;
//export the navbar 