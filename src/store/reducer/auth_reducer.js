const INITIAL_STATE = {
    authError:null
}

export default function(state = INITIAL_STATE,action){
    switch (action.type) {
        case 'login_error':
            console.log('login failed')
            return   {
                ...state,
                authError:'Login Failed'
            }
        case 'login_success':
            console.log('login success')      
            return {
                ...state,
                authError:null
            }
        case 'signout_success':
            console.log('signout success')
            return state
        case 'signup_success':
            console.log('signup success')
            return {
                ...state,
                authError:null
            }
        case 'signup_error':
            console.log('signup failed')
            console.log(action)
            return {
                ...state,
                authError:action.err.message
            }
        default:
            return state
    }
    
}