import { Component } from 'react';
import { connect } from 'react-redux';
import { Information } from './components';
import { Field } from './components';

export class GameLayoutContainer extends Component {
	render() {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-slate-300">
				<Information />
				<Field />

				<button
					className="mt-8 px-5 py-2 bg-slate-600 text-white rounded-lg text-base cursor-pointer transition-colors hover:bg-slate-500"
					onClick={this.props.onResetGame}
				>
					Начать заново
				</button>
			</div>
		);
	}
}

export const GameLayout = connect(null, null)(GameLayoutContainer);
