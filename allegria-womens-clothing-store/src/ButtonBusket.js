import React, { useState } from 'react';
import './css/wishlist/wishlist.css';
import Toast from 'react-bootstrap/Toast';

function getIds() {
	let idsArray = localStorage.getItem("idsBusket");
	if (idsArray == null)
		idsArray = [];
	else
		idsArray = JSON.parse(idsArray);
	return idsArray;
}

function ButtonBusket(props) {
	const [toastShow, setToastShow] = useState(false);
	const [inBusket, setInBusket] = useState(getIds().includes(props.id));

	let handleClickBusket = () => {
		if (props.id == undefined)
			return;
		let ids_l = getIds();

		if (!ids_l.includes(props.id)) {
			ids_l.push(props.id);
			localStorage.setItem("idsBusket", JSON.stringify(ids_l));
			setToastShow(true);
			setInBusket(true);
		}
	}

	return (
		<>
			<button
				onClick={() => handleClickBusket()}
				className='wishlist__body-cards-info-right-btn'
				type='submit'
				disabled={inBusket || props.disabled}
			>
				добавить в корзину
			</button>
			<Toast onClose={() => setToastShow(false)} show={toastShow} delay={1500} autohide style={{ position: "fixed", bottom: "25px", right: "25px" }}>
				<Toast.Header closeButton={false}>
					<strong className="me-auto">Allegria</strong>
				</Toast.Header>
				<Toast.Body>Добавленно в корзину</Toast.Body>
			</Toast>
		</>
	)
}

export default ButtonBusket;