import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'

const exact: boolean = true

ReactDOM.render(<App />, document.getElementById('root') as HTMLElement)
registerServiceWorker()
