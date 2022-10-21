import React from 'react';
import './css/productCard.css';
import { Link } from 'react-router-dom';
import Like from './Like';

function ProductCard(props) {
	let showBusket = props.price !== undefined;
	let showSale = props.sale !== undefined;

	let link = `/product?id=${props.id}`;
	if (props.id === undefined) {
		link = '/';
	}
	return (
		<div className='cardd'>
			<div className='card__body router-link'>
				<Link to={link}><span className='card__body-hover'><span>смотреть</span></span></Link>
				<div className='card__body-img'>
					<Link to={link}><img src={props.image} alt='imageProduct'></img></Link>
					<Like id={props.id} />
					<div className='card__body-up-sale' style={{ visibility: (showSale === true ? 'visible' : 'hidden') }}><span>{props.sale} %</span></div>
				</div>
				<Link to={link}>
					<div className='card__body-nameprice'>
						<h4>{props.name}</h4>
						<h5>{props.categories}</h5>
						{showBusket === true
							? <div className='card__body-nameprice-yes'>
								<div className='card__body-nameprice-price-old'><span>{props.oldPrice}</span></div>
								<div className='card__body-nameprice-price'><span>{props.price} UAH</span></div>
							</div>
							: <div className='card__body-nameprice-instock'>
								<div className='card__body-nameprice-havnot'>не в наявності</div>
							</div>
						}
					</div>
				</Link>
			</div>
		</div>
	)
}

export default ProductCard;