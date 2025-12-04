import { Component } from 'react';
import { connect } from 'react-redux';
import { InformationLayout } from './InformationLayout';

export class InformationContainer extends Component {
	getStatus() {
		let status;

		if (this.props.isDraw) {
			status = 'Ничья';
		} else if (this.props.isWin) {
			status = `Победа: ${this.props.currentPlayer}`;
		} else {
			status = `Ходит: ${this.props.currentPlayer}`;
		}

		return status;
	}

	render() {
		return <InformationLayout status={this.getStatus()} />;
	}
};

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isDraw: state.isDraw,
	isWin: state.isWin,
});

export const Information = connect(mapStateToProps)(InformationContainer);
