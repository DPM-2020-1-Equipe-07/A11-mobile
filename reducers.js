import { combineReducers } from 'redux'
import alunoReducer from './aluno/alunoReducer'
import notaReducer from './nota/notaReducer'

const rootReducer = combineReducers({
    aluno: alunoReducer,
    nota: notaReducer
})

export default rootReducer