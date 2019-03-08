import React, { Component } from 'react';
import './CardView.css';

class CardView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: props.id,
			selected: props.selected,
			faceUp: props.faceUp,
			imgUrl: props.imgUrl,
		}
	}

	render() {
		let className = "Card"
		if (this.state.selected) {
			className = "SelectedCard"
		}
		let url = './img/card_back.jpg';
		console.log(this.state.faceUp);
		if (this.state.faceUp) {
			url = this.state.imgUrl;
		}
		return (
			<div className={className} key={this.state.id}>
				<img className={className} src={url} alt={this.state.id} />
			</div>
		)
	}
}

export default CardView;