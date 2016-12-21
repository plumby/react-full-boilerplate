import React from 'react'
import { Match } from 'react-router'
import { HomePage, RandomNumbersPage } from 'components/pages'
import { Header } from 'components/organisms'

const App = () => {
  return (
    <div>
      <Header />
      <Match exactly pattern="/" component={HomePage} />
      <Match exactly pattern="/test" component={RandomNumbersPage} />
    </div>
  )
}

export default App
