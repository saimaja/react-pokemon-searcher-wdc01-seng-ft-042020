import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container} from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {pokemon: [],
    searchText: ''
  }


  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(response => response.json())
    .then(data => this.setState({pokemon: data}))
  }

  changeSearch = (e) => {
    let typedText = e.target.value
    this.setState({searchText: typedText})
    
  }

  pokeFilter = () => {
    let {pokemon, searchText} = this.state
    return pokemon.filter(p => p.name.includes(searchText))
  }

  addPoke = (pokemon) => {
    let newPoke = [pokemon, ...this.state.pokemon]
    this.setState({pokemon: newPoke})
  }


  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm add={this.addPoke}/>
        <br />
        <Search search={this.changeSearch}/>
        <br />
        <PokemonCollection pokemon={this.pokeFilter()}/>
      </Container>
    )
  }
}

export default PokemonPage
