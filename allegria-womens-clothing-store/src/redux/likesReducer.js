import { LIKES_INCREMENT, LIKES_DECREMENT } from './types';

function getIds() {
	let idsArray = localStorage.getItem("idsWishlist");
	if (idsArray == null)
		idsArray = [];
	else
		idsArray = JSON.parse(idsArray);
	return idsArray;
}

const initialState = {
	likes: getIds().length
}

export const likesReducer = (state = initialState, action) => {
	switch (action.type) {
		case LIKES_INCREMENT:
			return {
				...state,
				likes: state.likes + 1
			}
		case LIKES_DECREMENT:
			return {
				...state,
				likes: state.likes - 1
			}
		default:
			return state;
	}
}