import { Component } from 'react';

export class FieldLayout extends Component {
	render() {
		return (
			<div class="grid grid-cols-3 grid-rows-3 gap-2">
				{this.props.field.map((cell, index) => {
					return (
						<button
							className="
								w-20 h-20
								flex items-center justify-center
								text-[28px] font-bold text-[#3a3939]
								bg-white rounded-lg border-0 cursor-pointer
								transition-transform duration-200 transform-gpu will-change-transform
								hover:bg-[#e8f1ff] hover:scale-105
								disabled:cursor-default disabled:opacity-60 disabled:hover:scale-100
							"
							key={index}
							disabled={this.props.isGameEnded}
							onClick={() => this.props.onFieldClick(index)}
						>
							{cell}
						</button>
					);
				})}
			</div>
		);
	}
}
