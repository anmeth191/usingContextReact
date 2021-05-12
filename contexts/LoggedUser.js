import React from 'react'; 
import { createContext } from 'react'; //import the createContext Property that creates a context
//export the context created in this case is LoggedContext
export const LoggedContext = createContext();


class LoggedContextProvider extends React.Component{
//create a state that is going to be passed in the context provider
state = { 
    isLogged:true
}

//this is a function that changes the state 
changeLogged = ()=>{
    return this.setState({isLogged : !this.state.isLogged})
}
render(){
return(
      /*in this libe the context created provides the state in the value , also sends the function both 
      are inside of an object inside property value*/ 
    <LoggedContext.Provider value={{ ...this.state , changeLog:this.changeLogged }}>
        { this.props.children /*then receives all the props from the childrens */ } 
        </LoggedContext.Provider>
)//end of the return
}//end of the render
}//end of the class LoggedContextProvider
//export the main class to be used in the app component
export default LoggedContextProvider;