const INITIAL_STATE = {
    list: [],
    nome: '',
    selecionado: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SEARCHED_COMPLETED':
            return { ...state, list: action.payload }
        case 'NAME_CHANGE':
            return { ...state, nome: action.payload }
        case 'SUBMITED':
            return { ...state, nome: action.payload}
        case 'SELECIONADO_CHANGED':
            return { ...state, selecionado: action.payload}
        default:
            return state
    }
}
