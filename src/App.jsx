import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import reactLogo from './assets/react.svg'
import warhammerLogo from './assets/warhammerLogo.png'
import necronIcon from './assets/NecronIcon.jpg'
import './App.css'

function App() {
  return (
    <>
      <section id="exercises">
        <div id="docs">
          {/* <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg> */}
          <h2>Bootstrap</h2>
          <p>Really not sure what to write here</p>
          <ul>
            <li>
              <img src={necronIcon} width={"60"}/>
              <img src={necronIcon} width={"60"}/>
              <img src={necronIcon} width={"60"}/>
            </li>
          </ul>
          <ul>
            <li>
              <img src={necronIcon} width={"60"}/>
              <img src={necronIcon} width={"60"}/>
            </li>
          </ul>
          <ul>
            <div>
              <input type="text" placeholder="Enter your name" />
            </div>
          </ul>
          <ul>
            <li>
              <a href="https://www.warhammer-community.com/en-gb/" target="_blank">
                <img className="logo" src={warhammerLogo} alt="" />
                Warhammer 40k
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                React
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
