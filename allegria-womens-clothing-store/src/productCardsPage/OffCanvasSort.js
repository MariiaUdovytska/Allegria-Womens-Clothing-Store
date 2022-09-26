import React, { useState } from 'react';
import '../css/productCardsPage/productCardsPage.css';
import { Button, Offcanvas } from 'react-bootstrap';

function OffCanvasSort({ name, buttonName, ...props }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow} className="me-2">
				{buttonName}
			</Button>
			<Offcanvas show={show} onHide={handleClose} {...props} className='offcanvas-sort' >
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Сортировать</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
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