import { INCREMENT, DECREMENT } from './types';

function getIds() {
	let idsArray = localStorage.getItem("idsBusket");
	if (idsArray == null)
		idsArray = [];
	else
		idsArray = JSON.parse(idsArray);
	return idsArray;
}

const initialState = {
	busket: getIds().length
}

export const busketReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				busket: state.busket + 1
			}
		case DECREMENT:
			return {
				...state,
				busket: state.busket - 1
			}
		default:
			return state;
	}
}