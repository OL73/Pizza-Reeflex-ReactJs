import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Imports Routes
import NotFound from './components/NotFound'
import NewOrder from './components/NewOrder'

// Imports Store
import { createStore } from 'redux'
import rootReducer from './reducer'
import { Provider } from 'react-redux'

// Routes
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route path="/nouvelle-commande" component={NewOrder}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

// Store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
