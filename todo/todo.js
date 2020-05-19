import React, { Component } from "react";
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, List, ListItem } from 'native-base';
import { StyleSheet } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { search, markAsDone, markAsPending, remove } from './todoActions'

class Todo extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.search()
    }

    render() {

        const list = this.props.list
    
        return (
            <Container>
                <Header />
                <Content>
                <Form>
                    <Item floatingLabel>
                    <Label>Task Name</Label>
                    <Input />
                    </Item>
                </Form>
                <Button style={styles.button}>
                    <Text>Save</Text>
                </Button>

                    {
                        list.map(todo => {
                            return (
                                <ListItem key={todo._id}>
                                    <Text>{todo.description}</Text>
                                </ListItem>
                            )
                        })
                    }

                </Content>
            </Container>
        );
      }
}

const mapStateToProps = state => ({ list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove, search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Todo)


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