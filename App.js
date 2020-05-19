import React from 'react';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'
import { Router, Scene } from 'react-native-router-flux'

import reducers from './reducers'
import Aluno from './aluno/aluno'
import Nota from './nota/nota'

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)

export default function App() {

  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene
            key="aluno"
            component={Aluno}
            title="Alunos"
            initial
          />

          <Scene
            key="nota"
            component={Nota}
            title="Notas"
          />
        </Scene>
      </Router>
    </Provider>
  )
  
}


