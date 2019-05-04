import React, { Component } from 'react'

class EventBind extends Component {
	constructor(props){
		super(props)
		this.state = {
			message: 'Hello'
		}
		// this.clickHandler = this.clickHandler.bind(this)
	}

	// clickHandler(){
	// 	this.setState({
	// 		message: "Goodbye"
	// 	})
	// 	console.log(this)
	// }

	clickHandler = () => {
		this.setState({
			message: "Goodbye"
		})
		console.log(this)
	}

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				{/*<button onClick={this.clickHandler.bind(this)}>EventBind Click</button>*/}
				{/*<button onClick={() => this.clickHandler()}>EventBind Click</button>*/}
				<button onClick={this.clickHandler}>EventBind Click</button>
			</div>
		)
	}
}

export default EventBind