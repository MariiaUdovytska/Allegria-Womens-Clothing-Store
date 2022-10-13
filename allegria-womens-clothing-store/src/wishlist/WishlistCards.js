import React from 'react';
import '../css/wishlist/wishlist.css';
import { Link } from 'react-router-dom';

function WishlistCards(props) {
	let element = props.element;

	let link = `/product?id=${element.id}`;
	if (element.id === undefined) {
		link = '/';
	}
	let showPrice = element.price !== undefined;

	return (
		<div className='wishlist__body-cards'>
			<div className='wishlist__body-cards-delete' onClick={() => props.handleClickDelete(element.id)}><i className="bi bi-x-lg" style={{ fontSize: '20px' }}></i></div>
			<div className='wishlist__body-cards-info'>
				<div className='wishlist__body-cards-info-img'>
					<Link to={link} key={element.id}><img src={element.image} alt="clothings"></img></Link>
				</div>
				<div className='wishlist__body-cards-info-right router-link'>
					<Link to={link} key={element.id}>
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

export default WishlistCards;