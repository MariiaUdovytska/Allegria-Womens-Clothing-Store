import React, { useState } from 'react';
import '../css/productCardsPage/productCardsPage.css';
import { Button, Offcanvas } from 'react-bootstrap';
import FilterProdcts from './FilterProdcts';
import ExtensionFilter from './ExtensionFilter';

function OffCanvas({ name, buttonName, ...props }) {
	const [show, setShow] = useState(false);
	const [touchPosition, setTouchPosition] = useState(null);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	let handleTouchStart = (e) => {
		let touchDown = 0;
		switch (props.placement) {
			case 'top':
				touchDown = e.touches[0].clientY;
				setTouchPosition(touchDown);
				break;
			case 'end':
				touchDown = e.touches[0].clientX;
				setTouchPosition(touchDown);
				break;
			default: break;
		}
	}

	let handleTouchMove = (e) => {
		const touchDown = touchPosition
		if (touchDown === null) {
			return
		}
		if (props.placement === 'top') {
			const currentTouch = e.touches[0].clientY
			const diff = touchDown - currentTouch
			if (diff > 5) {
				setShow(false);
			}
			setTouchPosition(null);
		} else {
			const currentTouch = e.touches[0].clientX
			const diff = touchDown - currentTouch
			if (diff < 5) {
				setShow(false);
			}
			setTouchPosition(null);
		}
	}

	return (
		<>
			<Button
				variant="primary"
				onClick={handleShow}
				className="me-2">
				{buttonName}
			</Button>
			<Offcanvas show={show} onHide={handleClose} {...props} className='offcanvas-filter'>
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Фильтр</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}>
					<FilterProdcts openAccordion={false} />
					<ExtensionFilter />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default OffCanvas;