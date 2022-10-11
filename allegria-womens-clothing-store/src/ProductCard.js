import React, { useRef, useState } from 'react';
import './css/productCard.css';
import { Link } from 'react-router-dom';

function ProductCard(props) {
	let showBusket = props.price !== undefined;
	let showSale = props.sale !== undefined;

	const [liked, setLiked] = useState(false);

	let handleClickLike = () => {
		setLiked(true);
	}

	let link = `/product?id=${props.id}`;
	if (props.id === undefined) {
		link = '/';
	}
	return (
		<div className='router-link'>
			<div className='cardd'>
				<div className='card__body'>
					<Link to={link}><span className='card__body-hover'><span>переглянути</span></span></Link>
					<div className='card__body-img'>
						<Link to={link}><img src={props.image} alt='imageProduct'></img></Link>
						<div onClick={() => handleClickLike()} className='card__body-icons'>
							{liked === true
								? <div className='card__body-up-like'>
									<i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i></div>
								: <div className='card__body-up-like'>
									<i className='bi bi-heart' style={{ fontSize: '16px' }}></i>
								</div>
							}
							<div className='card__body-up-sale' style={{ visibility: (showSale === true ? 'visible' : 'hidden') }}><span>{props.sale} %</span></div>
						</div>
					</div>
					<Link to={link}>
						<div className='card__body-nameprice'>
							<h4>{props.name}</h4>
							<h5>{props.categories}</h5>
							{showBusket === true
								? <div className='card__body-nameprice-yes'>
									<div className='card__body-nameprice-price-old'><span>{props.oldPrice}</span></div>
									<div className='card__body-nameprice-price'><span>{props.price}</span></div>
								</div>
								: <div className='card__body-nameprice-instock'>
									<div className='card__body-nameprice-havnot'>не в наявності</div>
								</div>
							}
						</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default ProductCard;