import { Component } from 'react'

import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      canavarlar: [],
      aramaAlanı: '',
    }
    console.log('constructor')
  }
  componentDidMount() {
    console.log('componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => {
            return { canavarlar: users }
          },
          () => {
            console.log(this.state)
          }
        )
      )
  }

  aramaDeğişikliği = (e) => {
    const aramaAlanı = e.target.value.toLocaleLowerCase()

    this.setState(() => {
      return { aramaAlanı }
    })
  }

  render() {
    console.log('render')
    const { canavarlar, aramaAlanı } = this.state
    const { aramaDeğişikliği } = this
    const filtrelenmişCanavarlar = canavarlar.filter(
      //[{name: "Leanne"}, {name: "Emre"}]
      (canavar) => {
        return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
      }
    )
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search-monsters'
          onChange={aramaDeğişikliği}
        />
        {filtrelenmişCanavarlar.map((canavar) => {
          return (
            <div key={canavar.id}>
              <h1>{canavar.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
