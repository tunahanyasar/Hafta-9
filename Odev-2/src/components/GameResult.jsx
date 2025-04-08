import PropTypes from 'prop-types';
import './GameResult.css';

const GameResult = ({ player1Name, player2Name, player1Value, player2Value }) => {
  if (player1Value > player2Value) {
    return (
      <div className="game-result">
        {player1Name} Kazandı! 🎉 ({player1Value} &gt; {player2Value})
      </div>
    );
  } else if (player2Value > player1Value) {
    return (
      <div className="game-result">
        {player2Name} Kazandı! 🎉 ({player2Value} &gt; {player1Value})
      </div>
    );
  } else {
    return (
      <div className="game-result">
        Berabere! 🤝 ({player1Value} = {player2Value})
      </div>
    );
  }
};

GameResult.propTypes = {
  player1Name: PropTypes.string.isRequired,
  player2Name: PropTypes.string.isRequired,
  player1Value: PropTypes.number.isRequired,
  player2Value: PropTypes.number.isRequired
};

export default GameResult; 