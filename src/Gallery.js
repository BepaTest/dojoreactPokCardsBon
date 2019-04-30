import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: '',
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
    console.log(search)
    return (
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {
          cards
            ? cards.map((card, index) => (
              (card.name.includes(search)&&search!=='')
                ?
                (<div style={{
                  border: ' solid 2px red'
                }}><img src={card.imageUrl} alt={card.name} />
                </div>)
            :(<div style={{
                    border: 'grey'
                  }}>
                  <img src={card.imageUrl} alt={card.name} />
                  </div>)
              
                  ))
                  :null
                }
      </div>
                );
        }
      }
      
export default Gallery;