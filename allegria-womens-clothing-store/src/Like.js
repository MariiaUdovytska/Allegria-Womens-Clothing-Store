import React, { useState, useEffect } from 'react';
import './css/productCard.css';

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

function Like(props) {
	let ids = getIds();
	const [liked, setLiked] = useState(ids.includes(props.id));
	useEffect(() => {
		setLiked(ids.includes(props.id));
	}, [ids, props.id]);

	let handleClickLike = () => {
		if (props.id === undefined)
			return;
		let ids_l = getIds();

		if (liked === false) {
			ids_l.push(props.id);
		} else {
			ids_l = arrayRemove(ids_l, props.id)
		}

		setLiked(!liked);
		localStorage.setItem("idsWishlist", JSON.stringify(ids_l));
		if (props.clickHandler !== undefined) {
			props.clickHandler(Math.random());
		}
	}

	return (
		<div onClick={() => handleClickLike()} className='card__body-icons'>
			{liked === true
				? <div className='card__body-up-like'>
					<i className='bi bi-heart-fill' style={{ fontSize: '16px', color: '#E64926' }}></i></div>
				: <div className='card__body-up-like'>
					<i className='bi bi-heart' style={{ fontSize: '16px' }}></i>
				</div>
			}
		</div>
	)
}

export default Like;