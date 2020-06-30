import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Card.Group itemsPerRow={6}>
        {this.props.pokemon.map(poke => 
        <PokemonCard 
        name={poke.name}
        hp={poke.hp}
        front={poke.sprites.front}
        back={poke.sprites.back}
        key={poke.id}
        />)}
       
      </Card.Group>
    )
  }
}

export default PokemonCollection
