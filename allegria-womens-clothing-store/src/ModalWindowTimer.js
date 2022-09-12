import React from 'react';
import ModalWindow from './ModalWindow';


class ModalWindowTimer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
	}

	componentDidMount() {
		this.timerId = setTimeout(
			() => this.tick(),
			5000
		);
	}
	componentWillUnmount() {
		clearTimeout(this.timerId);
	}

	tick() {
		this.setState({
			show: true
		});
	}

	render() {
		return (
			<ModalWindow show={this.state.show} onHide={() => this.setState({ show: false })} />
		);
	}
}

export default ModalWindowTimer;