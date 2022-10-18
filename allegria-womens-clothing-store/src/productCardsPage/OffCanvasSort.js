import React, { useState } from 'react';
import '../css/productCardsPage/productCardsPage.css';
import { Button, Offcanvas } from 'react-bootstrap';

function OffCanvasSort({ name, buttonName, ...props }) {
	const [show, setShow] = useState(false);
	const [touchPosition, setTouchPosition] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let handleTouchStart = (e) => {
		let touchDown = 0;
		touchDown = e.touches[0].clientY;
		setTouchPosition(touchDown);
	}

	let handleTouchMove = (e) => {
		const touchDown = touchPosition
		if (touchDown === null) {
			return
		}

		const currentTouch = e.touches[0].clientY
		const diff = touchDown - currentTouch
		if (diff < 5) {
			setShow(false);
		}
		setTouchPosition(null);
	}

	return (
		<>
			<Button variant="primary" onClick={handleShow} className="me-2">
				{buttonName}
			</Button>
			<Offcanvas show={show} onHide={handleClose} {...props} className='offcanvas-sort' >
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Сортировать</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}>
					<ul>
						<li>Новинки</li>
						<li>По возрастанию цены</li>
						<li>По убыванию цены</li>
					</ul>
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default OffCanvasSort;