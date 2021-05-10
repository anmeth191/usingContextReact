import React from 'react'
import { ThemeProvider } from '../contexts/ThemeContext';



class Content extends React.Component{

static contextType = ThemeProvider;

render(){

    const {isDarkTheme , darkTheme , lightTheme } = this.context;
     const theme = isDarkTheme ? darkTheme : lightTheme;
    return(
        <div style={{backgroundColor:theme.background , color:theme.text}}>
            <li><span>Go to Nicaragua</span></li>
            <li><span>Go to Camping</span></li>
            <li><span>Fix the house</span></li>
            </div>
    )
}

}

export default Content;