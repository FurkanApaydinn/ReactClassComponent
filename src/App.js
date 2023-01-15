import { useState } from 'react'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import logo from './logo.svg'
import './App.css'

const App = () => {
  // console.log('render')
  const [aramaAlanı, setAramaAlanı] = useState('') //value,setValue
  const [canavarlar, setCanavarlar] = useState([])
  console.log('render')
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((users) => setCanavarlar(users))
  console.log(aramaAlanı)
  const aramaDeğişikliği = (e) => {
    const aramaAlanıDizesi = e.target.value.toLocaleLowerCase()
    setAramaAlanı(aramaAlanıDizesi)
    // const filtrelenmişCanavarlar = canavarlar.filter((canavar) => {
    //   return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
    // })
  }
  return (
    <div className='App'>
      <h1 className='app-title'>CANAVARLAR</h1>
      <SearchBox
        onChangeHandler={aramaDeğişikliği}
        placeholder='canavarları ara'
        className='monsters-search-box'
      />
      {/* <CardList canavarlar={filtrelenmişCanavarlar} /> */}
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       canavarlar: [],
//       aramaAlanı: '',
//     }
//     // console.log('constructor')
//   }
//   componentDidMount() {
//     // console.log('componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(() => {
//           return { canavarlar: users }
//         })
//       )
//   }

//   aramaDeğişikliği = (e) => {
//     const aramaAlanı = e.target.value.toLocaleLowerCase()

//     this.setState(() => {
//       return { aramaAlanı }
//     })
//   }

//   render() {
//     // console.log("App.js'den render")
//     const { canavarlar, aramaAlanı } = this.state
//     const { aramaDeğişikliği } = this
//     const filtrelenmişCanavarlar = canavarlar.filter(
//       //[{name: "Leanne"}, {name: "Emre"}]
//       (canavar) => {
//         return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
//       }
//     )
//     return (
//       <div className='App'>
//         <h1 className='app-title'>CANAVARLAR</h1>
//         <SearchBox
//           onChangeHandler={aramaDeğişikliği}
//           placeholder='canavarları ara'
//           className='monsters-search-box'
//         />
//         <CardList canavarlar={filtrelenmişCanavarlar} />
//       </div>
//     )
//   }
// }

export default App
