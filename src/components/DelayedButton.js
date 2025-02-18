// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

	handleDelayedClick = event => {
		setTimeout(() => {
			event.persist();
			this.props.onDelayedClick(event)},
			this.props.delay);
	}

	render() {

		return(
			<button onClick={this.handleDelayedClick}>Delay </button>
		)
	}
}