import React, { Component } from 'react'
import { Container, Content, Form, Item, Label, Input, Button, Text, List, ListItem } from 'native-base'
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { search, changeName, submit, changeSelecionado } from './alunoActions'
import { Actions } from 'react-native-router-flux';

class Aluno extends Component {

    componentDidMount() {
        this.props.search()
    }

    render() {

        const list = this.props.list || []

        const { changeName, submit, nome, changeSelecionado } = this.props

        return(
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nome Aluno</Label>
                            <Input onChange={e => changeName(e)} value={nome}/>
                        </Item>
                        <Button style={styles.button} onPress={submit}>
                            <Text>Cadastrar</Text>
                        </Button>
                    </Form>
                    <List>
                        {
                            list.map(aluno => {
                                return (
                                <ListItem key={aluno._id} button onPress={() => this.goToNota(aluno._id)}>
                                    <Text>{aluno.nome}</Text>
                                </ListItem>
                                )
                            })
                        }
                    </List>
                </Content>
            </Container>
        )
    }

    goToNota(alunoId) {
        const { changeSelecionado } = this.props
        changeSelecionado(alunoId)
        Actions.nota()
    }

}

const mapStateToProps = state => ({
    list: state.aluno.list,
    nome: state.aluno.nome,
    selecionado: state.aluno.selecionado
})

const mapDispatchToProps = dispatch => bindActionCreators({ search, changeName, submit, changeSelecionado }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Aluno)

const styles = StyleSheet.create({
    button: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:10,
      marginLeft:7,
      marginRight:7
    },
}); 