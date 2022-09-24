import React, { useState } from 'react';
import '../css/productCardsPage/productCardsPage.css';
import { Button, Offcanvas } from 'react-bootstrap';
import FilterProdcts from './FilterProdcts';
import ExtensionFilter from './ExtensionFilter';

function OffCanvas({ name, buttonName, ...props }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow} className="me-2">
				{buttonName}
			</Button>
			<Offcanvas show={show} onHide={handleClose} {...props} className='offcanvas-filter' >
				<Offcanvas.Header closeButton>
					<Offcanvas.Title>Фильтр</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body>
					<FilterProdcts openAccordion={false} />
					<ExtensionFilter />
				</Offcanvas.Body>
			</Offcanvas>
		</>
	);
}

export default OffCanvas;