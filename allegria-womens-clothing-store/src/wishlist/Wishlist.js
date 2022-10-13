import React, { useState } from 'react';
import '../css/wishlist/wishlist.css';
import stockCards from '../data/stockCards.json';
import { Link } from 'react-router-dom';
import WishlistCards from './WishlistCards';

function getIds() {
	let idsArray = localStorage.getItem("idsWishlist");
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

function Wishlist(props) {
	let dataCardWishlist = stockCards;
	let arrayCardsDiv = [];
	const [ids, setIds] = useState(getIds());

	let handleClickDelete = (id) => {
		let ids_l = getIds();
		ids_l = arrayRemove(ids_l, id);
		localStorage.setItem("idsWishlist", JSON.stringify(ids_l));
		setIds(ids_l);
	}

	for (let index = 0; index < ids.length; index++) {
		const elementId = ids[index];
		const element = dataCardWishlist[elementId];

		arrayCardsDiv.push(
			<WishlistCards key={index} element={element} handleClickDelete={handleClickDelete} showBtnBusket={true} />
		);
	}

	return (
		<div className='wishlist'>
			<div className='wishlist__body'>
				{(ids.length == 0)
					? <div className='not-faund containerM'>{"Вы ничего не выбрали"}</div>
					: arrayCardsDiv
				}
			</div>
		</div>
	);
}

export default Wishlist;