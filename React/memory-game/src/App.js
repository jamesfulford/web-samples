import React, {Component} from 'react';
import Card from './Card';
import './App.css';

const COLORS = [
  'red',
  'crimson',
  'orange',
  'yellow',
  'green',
  'blue',
  'steelblue',
  'purple',
];

function getRandomColors() {
  const randomColors = COLORS.map(x => x).concat(COLORS.map(x => x));
  return _shuffle(randomColors);
}

function _shuffle(a) {
  // from: https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
  // Mutates input!
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

class App extends Component {
  constructor (props) {
    super(props);
    const colors = getRandomColors();
    this.state = {
      colors,
      cardStates: colors.map(x => 0),
      // 0: hidden,
      // 1: showing (select another)
      // 2: matched
      globalState: -1,
      // -1: none showing,
      // n: 1 showing (n being the index showing)
      // -2: showing no match
    };
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <button
            style={{
              alignSelf: 'flex-end',
              marginRight: 32,
            }}
            onClick={() => {
            const colors = getRandomColors();
            this.setState({
              globalState: -1,
              colors,
              cardStates: colors.map(x => 0),
            });
          }}>New Game</button>
        </header>
        <div className="cards-list">
          {this.state.colors.map((color, i) => {
            const cardState = this.state.cardStates[i];
            return (<Card cardState={cardState} color={color} onClick={() => {
              if (cardState !== 0) {
                this.setState({
                  // Hide unmatched cards
                  cardStates: this.state.cardStates.map(s => s === 1 ? 0 : s),
                  globalState: -1,
                });
                return;
              }
              switch (this.state.globalState) {
                case -1: // No attempts showing
                  this.setState({
                    // Flip over this card
                    cardStates: this.state.cardStates.map((s, j) => j === i ? 1 : s),
                    globalState: i,
                  });
                  break;
                case -2: // Showing bad match
                  // click anywhere to escape this state
                  this.setState({
                    // Hide unmatched cards
                    cardStates: this.state.cardStates.map(s => s === 1 ? 0 : s),
                    globalState: -1,
                  });
                  break;
                default:
                  const prevColor = this.state.colors[this.state.globalState];
                  if (prevColor === color) {
                    this.setState({
                      // Flip all cards of this color
                      cardStates: this.state.cardStates.map((s, j) => (this.state.colors[j] === color) ? 2 : s),
                      globalState: -1,
                    });
                  } else {
                    this.setState({
                      // Flip over this card
                      cardStates: this.state.cardStates.map((s, j) => j === i ? 1 : s),
                      globalState: -2,
                    });
                  }
                  break;
              }
            }} />);
          })}
        </div>
      </div>
    );
  }
}

export default App;
