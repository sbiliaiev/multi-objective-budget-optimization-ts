import * as React from 'react'
import './App.css'

import logo from './logo.svg'

// Components
import { Button, ButtonToolbar, Table } from 'react-bootstrap'

// Data
import { defaultValues } from './data'
import { ecologicStrategy, economicStrategy, socialStrategy } from './data'

// Utils
import { createNormilizeMatrix, sortNormilizedMatrix } from './utils'

// Types
import { IAlternative, INormilizedMatrix, IStrategy } from './types'

class App extends React.Component {
  public state = {
    isSelectedStrategy: false,
    strategy: null,
  }

  public setStrategy = (strategy: IStrategy) => {
    this.setState({ strategy, isSelectedStrategy: true })
  }

  public renderNormilizedMatrix = () => {
    const { isSelectedStrategy, strategy } = this.state

    if (isSelectedStrategy && strategy) {
      const normilizedMatrix: INormilizedMatrix[] = createNormilizeMatrix(defaultValues, strategy)

      console.log('EHRERE', normilizedMatrix)

      return (
        <div>
          <p className="App-intro">Нормалізована матриця</p>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Вартість (у млн доларів)</th>
                <th>Економічна ефективність</th>
                <th>Екологічна ефективність</th>
                <th>Соціальна ефективність</th>
                <th>Сумарна ефективність</th>
              </tr>
            </thead>
            <tbody>
              {normilizedMatrix.map((alternative: INormilizedMatrix) => (
                <tr key={alternative.number}>
                  <td>{alternative.number}</td>
                  <td>{alternative.cost}</td>
                  <td>{alternative.economicEfficiency}</td>
                  <td>{alternative.ecologicEfficiency}</td>
                  <td>{alternative.socialEfficiency}</td>
                  <td>
                    <b>{alternative.summaryEfficiency}</b>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {this.renderSortedNormilizedMatrix(normilizedMatrix)}
        </div>
      )
    }

    return null
  }

  public renderSortedNormilizedMatrix = (data: INormilizedMatrix[]) => {
    const sortedMatrix = sortNormilizedMatrix(data)

    return (
      <div style={{ marginBottom: '50px' }}>
        <p className="App-intro">Відсортована матриця за сумарною ефективністю</p>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Вартість (у млн доларів)</th>
              <th>Економічна ефективність</th>
              <th>Екологічна ефективність</th>
              <th>Соціальна ефективність</th>
              <th>Сумарна ефективність</th>
            </tr>
          </thead>
          <tbody>
            {sortedMatrix.map((alternative: INormilizedMatrix) => (
              <tr key={alternative.number}>
                <td>
                  <b>{alternative.number}</b>
                </td>
                <td>{alternative.cost}</td>
                <td>{alternative.economicEfficiency}</td>
                <td>{alternative.ecologicEfficiency}</td>
                <td>{alternative.socialEfficiency}</td>
                <td>
                  <b>{alternative.summaryEfficiency}</b>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }

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

        <div style={{ textAlign: 'center' }}>
          <div style={{ width: '960px', margin: 'auto' }}>
            <Table striped bordered condensed hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Вартість (у млн доларів)</th>
                  <th>Економічний критерій</th>
                  <th>Екологічній критерій</th>
                  <th>Соціальний критерій</th>
                </tr>
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
            <ButtonToolbar
              style={{ marginTop: '100px', marginBottom: '100px', marginLeft: 'auto', marginRight: 'auto' }}
            >
              <Button
                bsStyle="primary"
                style={{ marginRight: '20px' }}
                onClick={() => this.setStrategy(economicStrategy)}
              >
                Розрахувати для економічної стратегії
              </Button>
              <Button
                bsStyle="success"
                style={{ marginRight: '20px' }}
                onClick={() => this.setStrategy(ecologicStrategy)}
              >
                Розрахувати для екологічної стратегії
              </Button>
              <Button bsStyle="warning" onClick={() => this.setStrategy(socialStrategy)}>
                Розрахувати для соціальної стратегії
              </Button>
            </ButtonToolbar>
            {this.renderNormilizedMatrix()}
          </div>
        </div>
      </div>
    )
  }
}

export default App
