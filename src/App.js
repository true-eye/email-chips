import React from 'react'
import EmailsInput from './components/EmailsInput'
import './App.scss'

function App() {
  return (
    <div className="App">
      <div className="email-form">
        <div className="row row-from">
          <label>From:</label>
          <span>Debra Jones</span>
        </div>
        <div className="row row-to">
          <label>To:</label>
          <EmailsInput chips={['react', 'javascript', 'scss']} placeholder="Add a tag..." />
        </div>
        <div className="divider" />
      </div>
    </div>
  )
}

export default App
