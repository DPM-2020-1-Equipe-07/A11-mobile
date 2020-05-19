import React, { Component } from 'react'
import { Container, Content, Form, Item, Label, Input, Button, Text, List, ListItem } from 'native-base'
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { search, changeNota, submit } from './notaActions'

class Nota extends Component {

    componentDidMount() {
        this.props.search()
    }

    render() {

        const list = this.props.list || []

        const { changeNota, submit, nota } = this.props

        return(
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nota</Label>
                            <Input onChange={e => changeNota(e)} value={nota}/>
                        </Item>
                        <Button style={styles.button} onPress={submit}>
                            <Text>Cadastrar</Text>
                        </Button>
                    </Form>
                    <List>
                        {
                            list.map(nota => {
                                return (
                                <ListItem key={nota._id}>
                                    <Text>{nota.nota}</Text>
                                </ListItem>
                                )
                            })
                        }
                    </List>
                </Content>
            </Container>
        )
    }

}

const mapStateToProps = state => ({
    list: state.nota.list,
    nome: state.nota.nota
})

const mapDispatchToProps = dispatch => bindActionCreators({ search, changeNota, submit }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Nota)

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