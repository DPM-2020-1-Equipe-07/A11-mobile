const INITIAL_STATE = {
    list: [],
    nota: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SEARCHED_COMPLETED':
            return { ...state, list: action.payload }
        case 'NOTA_CHANGE':
            return { ...state, nota: action.payload }
        case 'SUBMITED':
            return { ...state, nota: action.payload }
        default:
            return state
    }
}
