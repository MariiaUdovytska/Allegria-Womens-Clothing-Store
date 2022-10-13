import React from 'react';
import './css/wishlist/wishlist.css';

function getIds() {
	let idsArray = localStorage.getItem("idsBusket");
	if (idsArray == null)
		idsArray = [];
	else
		idsArray = JSON.parse(idsArray);
	return idsArray;
}

function ButtonBusket(props) {

	let handleClickBusket = () => {
		if (props.id == undefined)
			return;
		let ids_l = getIds();

		if (!ids_l.includes(props.id)) {
			ids_l.push(props.id);
			localStorage.setItem("idsBusket", JSON.stringify(ids_l));
		}
	}

	return (
		<button onClick={() => handleClickBusket()} className='wishlist__body-cards-info-right-btn' type='submit'>добавить в корзину</button>
	)
}

export default ButtonBusket;