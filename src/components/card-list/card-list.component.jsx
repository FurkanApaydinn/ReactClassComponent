import { Component } from 'react'
import Card from '../card/card.component'
import './card-list.styles.css'

class CardList extends Component {
  render() {
    console.log(this.props.canavarlar)
    console.log('kart listesinden işlendi')
    const { canavarlar } = this.props
    return (
      <div className='card-list'>
        {canavarlar.map((canavar) => {
          return <Card canavar={canavar} />
        })}
      </div>
    )
  }
}

export default CardList
