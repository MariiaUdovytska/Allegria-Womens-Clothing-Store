import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function IconsBusket(props) {
	return (
		<Link to="/busket" >
			<i className="bi bi-bag" style={{ fontSize: '20px' }}></i>
			<span className='menu__icons-count'>{props.busket}</span>
		</Link>
	)
}

function mapStateToProps(state) {
	const { busketReducer } = state;
	return {
		busket: busketReducer.busket
	}
}

export default connect(mapStateToProps)(IconsBusket);