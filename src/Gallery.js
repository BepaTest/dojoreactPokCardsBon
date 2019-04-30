import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    }
  }

  componentWillMount() {
    this.getCardsPokemon();
  }

  getCardsPokemon() {
    fetch('https://api.pokemontcg.io/v1/cards/', {
      method: 'GET',
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          this.setState({
            cards: json.cards,
          });
        });
      }
    });
  }

  render() {
    const { cards } = this.state
    const { search } = this.props

    return (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {
          cards.map((card, index) => (
            <div style={{
              border: (card.name.includes(search) && search !== '') ? ' solid 2px red' : 'grey'
            }}>
              <img src={card.imageUrl} alt={card.name} />
            </div>)
          )
        }
      </div>
    );
  }
}

export default Gallery;