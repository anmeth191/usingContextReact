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

export default ThemeContextProvider;