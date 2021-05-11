import React from 'react'
import { connect } from 'react-redux';
import { ThemeProvider } from '../contexts/ThemeContext';

class Content extends React.Component{

static contextType = ThemeProvider;

render(){

  const { isDarkTheme , darkTheme , lightTheme , changeBackground } = this.context;
  console.log(changeBackground)
  
  const theme = isDarkTheme ? darkTheme : lightTheme;

  return(
    <div style={{backgroundColor:theme.background , color:theme.textColor}}>
         <ul>
        {this.props.tasks.map( element =>{
          return(
            <li key={element.id}><span>{element.title}</span></li>
          )
        }//end of the auto invoqued function
        )//end of the map
        }
        </ul>

        <button onClick={changeBackground}>Change BackGround </button>
        
      </div>
  )
}
}

const showState = (state) =>{

return{
  tasks: state.task
}

}
export default connect(showState)(Content);