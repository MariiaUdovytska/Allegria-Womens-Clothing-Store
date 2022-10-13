
import React, { useState } from 'react';
import '../css/wishlist/wishlist.css';
import stockCards from '../data/stockCards.json';
import { Link } from 'react-router-dom';

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
		let showPrice = element.price !== undefined;

		let link = `/product?id=${elementId}`;
		if (elementId === undefined) {
			link = '/';
		}

		arrayCardsDiv.push(
			<div key={index} className='wishlist__body-cards'>
				<div className='wishlist__body-cards-delete' onClick={() => handleClickDelete(elementId)}><i className="bi bi-x-lg" style={{ fontSize: '20px' }}></i></div>
				<div className='wishlist__body-cards-info'>
					<div className='wishlist__body-cards-info-img'><Link to={link} key={elementId}><img src={element.image}></img></Link></div>
					<div className='wishlist__body-cards-info-right router-link'>
						<Link to={link} key={elementId}>
							<div className='wishlist__body-cards-info-right-name'>{element.name}</div>
						</Link>
						<div className='wishlist__body-cards-info-right-categories'>{element.categories}</div>
						{showPrice === true
							? <div className='wishlist__body-cards-info-right-price'>
								<div className='wishlist__body-cards-info-right-price-old'><span>{element.oldPrice}</span></div>
								<div className='wishlist__body-cards-info-right-price-new'><span>{element.price}</span></div>
							</div>
							: <div className='wishlist__body-cards-info-right-instock'>
								<span className='wishlist__body-cards-info-right-havnot'>нет в наличии</span>
								<span className='wishlist__body-cards-info-right-reportadmission'>Сообщить о поступлении</span>
							</div>
						}
						<button className='wishlist__body-cards-info-right-btn' type='submit'>добавить в корзину</button>
					</div>
				</div>
			</div>
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