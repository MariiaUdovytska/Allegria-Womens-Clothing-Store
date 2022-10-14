import React, { useState } from 'react';
import '../css/busket/busket.css';
import stockCards from '../data/stockCards.json';
import WishlistCards from '../wishlist/WishlistCards';

function getIds() {
	let idsArray = localStorage.getItem("idsBusket");
	if (idsArray == null)
		idsArray = [];
	else
		idsArray = JSON.parse(idsArray);
	return idsArray;
}

function arrayRemove(arr, value) {
	return arr.filter(function (element) {
		return element != value;
	});
}

function Busket(props) {
	let dataCardBusket = stockCards;
	let arrayCardsInBusket = [];
	const [idsBusket, setIdsBusket] = useState(getIds());

	let handleClickDelete = (id) => {
		let ids_l = getIds();
		ids_l = arrayRemove(ids_l, id);
		localStorage.setItem("idsBusket", JSON.stringify(ids_l));
		setIdsBusket(ids_l);
	}

	let sumPrices = 0;

	for (let index = 0; index < idsBusket.length; index++) {
		const element = dataCardBusket[idsBusket[index]];
		sumPrices += element.price;
		arrayCardsInBusket.push(
			<WishlistCards key={index} element={element} handleClickDelete={handleClickDelete} />
		);
	}
	return (
		<div className='busket'>
			<h2 className='busket__title'>Корзина</h2>
			<div className='busket__body'>
				<div className='busket__body-person'>
					tst lef
				</div>
				<div className='busket__body-cards'>
					{arrayCardsInBusket}
					<div className='busket__body-cards-total'>Всего: <span>{sumPrices} UAH</span></div>
				</div>
			</div>
		</div>
	);
}

export default Busket;