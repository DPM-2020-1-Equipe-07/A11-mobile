import axios from 'axios'

const URL = 'http://192.168.15.20:3003/api/notas'

export const changeNota = event => ({
    type: 'NOTA_CHANGE',
    payload: event.nativeEvent.text
})

export const search = () => {
    return (dispatch, getState) => {

        const aluno = getState().aluno.selecionado

        axios.get(`http://192.168.15.20:3003/notas/aluno/${aluno}`).then(
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

        const nota = getState().nota.nota
        const aluno = getState().aluno.selecionado

        axios.post(URL, {nota: nota, aluno_id: aluno}).then(
            result => dispatch({ type: 'SUBMITED', payload: ''})
        ).then(resp => dispatch(search()))
    }
}