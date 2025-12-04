import { Component } from 'react';
import { connect } from 'react-redux';
import { FieldLayout } from './FieldLayout';
import { cellClick } from '../../actions';
import { PLAYER } from '../../constants/PLAYER';

export class FieldContainer extends Component {
	constructor(props) {
		super(props);

		this.onFieldClick = this.onFieldClick.bind(this);
	}

	isGameEnded() {
		return this.props.isDraw || this.props.isWin;
	}

	onFieldClick(index) {
		if (this.isGameEnded() || this.props.field[index] !== PLAYER.EMPTY) return;
		this.props.onFieldClick(index);
	}

	render() {
		return (
			<FieldLayout
				field={this.props.field}
				onFieldClick={this.onFieldClick}
				isGameEnded={this.isGameEnded()}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	isDraw: state.isDraw,
	isWin: state.isWin,
});

const mapDispatchToProps = (dispatch) => ({
	onFieldClick: (index) => dispatch(cellClick(index)),
});

export const Field = connect(mapStateToProps, mapDispatchToProps)(FieldContainer);

