import axios from 'axios'

const URL = 'http://192.168.15.20:3003/api/alunos'

export const changeName = event => ({
    type: 'NAME_CHANGE',
    payload: event.nativeEvent.text
})

export const changeSelecionado = alunoId => ({
    type: 'SELECIONADO_CHANGED',
    payload: alunoId
})

export const search = () => {
    return dispatch => {
        axios.get(URL).then(
            result => {
                dispatch({ type: 'SEARCHED_COMPLETED', payload: result.data })
            }
            
        ).catch(error => {
            console.log(error)
        })
    }
}

export const submit = () => {
    return (dispatch, getState) => {

        const nome = getState().aluno.nome

        axios.post(URL, {nome: nome}).then(
            result => dispatch({ type: 'SUBMITED', payload: ''})
        ).then(resp => dispatch(search()))
    }
}