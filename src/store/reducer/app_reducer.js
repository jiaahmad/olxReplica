const INITIAL_STATE = {

}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'create_add':
            console.log("project created",action.add)
            return state
        case 'create_add_error':
            console.log("error=>",action.err)
            return state
        default:
            return state
             
            
           
    }
   
}