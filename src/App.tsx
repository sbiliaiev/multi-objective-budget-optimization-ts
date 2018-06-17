import * as React from 'react'
import './App.css'

import logo from './logo.svg'

// Components
import { Button, ButtonToolbar, Table } from 'react-bootstrap'

// Data
import { defaultValues } from './data'
// import {ecologicStrategy, economicStrategy, socialStrategy} from './data'

// Utils
// import { createNormilizeMatrix, sortNormilizedMatrix } from './utils'

// Types
import { IAlternative } from './types'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Багатокритеріальна оптимізація списку альтернатив в залежності від стратегії розвитку регіону
          </h1>
        </header>
        <p className="App-intro">Початковий набір даних</p>
        <Table striped bordered condensed hover>
          <thead>
            <tr>#</tr>
            <tr>Вартість</tr>
            <tr>Економічний критерій</tr>
            <tr>Екологічній критерій</tr>
            <tr>Соціальний критерій</tr>
          </thead>
          <tbody>
            {defaultValues.map((alternative: IAlternative) => (
              <tr key={alternative.number}>
                <td>{alternative.number}</td>
                <td>{alternative.cost}</td>
                <td>{alternative.economic}</td>
                <td>{alternative.ecologic}</td>
                <td>{alternative.social}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ButtonToolbar>
          <Button bsStyle="primary">Розрахувати для економічної стратегії</Button>
          <Button bsStyle="success">Розрахувати для екологічної стратегії</Button>
          <Button bsStyle="warning">Розрахувати для соціальної стратегії</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default App
