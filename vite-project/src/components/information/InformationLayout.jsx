import { Component } from 'react';

export class InformationLayout extends Component {
	render() {
		return <div className="text-xl font-bold mb-8 text-stone-800">{this.props.status}</div>;
	}
};
