import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function IconsLikes(props) {
	return (
		<Link to="/wishlist">
			<i className="bi bi-heart" style={{ fontSize: '19px' }}></i>
			{(props.likes > 0) ? <span className='menu__icons-count'>{props.likes}</span> : ""}
		</Link>
	)
}

function mapStateToProps(state) {
	const { likesReducer } = state;
	return {
		likes: likesReducer.likes
	}
}

export default connect(mapStateToProps)(IconsLikes);