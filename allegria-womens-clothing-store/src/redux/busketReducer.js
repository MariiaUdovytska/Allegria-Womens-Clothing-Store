import { BUSKET_INCREMENT, BUSKET_DECREMENT } from './types';

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
		case BUSKET_INCREMENT:
			return {
				...state,
				busket: state.busket + 1
			}
		case BUSKET_DECREMENT:
			return {
				...state,
				busket: state.busket - 1
			}
		default:
			return state;
	}
}