// import 'config/reactotronConfig'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { App } from 'components/app'
import 'babel-polyfill'
import configureStore from './store/configureStore'

const store = configureStore()

const root = document.getElementById('root')

const renderApp = () => (
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppContainer>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/app', () => {
    require('components/app') // eslint-disable-line global-require

    render(renderApp(), root)
  })
}
