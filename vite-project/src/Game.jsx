import { Component } from 'react';
import { connect } from 'react-redux';
import { GameLayout } from './GameLayout';
import { RESTART_GAME } from './actions';

export class GameContainer extends Component {
	render() {
		return <GameLayout onResetGame={this.props.onResetGame} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	onResetGame: () => dispatch(RESTART_GAME),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);
