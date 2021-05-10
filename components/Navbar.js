import React from 'react';
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