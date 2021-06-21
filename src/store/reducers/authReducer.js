const initialState = {
    token: null,
    current: null
}

export default function auth(state=initialState, action) {
    switch (action.type) {    
        case 'CURRENT_USER':
            return {...state,
                current: action.user,
            };  

        default:
            return state;
    }
}