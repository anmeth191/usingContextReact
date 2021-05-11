const initialValue = {
    task: [
      {   id: 1,
          title:'Grocery Shopping',
          location:'Giant Store'
      }    ,
      {   id:2,
          title:'Practice Guitar',
          location:'At home'

      },
      {   id:3,
        title:'Listen Gojira',
        location:'Every day'

    }
    ]
}



const rootReducer = ( state = initialValue , action )=>{
    return state;
}

export default rootReducer;