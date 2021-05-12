/*import React from 'react';
import { createContext } from 'react';


export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component{
   state={
     isDarkTheme:true,
    lightTheme:{
        text:'#222',
        background :'#d8ddf1'
    },
    darkTheme:{
        text:'#fff',
        background:'#5c5c5c'
    }
   };


    render(){
        return(
       
            <ThemeContext.Provider value={{ ...this.state }}>
                {this.props.children}
                </ThemeContext.Provider>
        )
    }

}

export default ThemeContextProvider;
*/

/*
import React from 'react';
import { createContext } from 'react'

export const ThemeProvider = createContext();


class ThemeContextProvider extends React.Component{
state={
    isDarkTheme:true,
    darkTheme:{
        background:'red',
        text:'white'
    },
    lightTheme:{
        background:'yellow',
        text:'black'
    }
}

render(){
return(

    <ThemeProvider.Provider value={{ ...this.state }}>
        {this.props.children}
        </ThemeProvider.Provider>
)
}
}

export default ThemeContextProvider;*/
/*

import React from 'react';
import { createContext } from 'react';

export const ThemeProvider = createContext();

class ThemeContextProvider extends React.Component{

state={
    isDarkTheme:true,
    darkTheme:{
        background:'red',
        text:'while'
    }, 
    lightTheme:{
          background:'gray',
          text:'black'
    }
}

    render()
    {  
         return(
       <div>
           <ThemeProvider.Provider value = {{ ...this.state }}>
               {this.props.children}
               </ThemeProvider.Provider>
           </div>  
)
}
}

export default ThemeContextProvider;
*/
/*
import React from 'react';
import { createContext } from 'react';

export const ThemeProvider = createContext();

class ThemeContextProvider extends React.Component{

    state = {
        isDarkTheme:true,
         darkTheme:{
             background:'blue',
             textColor:'white'
         } , 

         lightTheme:{
             background:'orange',
             textColor:'black'
        }
    }

changeTheme = ()=>{

return this.setState({isDarkTheme : !this.state.isDarkTheme});

}   
render(){
    return( 
 <ThemeProvider.Provider value={{ ...this.state , changeBackground :this.changeTheme } }>
     { this.props.children }
     </ThemeProvider.Provider>
 )//end of the return
}//end of the render
}//end of the class component

export default ThemeContextProvider;*/

import React from 'react';
//import the property to create a context
import { createContext } from 'react'

//create a context provider using the createcontext , in this case is themeprovider
export const ThemeProvider = createContext();
//create the class that contains the state and also send the context
class ThemeProviderContext extends React.Component{

    //create the state that is going to be sent in the context provider 
    state = {
        isDarkTheme:true, //in this case if this is true the background of the container is going to be dark color
         
        darkTheme:{ //set the dummy properties for a dark background
             background: 'blue',
             textColor:'white'
         },
        
         lightTheme:{ // set the properties for a dummy light background
             background:'orangered',
             textColor:'black'
         }
    }
    //this function triggers the state darkTheme to change from dark ti light whena button is clicked
    changeTheme = ()=>{
  
        this.setState({isDarkTheme: !this.state.isDarkTheme})


    }

render(){

    return(
        //Provide the in the value props the state and the function to changeTheme when  button is clicked
        <ThemeProvider.Provider value = {{ ...this.state , changeBackground: this.changeTheme }}>
            { this.props.children } 
            </ThemeProvider.Provider>
    )
}//end of the render
}//end of the class 
//export the main class to wrap the components where  we want to use the context.
export default ThemeProviderContext;