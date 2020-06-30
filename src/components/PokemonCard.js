import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    frontShowing: true
  }
  
  toggleCard = () => {
    this.setState({frontShowing: !this.state.frontShowing})
  }

  render() {
    return (
      <Card onClick={this.toggleCard}>
        <div>
          <div className="image">
            <img src={this.state.frontShowing ? this.props.front : this.props.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
